import { Button } from "@heroui/button";
import { Card, CardFooter } from "@heroui/card";
import Image from "next/image";
import Link from "next/link";

import { HeartFilledIcon } from "./icons";

export const OfferCard = () => {
  return (
    <Link href="/offers/1">
      <Card isFooterBlurred className="w-full h-[300px]">
        <div className="flex justify-center items-center w-full h-full">
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
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <p>Upto 10%</p>
          </div>
          <Button isIconOnly aria-label="Like" size="sm">
            <HeartFilledIcon />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
