import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

export default function ImageUnop(props: ImageProps) {
  return (
    <Image
      className={cn(props.className, "size-full")}
      {...props}
      width={props.width ? props.width : 64}
      height={props.height ? props.height : 64}
      unoptimized
    />
  );
}
