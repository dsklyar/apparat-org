import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface IArtifact {
  key: string;
  low: string;
  high: string;
  content: {
    paragraphs?: string[];
    title: string;
    description: string;
  };
}

interface IOptions {
  low?: number;
  high?: number;
  iterateIndex?: boolean;
}

const useImages = (
  artifacts: IArtifact[],
  options?: IOptions
) => {
  const { low, high, iterateIndex } = useMemo(
    () => ({
      ...{ low: 1, high: 5, iterateIndex: false },
      ...options,
    }),
    [options]
  );
  const [index, setIndex] = useState(0);
  const [type, setType] = useState<"low" | "high">("low");
  const timer = useRef<NodeJS.Timeout>(null);
  const buffer = useRef<NodeJS.Timeout>(null);
  const [loaded, setLoaded] = useState(false);

  const next = useCallback(() => {
    setIndex((prev) => (prev === artifacts.length - 1 ? 0 : prev + 1));
    setType("low");
    setLoaded(false);
  }, [artifacts.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev === 0 ? artifacts.length - 1 : prev - 1));
    setType("low");
    setLoaded(false);
  }, [artifacts.length]);

  const onLoad = () => {
    setLoaded(true);
  }

  useEffect(() => {
    if (iterateIndex && loaded) {
      timer.current = setInterval(() => {
        next();
      }, high * 1000);
    }

    if (loaded) {
      buffer.current = setTimeout(() => {
        setType("high");
      }, low * 1000);
    }

    return () => {
      timer.current && clearInterval(timer.current);
      buffer.current && clearInterval(buffer.current);
    };
  }, [next, index, high, low, iterateIndex, loaded]);

  const nextIndex = index=== artifacts.length - 1 ? 0 : index + 1 

  return {
    image: artifacts[index],
    artifactIndex: index,
    preload: artifacts[nextIndex].low,
    type,
    next,
    prev,
    onLoad,
  };
}

export default useImages;
