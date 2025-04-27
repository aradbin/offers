import FavoriteButton from "./favorite-button";
import OfferBanner from "./offer-banner";

export const OfferDetails = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <h4>{data?.title}</h4>
      <div className="relative h-[150px]">
        <OfferBanner data={data} />
      </div>
      <div className="flex justify-end">
        <FavoriteButton active id={1} />
      </div>
    </div>
  );
};
