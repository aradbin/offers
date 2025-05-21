import { fetchOffers } from "@/utils/supabase/queries";
import { createClient } from "@/utils/supabase/client";
import OfferFilter from "@/components/offer/offer-filter";
import OfferFilterParams from "@/components/offer/offer-filter-params";
import Offers from "@/components/offer/offers";
import { OfferParamType } from "@/lib/types";
import { toArray } from "@/lib/utils";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function Page({ searchParams }: any) {
  const queryParams = await searchParams
  const params: OfferParamType = {
    networks: toArray(queryParams?.networks),
    banks: toArray(queryParams?.banks),
    categories: toArray(queryParams?.categories),
    partners: toArray(queryParams?.partners)
  }

  const queryClient = new QueryClient();
  const supabase = createClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['offers', params],
    queryFn: ({ pageParam = 0 }) => fetchOffers({
      supabase, 
      params,
      page: pageParam
    }),
    initialPageParam: 0
  });
  
  // wait for 5 seconds to render
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <OfferFilter params={params} />
      <div className="flex flex-col gap-4 w-full md:w-4/5">
        <OfferFilterParams params={params} />
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Offers params={params} />
          </HydrationBoundary>
        </section>
      </div>
    </div>
  );
}
