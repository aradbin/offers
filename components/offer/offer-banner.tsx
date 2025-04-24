import { Image } from "@heroui/image";
import NextImage from "next/image";

export default function OfferBanner({ data }: any) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="absolute flex justify-between top-0 p-4 w-full">
        <div className="flex flex-col gap-4">
          {data?.networks?.split(",").map((item: string, index: number) => (
            <Image
              key={index}
              as={NextImage}
              radius="none"
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
              as={NextImage}
              radius="none"
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
        as={NextImage}
        radius="none"
        alt={`${data?.partner} logo`}
        className="object-cover w-full h-full"
        height="40"
        width="40"
        src={`/media/${data?.partner}.svg`}
      />
    </div>
  )
}