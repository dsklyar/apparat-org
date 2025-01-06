"use client";
import { cn } from "@/utils";
import useImages from "@/hooks/use-images";
import { ImageLoader } from "@/components";
import { usePathname } from "next/navigation";
import { RESURGAM, SIDE_PANEL_IMAGES } from "@/configurations";
import { useLayoutContext } from "@/contexts";
import { PhotoHeading } from "./photo-heading";

export const SidePanel = () => {
  const pathname = usePathname();
  const { layoutExpanded } = useLayoutContext();
  const { image, preload, next, type, onLoad } = useImages(SIDE_PANEL_IMAGES, {
    low: 1,
    high: 10,
    iterateIndex: pathname !== "/resume" && pathname !== "/photos",
  });

  return (
    <div
      className={cn(
        "fixed top-0",
        "hidden resurgam:block resurgam:min-h-screen resurgam:max-h-screen ",
        RESURGAM.SIDE_PANEL({ layoutExpanded })
      )}
    >
      <ImageLoader
        preload={preload}
        image={{
          ...image,
          alt: image.content.description,
        }}
        type={type}
        onClick={layoutExpanded ? undefined : next}
        onLoad={onLoad}
        fill
      />
      <PhotoHeading title={image.content.title} description={image.content.description} shouldAnimate={type === "high"} />
    </div>
  );
};
