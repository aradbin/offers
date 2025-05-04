import { siteConfig } from "@/config/site";
import { OfferParamType } from "@/lib/types";
import { SupabaseClient } from "@supabase/supabase-js";

export function getPaginationRange(page: number, limit: number) {
  const from = page * limit;
  const to = from + limit - 1;

  return [from, to];
}

export async function fetchOffers({
  supabase,
  page,
  params
}: {
  supabase: SupabaseClient,
  page: number,
  params?: OfferParamType
}) {
  const range = getPaginationRange(page || 0, siteConfig.perPage);

  const query = supabase
    .from('offers')
    .select('*')
    .order('created_at', { ascending: false })
    .range(range[0], range[1]);

  if(params?.hasOwnProperty('networks') && params?.networks.length > 0) {
    query.in('networks', params?.networks);
  }
  if(params?.hasOwnProperty('banks') && params?.banks.length > 0) {
    query.in('banks', params?.banks);
  }
  if(params?.hasOwnProperty('categories') && params?.categories.length > 0) {
    query.in('categories', params?.categories);
  }

  const { data, error } = await query;

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