
export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
 
      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}
