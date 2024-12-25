"use client";
import { ImageLoader, JankyTransitionContainer, Text } from "@/components";
import ArrowIcon from "@/assets/arrow.svg";
import useImages from "@/hooks/use-images";
import { useElementSize } from "usehooks-ts";
import { PHOTOS_IMAGES } from "@/configurations";
import { cn } from "@/utils";

const DescriptionContainer = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col z-10 select-none tracking-widest">
    {children}
  </div>
);

export default function Home() {
  const [ref, { width }] = useElementSize();
  const { image, prev, next, type, onLoad } = useImages(PHOTOS_IMAGES, {
    low: 1,
    high: 20,
    iterateIndex: false,
  });

  const {
    content: { description, title, paragraphs },
  } = image;

  const deriveWidth = () => {
    const vW = width * 0.8;
    return vW > 1024 ? 1024 : vW;
  };

  const deriveHeight = () => {
    const vH = deriveWidth() / (16 / 10);
    return vH > 640 ? 640 : vH;
  };

  return (
    <div
      className={cn(
        "flex justify-center items-center grow md:pt-[69px] min-w-[640px] w-full"
      )}
      ref={ref}
    >
      <div className="flex flex-col gap-8">
        <ImageLoader
          style={{ width: deriveWidth(), height: deriveHeight() }}
          className={cn("relative")}
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
                className="absolute top-[-5rem] left-[1rem]"
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
              className="rotate-[270deg] stroke-white cursor-pointer hover:opacity-80"
              onClick={next}
            />
            <ArrowIcon
              className="rotate-90 stroke-white cursor-pointer hover:opacity-80"
              onClick={prev}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
