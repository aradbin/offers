import ImageWithFallback from "@/components/ui/image-with-fallback";
import getStorageUrl from "@/utils/supabase/storage";

export default function OfferBanner({ data }: any) {
  return (
    <div className="relative flex justify-center items-center w-full h-full rounded-lg bg-gradient-to-tr from-stone-500 to-slate-500">
      <div className="absolute flex justify-between top-0 p-4 w-full">
        <div className="flex flex-col gap-4">
          {data?.networks?.split(",").map((item: string, index: number) => (
            <ImageWithFallback
              key={index}
              alt={`${item} logo`}
              className="h-[40px]"
              height="40"
              width="40"
              src={getStorageUrl('networks', item)}
              // placeholder="blur"
              loading="lazy"
              fallback={item}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {data?.banks?.split(",").map((item: string, index: number) => (
            <ImageWithFallback
              key={index}
              alt={`${item} logo`}
              className="h-[40px]"
              height="40"
              width="40"
              src={getStorageUrl('banks', item)}
              // placeholder="blur"
              loading="lazy"
              fallback={item}
            />
          ))}
        </div>
      </div>
      <ImageWithFallback
        alt={`${data?.partner} logo`}
        className="w-3/5 h-full"
        height="40"
        width="40"
        src={getStorageUrl('partners', data?.partner)}
        // placeholder="blur"
        loading="lazy"
        fallback={data?.partner}
      />
    </div>
  )
}