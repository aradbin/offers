import { siteConfig } from "@/config/site";

export function getPaginationRange(page: number, limit: number) {
  const from = page * limit;
  const to = from + limit - 1;

  return [from, to];
}

export async function fetchOffers({
  supabase,
  page,
}: {
  supabase: any,
  page: number,
} = {
  supabase: null,
  page: 0,
}) {
  const range = getPaginationRange(page, siteConfig.perPage);

  const { data, error } = await supabase
    .from('offers')
    .select('*')
    .order('created_at', { ascending: false })
    .range(range[0], range[1]);

  if (error) throw error;

  return data;
}

export async function fetchOfferDetails({
  supabase,
  id,
}: {
  supabase: any,
  id: any,
} = {
  supabase: null,
  id: null,
}) {
  const { data, error } = await supabase
    .from('offers')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;

  return data;
}