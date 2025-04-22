import { OfferCard } from "@/components/offer-card";

export default function Page() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <OfferCard key={index} />
      ))}
    </section>
  );
}
