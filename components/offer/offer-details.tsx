import FavoriteButton from "./favorite-button";
import OfferBanner from "./offer-banner";

export const OfferDetails = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[150px]">
        <OfferBanner data={data} />
      </div>
      <div className="flex justify-between items-center gap-4">
        <p className="text-lg font-semibold">{data?.title}</p>
        <FavoriteButton active id={1} />
      </div>
      <p>{data?.description}</p>
    </div>
  );
};
