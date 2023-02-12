import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface IArtifact {
  key: string;
  low: string;
  high: string;
  content: {
    title: string;
    description: string;
  };
}

interface IOptions {
  low?: number;
  high?: number;
  iterateIndex?: boolean;
}

export default function useArtifact(
  artifacts: IArtifact[],
  options?: IOptions
) {
  const { low, high, iterateIndex } = useMemo(
    () => ({
      ...{ low: 1, high: 5, iterateIndex: false },
      ...options,
    }),
    [options]
  );
  const [index, setIndex] = useState(0);
  const [type, setType] = useState<"low" | "high">("low");
  const timer = useRef<NodeJS.Timer>();
  const buffer = useRef<NodeJS.Timer>();

  const next = useCallback(() => {
    setIndex((prev) => (prev === artifacts.length - 1 ? 0 : prev + 1));
    setType("low");
  }, [artifacts.length]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev === 0 ? artifacts.length - 1 : prev - 1));
    setType("low");
  }, [artifacts.length]);

  useEffect(() => {
    if (iterateIndex) {
      timer.current = setInterval(() => {
        next();
      }, high * 1000);
    }

    buffer.current = setTimeout(() => {
      setType("high");
    }, low * 1000);

    return () => {
      timer.current && clearInterval(timer.current);
      buffer.current && clearInterval(buffer.current);
    };
  }, [next, index, high, low, iterateIndex]);

  return {
    image: artifacts[index],
    artifactIndex: index,
    type,
    next,
    prev,
  };
}
