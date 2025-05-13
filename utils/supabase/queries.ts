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
  params
}: {
  supabase: SupabaseClient,
  params: OfferParamType
}) {
  const range = getPaginationRange(parseInt(params.page[0]), siteConfig.perPage);

  const query = supabase
    .from('offers')
    .select(`
      id, title, description, start, end, banner,
      networks!inner(name, short_name, slug, avatar),
      banks!inner(name, short_name, slug, avatar),
      categories!inner(name, short_name, slug, avatar),
      partners!inner(name, short_name, slug, avatar)
    `)
    .order('created_at', { ascending: false })
    .range(range[0], range[1]);

  if (params?.networks?.length) {
    query.in('networks.slug', params.networks);
  }

  if (params?.banks?.length) {
    query.in('banks.slug', params.banks);
  }

  if (params?.categories?.length) {
    query.in('categories.slug', params.categories);
  }

  if (params?.partners?.length) {
    query.in('partners.slug', params.partners);
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
    .select(`
      id, title, description, start, end, banner,
      networks(name, short_name, slug, avatar),
      banks(name, short_name, slug, avatar),
      categories(name, short_name, slug, avatar),
      partners(name, short_name, slug, avatar)
    `)
    .eq('id', id)
    .single();

  if (error) throw error;

  return data;
}