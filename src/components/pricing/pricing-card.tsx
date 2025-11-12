import Link from "next/link";
import { cn } from "@/lib/utils";

export type PricingCardProps = {
  title: string;
  price: number | "FREE";
  description?: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
};

export function PricingCard({
  title,
  price,
  description,
  features,
  ctaLabel,
  ctaHref,
  highlighted = false,
  badge,
}: PricingCardProps) {
  const isFree = price === "FREE" || price === 0;

  return (
    <div
      className={cn(
        "relative rounded-2xl border p-6 sm:p-8 transition-all",
        "bg-white",
        highlighted
          ? "border-primary-500 shadow-[0_10px_30px_-10px_rgba(2,132,199,0.35)] ring-1 ring-primary-500/10"
          : "border-gray-200 hover:shadow-sm"
      )}
    >
      {badge ? (
        <div className="absolute -top-3 right-4">
          <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 ring-1 ring-inset ring-primary-100">
            {badge}
          </span>
        </div>
      ) : null}

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description ? (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        ) : null}
      </div>

      <div className="mb-6">
        <div className="flex items-end gap-2">
          <span
            className={cn(
              "text-3xl sm:text-4xl font-extrabold tracking-tight",
              "text-gray-900"
            )}
          >
            {isFree ? "FREE" : `$${price}`}
          </span>
          {!isFree ? (
            <span className="text-sm text-gray-500">per unit</span>
          ) : null}
        </div>
      </div>

      <ul className="space-y-2.5 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <svg
              className={cn(
                "h-5 w-5 flex-none",
                highlighted ? "text-primary-600" : "text-primary-500"
              )}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 11.59l6.54-6.54a1 1 0 011.664.24z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Link
          href={ctaHref}
          className={cn(
            "inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all",
            highlighted
              ? "bg-primary-600 text-white shadow hover:bg-primary-700"
              : "bg-gray-900 text-white hover:bg-gray-800"
          )}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}


