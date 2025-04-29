'use client'

import { OfferDetails } from "@/components/offer/offer-details";
import { Modal } from "@/components/ui/modal";
import OfferCard from "@/components/offer/offer-card";

export const Offer = ({ data }: any) => {  
  return (
    <Modal trigger={<OfferCard data={data} />} title="Offer Details" content={<OfferDetails data={data} />} />
  );
};
