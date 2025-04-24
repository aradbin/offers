import Image from "next/image";
import FavoriteButton from "./favorite-button";

export const OfferDetails = () => {
  return (
    <>
      <p>Upto 10%</p>
      <div className="relative flex justify-center items-center w-full h-[300px]">
        <Image
          alt="Relaxing app background"
          className="absolute top-5 left-5"
          height="60"
          src="/media/ucb-logo.svg"
          width="60"
        />
        <Image
          alt="Relaxing app background"
          className="z-0 object-cover"
          height="100"
          src="/media/ucb-logo.svg"
          width="100"
        />
        <Image
          alt="Relaxing app background"
          className="absolute top-5 right-5"
          height="60"
          src="/media/ucb-logo.svg"
          width="60"
        />
      </div>
      <div className="flex justify-end">
        <FavoriteButton active id={1} />
      </div>
    </>
  );
};
