import { cn } from "@/lib/utils";

interface CalloutProps {
  children: React.ReactNode;
  type?: "info" | "warning" | "error" | "success";
  title?: string;
}

const typeStyles = {
  info: {
    container: "bg-sky-50 border-sky-200 text-sky-900",
    icon: "ℹ️",
    iconBg: "bg-sky-100",
  },
  warning: {
    container: "bg-amber-50 border-amber-200 text-amber-900",
    icon: "⚠️",
    iconBg: "bg-amber-100",
  },
  error: {
    container: "bg-red-50 border-red-200 text-red-900",
    icon: "❌",
    iconBg: "bg-red-100",
  },
  success: {
    container: "bg-emerald-50 border-emerald-200 text-emerald-900",
    icon: "✅",
    iconBg: "bg-emerald-100",
  },
};

export function Callout({ children, type = "info", title }: CalloutProps) {
  const styles = typeStyles[type];

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border p-4",
        styles.container
      )}
    >
      <span
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm",
          styles.iconBg
        )}
      >
        {styles.icon}
      </span>
      <div className="flex-1 min-w-0">
        {title && (
          <p className="font-semibold mb-1">{title}</p>
        )}
        <div className="text-sm [&>p]:m-0">{children}</div>
      </div>
    </div>
  );
}

