'use client'

import { useInfiniteQuery } from "@tanstack/react-query"
import OfferSkeleton from "@/components/offer/offer-skeleton"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { createClient } from "@/utils/supabase/client"
import { OfferDetails } from "@/components/offer/offer-details";
import { Modal } from "@/components/ui/modal";
import OfferCard from "@/components/offer/offer-card";
import { DialogClose, DialogFooter } from "@/components/ui/dialog"
import Link from "next/link"
import { OfferParamType } from "@/lib/types"
import { fetchOffers } from "@/utils/supabase/queries"

export default function Offers({ params }: { params: OfferParamType }) {
  const supabase = createClient();

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['offers', params],
    queryFn: ({ pageParam }) => fetchOffers({
      supabase,
      params: {
        ...params,
        page: [pageParam.toString()]
      }
    }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < siteConfig.perPage) {
        return undefined;
      }

      return allPages.length;
    }
  })

  return (
    <>
      {data?.pages?.flat()?.map((item: any, index: number) => (
        <Modal key={index} trigger={<OfferCard data={item} />} title="Offer Details" footer={<>
          <Link href={`/offers/${item.id}`}><Button className="w-full">More Details</Button></Link>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
        </>}>
          <OfferDetails data={item} />
        </Modal>
      ))}
      {(isLoading || isFetchingNextPage) && Array.from({ length: siteConfig.perPage }).map((_, index) => <OfferSkeleton key={index} /> )}
      {hasNextPage && (
        <div className="col-span-full flex justify-center">
          <Button onClick={() => fetchNextPage()}>Load More</Button>
        </div>
      )}
    </>
  )
}