import Image from "next/image";

export default function OfferBanner({ data }: any) {
  return (
    <div className="relative flex justify-center items-center w-full h-full bg-gradient-to-tr from-stone-500 to-slate-500">
      <div className="absolute flex justify-between top-0 p-4 w-full">
        <div className="flex flex-col gap-4">
          {data?.networks?.split(",").map((item: string, index: number) => (
            <Image
              key={index}
              alt={`${item} logo`}
              className="h-[40px]"
              height="40"
              width="40"
              src={`/media/${item}.svg`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {data?.banks?.split(",").map((item: string, index: number) => (
            <Image
              key={index}
              alt={`${item} logo`}
              className="h-[40px]"
              height="40"
              width="40"
              src={`/media/${item}.svg`}
            />
          ))}
        </div>
      </div>
      <Image
        alt={`${data?.partner} logo`}
        className="object-cover w-full h-full"
        height="40"
        width="40"
        src={`/media/${data?.partner}.svg`}
      />
    </div>
  )
}