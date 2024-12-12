import ProfessionalHome from '@/components/ProfesionalHome';

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
