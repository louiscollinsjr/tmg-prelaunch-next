import PreLaunchHome from "@/components/Home";

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default function Home() {
  return (
    <main>
      <PreLaunchHome />
    </main>
  );
}

