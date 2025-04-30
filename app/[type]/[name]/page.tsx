export default async function Page({ params }: any) {
  const { type, name } = await params
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {type} - {name}
    </section>
  );
}
