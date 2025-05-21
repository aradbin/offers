import ImageWithFallback from "@/components/ui/image-with-fallback";

export default function OfferBanner({ data }: any) {
  return (
    <div className="relative flex justify-center items-center w-full h-full rounded-lg bg-gradient-to-tr from-stone-500 to-slate-500">
      <div className="absolute flex justify-between top-0 p-4 w-full">
        <div className="flex flex-col gap-4">
          <ImageWithFallback
            alt={`${data?.networks?.short_name} logo`}
            className="h-[40px]"
            height="40"
            width="40"
            src={data?.networks?.avatar}
            // placeholder="blur"
            loading="lazy"
            fallback={data?.networks?.short_name}
          />
        </div>
        <div className="flex flex-col gap-4">
          <ImageWithFallback
            alt={`${data?.banks?.short_name} logo`}
            className="h-[40px]"
            height="40"
            width="40"
            src={data?.banks?.avatar}
            // placeholder="blur"
            loading="lazy"
            fallback={data?.banks?.short_name}
          />
        </div>
      </div>
      <ImageWithFallback
        alt={`${data?.partners?.short_name} logo`}
        className="w-3/5 h-full"
        height="40"
        width="40"
        src={data?.partners?.avatar}
        // placeholder="blur"
        loading="lazy"
        fallback={data?.partner?.short_name}
      />
    </div>
  )
}