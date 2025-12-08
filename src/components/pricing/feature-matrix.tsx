import { cn } from "@/lib/utils";

type TierKey = "hobbyist" | "bareBones" | "solo" | "field";

type FeatureRow = {
  label: string;
  helpText?: string;
  values: Record<TierKey, boolean | string>;
};

const tiers: { key: TierKey; name: string }[] = [
  { key: "hobbyist", name: "Hobbyist" },
  { key: "bareBones", name: "Bare Bones" },
  { key: "solo", name: "Solo" },
  { key: "field", name: "Field" },
];

const rows: FeatureRow[] = [
  {
    label: "Custom Built and Tested",
    values: { hobbyist: false, bareBones: false, solo: true, field: true },
  },  {
    label: "Rapture Kit content included (26GB+)",
    values: { hobbyist: "Download for free", bareBones: true, solo: true, field: true },
  },
  {
    label: "Pre-configured microSD cards",
    values: { hobbyist: false, bareBones: "2× 128GB", solo: "2× 128GB", field: "2× 128GB" },
  },
  {
    label: "Raspberry Pi 5 included (8GB)",
    values: { hobbyist: false, bareBones: false, solo: true, field: true },
  },
  {
    label: "20,000 mAh battery pack",
    values: { hobbyist: false, bareBones: false, solo: true, field: true },
  },
  {
    label: "Integrated display + speakers",
    values: { hobbyist: false, bareBones: false, solo: false, field: true },
  },
  {
    label: "Solar panel included",
    values: { hobbyist: false, bareBones: false, solo: false, field: true },
  },
  {
    label: "Setup in under 5 minutes",
    values: { hobbyist: false, bareBones: true, solo: true, field: true },
  },
  {
    label: "Email support",
    values: { hobbyist: true, bareBones: true, solo: true, field: true },
  },
  {
    label: "Priority email support",
    values: { hobbyist: false, bareBones: false, solo: false, field: true },
  },
  {
    label: "Shipping and Handling Included",
    values: { hobbyist: false, bareBones: true, solo: true, field: true },
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center gap-1 text-green-600">
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 11.59l6.54-6.54a1 1 0 011.664.24z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Included</span>
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 text-red-500">
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Not included</span>
      </span>
    );
  }
  // string
  return <span className="text-gray-900">{value}</span>;
}

export function FeatureMatrix() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[720px] w-full border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 bg-white px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b border-gray-200">
              Features
            </th>
            {tiers.map((tier) => (
              <th
                key={tier.key}
                className={cn(
                  "px-4 py-3 text-sm font-semibold text-gray-700 border-b border-gray-200 text-left"
                )}
              >
                {tier.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="odd:bg-white even:bg-gray-50">
              <th
                scope="row"
                className={cn(
                  "sticky left-0 z-10 bg-inherit px-4 py-3 text-sm font-medium text-gray-900 border-b border-gray-100"
                )}
              >
                {row.label}
                {row.helpText ? (
                  <span className="ml-2 text-xs text-gray-500">{row.helpText}</span>
                ) : null}
              </th>
              {tiers.map((tier) => (
                <td
                  key={tier.key}
                  className={cn(
                    "px-4 py-3 text-sm text-gray-700 border-b border-gray-100 align-middle"
                  )}
                >
                  <CellValue value={row.values[tier.key]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


