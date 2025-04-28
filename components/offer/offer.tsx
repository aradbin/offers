'use client'

import { Button } from "@/components/ui/button";
import { OfferDetails } from "./offer-details";
import Link from "next/link";
import { Card, CardFooter } from "@/components/ui/card";
import OfferBanner from "./offer-banner";

export const Offer = ({ data }: any) => {  
  return (
    <>
      <Card className="w-full h-[300px] cursor-pointer border-none">
        <OfferBanner data={data} />
        <CardFooter className="absolute bottom-0 px-4 py-4 justify-center items-center gap-4">
          <h4>{data?.title}</h4>
          {/* <FavoriteButton active id={1} /> */}
        </CardFooter>
      </Card>
      {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Offer Details</ModalHeader>
              <ModalBody>
                <OfferDetails data={data} />
              </ModalBody>
              <ModalFooter>
                <Button>
                  Close
                </Button>
                <Button>
                  More Details
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </>
  );
};
