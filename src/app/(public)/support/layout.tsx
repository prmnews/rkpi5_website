import { Container } from '@/components/ui';

export const metadata = {
  title: 'Support - RKPi5 Marketing',
  description: 'Support documentation and guides for RKPi5',
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Container>
        <div className="py-12">
          {children}
        </div>
      </Container>
    </div>
  );
}

