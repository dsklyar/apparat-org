"use client";
import { ImageLoader, Text } from "@/components";
import Image from "next/image";
import { useState } from "react";
import { ArrowIcon } from "@/assets";
import useImages from "@/hooks/use-images";
import { useWindowSize } from "usehooks-ts";

const artifacts = [
  {
    key: "oslo",
    low: "/images/photos/oslo_low.jpg",
    high: "/images/photos/oslo_high.jpg",
    content: {
      title: "Oslo",
      description: "Long exposure taken in Oslo",
      paragraphs: [
        "Fuji GSW690 III on 400 porta",
        "Exposure held for 2 minutes",
      ],
    },
  },
  {
    key: "bergen",
    low: "/images/photos/bergen_low.jpg",
    high: "/images/photos/bergen_high.jpg",
    content: {
      title: "Bryggen",
      description: "Characteristic wooden houses of Bryggen",
    },
  },
  {
    key: "stavanger",
    low: "/images/photos/stavanger_low.jpg",
    high: "/images/photos/stavanger_high.jpg",
    content: {
      title: "Stavanger",
      description: "Graffiti near Stavanger petroleum museum",
    },
  },
  {
    key: "pulpit_rock",
    low: "/images/photos/pulpit_rock_low.jpg",
    high: "/images/photos/pulpit_rock_high.jpg",
    content: {
      title: "Pulpit Rock",
      description:
        "Best hike & view of Lysefjord and its surrounding mountains",
    },
  },
  {
    key: "point_reys",
    low: "/images/photos/point_reyes_low.jpg",
    high: "/images/photos/point_reyes_high.jpg",
    content: {
      title: "Point Reyes",
      description: "Drakes Beach and picturesque views",
      paragraphs: ["Fujifilm Fuji Klasse on 400 porta"],
    },
  },
  {
    key: "paris_airport",
    low: "/images/photos/paris_airport_low.jpg",
    high: "/images/photos/paris_airport_high.jpg",
    content: {
      title: "Airport Layovers",
      description: "Stuck in Charles de Gaulle airport",
    },
  },
  {
    key: "fjords",
    low: "/images/photos/fjords_low.jpg",
    high: "/images/photos/fjords_high.jpg",
    content: {
      title: "Norway Fjords",
      description: "Pit stop alongside the Aurlandsfjord",
    },
  },
];

const DescriptionContainer = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-col z-10 select-none tracking-widest">
    {children}
  </div>
);

export default function Home() {
  const { width, height } = useWindowSize();
  const { image, prev, next, type, onLoad } = useImages(artifacts, {
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
    <main className="flex justify-center items-center grow">
      <div className="grid grid-rows-[640px-1fr] gap-16">
        <div style={{ width: deriveWidth(), height: deriveHeight() }} className="relative">
          <ImageLoader
            image={{
              ...image,
              alt: description,
            }}
            type={type}
            onLoad={onLoad}
            fill
          />
        </div>

        <div className="flex flex-row justify-between">
          <DescriptionContainer>
            <Text.Subheader uppercase bold className="text-white">
              {title}
            </Text.Subheader>
            <Text.Body uppercase className="text-white mb-4">
              {description}
            </Text.Body>
            {(paragraphs || []).length > 0 &&
              paragraphs?.map((text, i) => (
                <Text.Small key={`${i}-ss`} uppercase className="text-white">
                  {text}
                </Text.Small>
              ))}
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
