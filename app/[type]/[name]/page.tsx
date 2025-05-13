import Offers from "@/components/offer/offers";
import { OfferParamType } from "@/lib/types";
import { createClient } from "@/utils/supabase/server";

export default async function Page({ params }: any) {
  const { type, name } = await params
  const offerParams: OfferParamType = {
    networks: type === 'networks' ? [name] : [],
    banks: type === 'banks' ? [name] : [],
    categories: type === 'categories' ? [name] : [],
    partners: type === 'partners' ? [name] : [],
    page: [params?.page || 0]
  }

  const supabase = await createClient()
  const { data, error } = await supabase.from(type).select('name, short_name, slug, avatar').eq('slug', name).single();

  if (error) throw error;
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <p>{data?.name} Offers</p>
      <Offers params={offerParams} />
    </section>
  );
}
