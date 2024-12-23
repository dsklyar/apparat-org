"use client";
import { ImageLoader, JankyTransitionContainer, Text } from "@/components";
import ArrowIcon from "@/assets/arrow.svg";
import useImages from "@/hooks/use-images";
import { useWindowSize } from "usehooks-ts";
import { PHOTOS_IMAGES } from "@/configurations";

const DescriptionContainer = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col z-10 select-none tracking-widest">
    {children}
  </div>
);

export default function Home() {
  const { width, height } = useWindowSize();
  const { image, prev, next, type, onLoad } = useImages(PHOTOS_IMAGES, {
    low: 1,
    high: 20,
    iterateIndex: false,
  });

  const {
    content: { description, title, paragraphs },
  } = image;

  const deriveWidth = () => {
    const ratio = width <= 420 ? 0.9 : width <= 768 ? 0.8 : 0.6;
    const vW = width * ratio;
    return vW > 1024 ? 1024 : vW;
  };

  const deriveHeight = () => {
    const ratio = width <= 420 ? 0.9 : width <= 768 ? 0.8 : 0.6;
    const vH = height * ratio;
    return vH > 640 ? 640 : vH;
  };

  return (
    <main className="flex justify-center items-center grow md:pt-[89px]">
      <div className="flex flex-col gap-16">
        <ImageLoader
          style={{ width: deriveWidth(), height: deriveHeight() }}
          className="relative"
          image={{
            ...image,
            alt: description,
          }}
          type={type}
          onLoad={onLoad}
          fill
        />

        <div className="flex flex-row justify-between">
          <DescriptionContainer>
            <JankyTransitionContainer
              key={image.key}
              shouldAnimate
              animationClassName="animate-fade-in"
            >
              <Text.Subheader uppercase bold>
                {title}
              </Text.Subheader>

              <Text.Body uppercase className="mb-4">
                {description}
              </Text.Body>
              {(paragraphs || []).length > 0 &&
                paragraphs?.map((text, i) => (
                  <Text.Body key={`${i}-ss`} uppercase>
                    {text}
                  </Text.Body>
                ))}
            </JankyTransitionContainer>
          </DescriptionContainer>
          <div className="flex flex-row items-center gap-16">
            <ArrowIcon
              className="rotate-[270deg] stroke-white cursor-pointer"
              onClick={next}
            />
            <ArrowIcon
              className="rotate-90 stroke-white cursor-pointer"
              onClick={prev}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
