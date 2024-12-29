"use client";
import { ImageLoader, JankyTransitionContainer, Text } from "@/components";
import ArrowIcon from "@/assets/arrow.svg";
import useImages from "@/hooks/use-images";
import { useResizeObserver, useTimeout } from "usehooks-ts";
import { PHOTOS_IMAGES } from "@/configurations";
import { cn } from "@/utils";
import { useLayoutContext } from "@/contexts";
import { useRef } from "react";

const DescriptionContainer = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col z-10 select-none tracking-widest">
    {children}
  </div>
);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toggleLayoutExpanded } = useLayoutContext();
  const { width, height } = useResizeObserver({
    ref: containerRef as React.RefObject<HTMLDivElement>,
  });
  const { image, prev, next, type, onLoad } = useImages(PHOTOS_IMAGES, {
    low: 1,
    high: 20,
    iterateIndex: false,
  });

  const {
    content: { description, title, paragraphs },
  } = image;


  const getWidth = () => {
    if (!width || !height) return 640;
    const vW = width * .8;
    return vW;
  };

  const getHeight = () => {
    const vH = getWidth() / (16 / 10);
    return vH;
  };

  return (
    <div
      className={cn(
        "flex justify-center items-center grow md:pt-[69px] w-full"
      )}
      ref={containerRef}
    >
      <div className="flex flex-col gap-8">
        <ImageLoader
          style={{ width: getWidth(), height: getHeight() }}
          className={cn(
            "relative pointer-events-none resurgam:pointer-events-auto"
          )}
          onClick={toggleLayoutExpanded}
          image={{
            ...image,
            alt: description,
          }}
          type={type}
          onLoad={onLoad}
          fill
        />

        <div className="flex flex-row justify-between relative">
          <DescriptionContainer>
            <JankyTransitionContainer
              key={image.key}
              shouldAnimate
              animationClassName="animate-fade-in"
            >
              <Text.Header
                uppercase
                bold
                className="absolute top-[-4.5rem] left-[1rem]"
              >
                {title}
              </Text.Header>

              <Text.Body uppercase className="mb-4">
                {description}
              </Text.Body>
              {(paragraphs || []).length > 0 &&
                paragraphs?.map((text, i) => (
                  <Text.Body
                    key={`${i}-ss`}
                    className="text-shadow-glow !text-xs"
                    uppercase
                  >
                    {text}
                  </Text.Body>
                ))}
            </JankyTransitionContainer>
          </DescriptionContainer>
          <div className="flex flex-row items-center gap-16">
            <ArrowIcon
              className="rotate-[270deg] stroke-white cursor-pointer hover:opacity-80 active:opacity-50"
              onClick={next}
            />
            <ArrowIcon
              className="rotate-90 stroke-white cursor-pointer hover:opacity-80 active:opacity-50"
              onClick={prev}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
