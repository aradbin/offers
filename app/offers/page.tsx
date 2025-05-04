import OfferFilter from "@/components/offer/offer-filter";
import Offers from "@/components/offer/offers";

export default async function Page({ searchParams }: any) {
  const params = await searchParams

  return (
    <div className="grid grid-cols-1 gap-4">
      <OfferFilter params={params} />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Offers params={params} />
      </section>
    </div>
  );
}
