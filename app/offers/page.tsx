import OfferFilter from "@/components/offer/offer-filter";
import OfferFilterParams from "@/components/offer/offer-filter-params";
import Offers from "@/components/offer/offers";
import { OfferParamType } from "@/lib/types";
import { toArray } from "@/lib/utils";

export default async function Page({ searchParams }: any) {
  const params = await searchParams
  const offerParams: OfferParamType = {
    networks: toArray(params?.networks),
    banks: toArray(params?.banks),
    categories: toArray(params?.categories),
    partners: toArray(params?.partners),
    page: [params?.page || 0]
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <OfferFilter params={offerParams} />
      <div className="flex flex-col gap-4 w-full md:w-4/5">
        <OfferFilterParams params={offerParams} />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Offers params={offerParams} />
        </section>
      </div>
    </div>
  );
}
