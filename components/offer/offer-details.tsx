import Link from "next/link";
import FavoriteButton from "./favorite-button";
import OfferBanner from "./offer-banner";
import { Badge } from "../ui/badge";
import { startCase } from "lodash";
import { format } from "date-fns";
import ShareButton from "./share-button";

export const OfferDetails = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-[150px]">
        <OfferBanner data={data} />
      </div>
      <div className="flex gap-2">
        {data?.networks?.split(",").map((item: string, index: number) => (
          <Link key={index} href={`/networks/${item}`}><Badge className="rounded-lg">{startCase(item)}</Badge></Link>
        ))}
        {data?.banks?.split(",").map((item: string, index: number) => (
          <Link key={index} href={`/banks/${item}`}><Badge className="rounded-lg">{startCase(item)}</Badge></Link>
        ))}
        <Link href={`/partner/${data?.partner}`}><Badge className="rounded-lg">{startCase(data?.partner)}</Badge></Link>
        {data?.categories?.split(",").map((item: string, index: number) => (
          <Link key={index} href={`/categories/${item}`}><Badge className="rounded-lg">{startCase(item)}</Badge></Link>
        ))}
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
