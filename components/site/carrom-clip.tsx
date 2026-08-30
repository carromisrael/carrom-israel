"use client";

import { useEffect, useRef } from "react";

const CLIP_START_S = 5;
const PLAYBACK_RATE = 0.72;

export function CarromClip() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playbackRate = PLAYBACK_RATE;

    let started = false;
    const seekToClip = () => {
      if (!started && video.currentTime < CLIP_START_S - 0.1) {
        video.currentTime = CLIP_START_S;
        started = true;
      }
    };

    const keepSlowMo = () => {
      video.playbackRate = PLAYBACK_RATE;
    };

    video.addEventListener("play", keepSlowMo);
    video.addEventListener("loadedmetadata", seekToClip);
    video.addEventListener("timeupdate", seekToClip);
    if (video.readyState >= 1) seekToClip();

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      return () => {
        video.removeEventListener("play", keepSlowMo);
        video.removeEventListener("loadedmetadata", seekToClip);
        video.removeEventListener("timeupdate", seekToClip);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          seekToClip();
          void video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);

    return () => {
      video.removeEventListener("play", keepSlowMo);
      video.removeEventListener("loadedmetadata", seekToClip);
      video.removeEventListener("timeupdate", seekToClip);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="/assets/carrom-clip.mp4#t=5"
      poster="/assets/board-setup.jpeg"
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
      className="pointer-events-none block size-full bg-ink-900 object-cover"
    >
      הסרטון לא נתמך בדפדפן זה.
    </video>
  );
}
