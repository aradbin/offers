'use client'

import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import { OfferCard } from "./offer-card";
import { OfferDetails } from "./offer-details";
import Link from "next/link";

export const Offer = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <>
      <div onClick={onOpen}>
        <OfferCard />
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
