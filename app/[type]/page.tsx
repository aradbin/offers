import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function Page({ params }: any) {
  const { type } = await params

  const supabase = await createClient()
  const { data, error } = await supabase.from(type).select('name, short_name, slug, avatar');

  if (error) throw error;
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {type}
      {data?.map((item: any) => (
        <Link key={item.slug} href={`/${type}/${item.slug}`}>{item.name}</Link>
      ))}
    </section>
  );
}
