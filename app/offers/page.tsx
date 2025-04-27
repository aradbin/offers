import Offers from "@/components/offer/offers";

export default async function Page() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Offers params={{}} />
    </section>
  );
}
