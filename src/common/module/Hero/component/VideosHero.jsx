"use client";
import React from "react";

export default function VideosHero() {
  const videoSrc =
    "/Aset/PrivagoVideo.mp4";

  return (
    <div className="w-full rounded-2xl">
      <video
        width="100%"
        height="100%"
        controls
        preload="auto"
        autoPlay
      >
        <source
          src="/Aset/PrivagoVideo.mp4"
          type="video/mp4"
        />
        <track
          src="/Aset/PrivagoVideo.mp4"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>
    </div>
  );
}
