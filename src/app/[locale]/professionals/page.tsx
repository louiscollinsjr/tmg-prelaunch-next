import ProfessionalHome from '@/components/Pro_Landing';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default function ProfessionalsPage() {
  return (
    <main>
      <ProfessionalHome />
    </main>
  );
}
