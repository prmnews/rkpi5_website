import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";

export function EnterpriseContact() {
  return (
    <Container
      as="section"
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 sm:p-10"
      )}
    >
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-8 right-0 h-48 w-48 rounded-full bg-primary-200/40 blur-2xl" />
        <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-sky-100/60 blur-2xl" />
      </div>

      <div className="relative">
        <h3 className="text-xl font-semibold text-gray-900">Church & Enterprise Solutions</h3>
        <p className="mt-2 max-w-prose text-sm text-gray-700">
          Need a custom deployment with your own ministry content, branding, or multi-unit rollouts?
          We offer post-launch packages tailored for churches and organizations.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
          <li className="flex items-start gap-2">
            <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 11.59l6.54-6.54a1 1 0 011.664.24z"
                clipRule="evenodd"
              />
            </svg>
            Custom content integration and branding
          </li>
          <li className="flex items-start gap-2">
            <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 11.59l6.54-6.54a1 1 0 011.664.24z"
                clipRule="evenodd"
              />
            </svg>
            Golden master builds for scalable distribution
          </li>
          <li className="flex items-start gap-2">
            <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 11.59l6.54-6.54a1 1 0 011.664.24z"
                clipRule="evenodd"
              />
            </svg>
            Deployment consultation and installation guidance
          </li>
          <li className="flex items-start gap-2">
            <svg className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 11.59l6.54-6.54a1 1 0 011.664.24z"
                clipRule="evenodd"
              />
            </svg>
            Available post-public launch
          </li>
        </ul>

        <div className="mt-6">
          <Link
            href="/about"
            className={cn(
              "inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            )}
          >
            Request Quote
          </Link>
        </div>
      </div>
    </Container>
  );
}


