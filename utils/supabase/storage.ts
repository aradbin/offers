export default function getStorageUrl(type: string, name: string) {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/offer-bucket/${type}/${name}.svg`
}