import OfferSkeleton from "@/components/offer/offer-skeleton";

export default function Loading() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <OfferSkeleton key={index} />
      ))}
    </section>
  );
}