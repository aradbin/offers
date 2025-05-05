import { OfferDetails } from "@/components/offer/offer-details";
import { fetchOfferDetails } from "@/utils/supabase/queries";
import { createClient } from "@/utils/supabase/server";

export default async function Page({ params }: any) {
  const { id } = await params
  const supabase = await createClient()
  const data = await fetchOfferDetails({
    supabase,
    id: id
  });
  
  return (
    <div className="grid grid-cols-1">
      <section className="col-span-3">
        <OfferDetails data={data} />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-4">
        
      </section>
    </div>
  )
}
