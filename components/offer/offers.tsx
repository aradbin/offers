'use client'

import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchOffers } from "@/app/offers/utils"
import { Offer } from "./offer"
import OfferSkeleton from "./offer-skeleton"
import { Button } from "@heroui/button"
import { siteConfig } from "@/config/site"
import { createClient } from "@/utils/supabase/client"

export default function Offers({
  params
}: {
  params?: any
} = {
  params: {}
}) {
  const supabase = createClient();

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage, isFetched } = useInfiniteQuery({
    queryKey: ['offers'],
    queryFn: ({ pageParam }) => fetchOffers({
      supabase,
      page: pageParam
    }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < siteConfig.perPage) {
        return undefined;
      }

      return allPages.length;
    }
  })

  console.log('query', data, isLoading, isFetchingNextPage)

  return (
    <>
      {data?.pages?.flat()?.map((item: any, index: number) => (
        <Offer key={index} data={item} />
      ))}
      {(isFetchingNextPage) && Array.from({ length: siteConfig.perPage }).map((_, index) => <OfferSkeleton key={index} /> )}
      {hasNextPage && (
        <div className="col-span-full flex justify-center">
          <Button onPress={() => fetchNextPage()}>Load More</Button>
        </div>
      )}
    </>
  )
}