'use client'

import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import { OfferDetails } from "./offer-details";
import Link from "next/link";
import { Card, CardFooter } from "@heroui/card";
import OfferBanner from "./offer-banner";

export const Offer = ({ data }: any) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <>
      <div onClick={onOpen}>
        <Card isFooterBlurred className="w-full h-[300px] cursor-pointer border-none" radius="lg">
          <OfferBanner data={data} />
          <CardFooter className="absolute bottom-0 px-4 py-4 justify-center items-center gap-4">
            <h4>{data?.title}</h4>
            {/* <FavoriteButton active id={1} /> */}
          </CardFooter>
        </Card>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Offer Details</ModalHeader>
              <ModalBody>
                <OfferDetails />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button radius="full" color="primary" variant="flat" as={Link} href={`/offers/1`}>
                  More Details
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
