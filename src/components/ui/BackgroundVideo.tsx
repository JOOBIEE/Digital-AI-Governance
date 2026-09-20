import { useEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export interface BackgroundVideoSource {
  src: string;
  /** MIME type including the codecs parameter, e.g. `video/mp4; codecs="avc1.64001f"`. */
  type: string;
  width: number;
  height: number;
  bitrate: number;
  framerate: number;
  /** Only use this source when the device decodes it in hardware (smooth + power efficient). */
  requireEfficient?: boolean;
}

interface BackgroundVideoProps {
  /** Ordered by preference; the last entry is the universal fallback. */
  sources: BackgroundVideoSource[];
  poster: string;
  className?: string;
}

interface NetworkInformation {
  saveData?: boolean;
}

async function canUse(source: BackgroundVideoSource, isLast: boolean) {
  if (typeof document === "undefined") return false;

  // The last source is the universal fallback: accept it unless the browser flatly refuses it.
  const probe = document.createElement("video").canPlayType(source.type);
  if (!probe && !isLast) return false;

  if (!("mediaCapabilities" in navigator)) return isLast || probe !== "";

  try {
    const info = await navigator.mediaCapabilities.decodingInfo({
      type: "file",
      video: {
        contentType: source.type,
        width: source.width,
        height: source.height,
        bitrate: source.bitrate,
        framerate: source.framerate,
      },
    });
    if (isLast) return true;
    if (!info.supported || !info.smooth) return false;
    return source.requireEfficient ? info.powerEfficient : true;
  } catch {
    return isLast || probe !== "";
  }
}

/**
 * Decorative looping background video. Picks the best source for the visitor's
 * browser and hardware (via MediaCapabilities), shows the poster until the first
 * frame is actually playing, and stays static for reduced-motion / data-saver users.
 */
export function BackgroundVideo({ sources, poster, className = "" }: BackgroundVideoProps) {
  const reducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);

  const saveData =
    typeof navigator !== "undefined" &&
    (navigator as Navigator & { connection?: NetworkInformation }).connection?.saveData === true;
  const enabled = !reducedMotion && !saveData;

  // Choose the first source this device can play smoothly.
  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;

    (async () => {
      for (let i = 0; i < sources.length; i++) {
        if (await canUse(sources[i], i === sources.length - 1)) {
          if (!cancelled) setIndex(i);
          return;
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [enabled, sources]);

  // Play only while on screen (saves battery / decoder time).
  useEffect(() => {
    const video = videoRef.current;
    if (!video || index === null) return;

    video.muted = true; // React does not reliably reflect `muted` to the DOM attribute.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, [index]);

  // If the chosen source fails at runtime, step down to the next one.
  const handleError = () => {
    setPlaying(false);
    setIndex((current) => (current !== null && current < sources.length - 1 ? current + 1 : null));
  };

  const source = index !== null ? sources[index] : null;

  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      <img
        src={poster}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {enabled && source && (
        <video
          key={source.src}
          ref={videoRef}
          src={source.src}
          poster={poster}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
          onError={handleError}
        />
      )}
    </div>
  );
}
