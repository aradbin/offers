import { Card } from "@/components/ui/card";
import OfferBanner from "@/components/offer/offer-banner";
import FavoriteButton from "@/components/offer/favorite-button";

export default function OfferCard({ data }: any) {
  return (
    <Card className="relative w-full h-[300px] cursor-pointer overflow-hidden">
      <OfferBanner data={data} />
      <div className="absolute bottom-0 w-full flex justify-between items-center gap-4 p-4">
        <p className="text-lg font-semibold">{data?.title}</p>
        <FavoriteButton active id={1} />
      </div>
    </Card>
  )
}