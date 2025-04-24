import { Offer } from "@/components/offer/offer";

export default function Home() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.from({ length: 2 }).map((_, index) => (
        <Offer key={index} />
      ))}
    </section>
  );
}
