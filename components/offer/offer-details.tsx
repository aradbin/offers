import Link from "next/link";
import FavoriteButton from "./favorite-button";
import OfferBanner from "./offer-banner";
import { Badge } from "../ui/badge";
import { format } from "date-fns";
import ShareButton from "./share-button";

export const OfferDetails = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-[150px]">
        <OfferBanner data={data} />
      </div>
      <div className="flex gap-2">
        {data?.networks && <Link href={`/networks/${data?.networks?.slug}`}><Badge className="rounded-lg">{data?.networks?.short_name}</Badge></Link>}
        {data?.banks && <Link href={`/banks/${data?.banks?.slug}`}><Badge className="rounded-lg">{data?.banks?.short_name}</Badge></Link>}
        <Link href={`/partners/${data?.partners?.slug}`}><Badge className="rounded-lg">{data?.partners?.short_name}</Badge></Link>
        {data?.categories && <Link href={`/categories/${data?.categories?.slug}`}><Badge className="rounded-lg">{data?.categories?.short_name}</Badge></Link>}
      </div>
      <div>
        <Badge className="rounded-lg" variant="outline">{format(new Date(data?.start || new Date()), 'do MMM, yyyy')} to {format(new Date(data?.end || new Date()), 'do MMM, yyyy')}</Badge>
      </div>
      <div className="flex justify-between items-center gap-4">
        <p className="text-xl font-semibold">{data?.title}</p>
        <div>
          <ShareButton id={data?.id} />
          <FavoriteButton active id={data?.id} />
        </div>
      </div>
      <p>{data?.description}</p>
    </div>
  );
};
