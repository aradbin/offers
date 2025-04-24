import { Offer } from "@/components/offer/offer";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient()
  const { data: offers } = await supabase.from("offers").select()
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {offers?.map((item, index) => (
        <Offer key={index} data={item} />
      ))}
    </section>
  );
}
