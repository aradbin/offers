import FavoriteButton from "./favorite-button";
import OfferBanner from "./offer-banner";

export const OfferDetails = () => {
  return (
    <>
      <p>Upto 10%</p>
      <OfferBanner />
      <div className="flex justify-end">
        <FavoriteButton active id={1} />
      </div>
    </>
  );
};
