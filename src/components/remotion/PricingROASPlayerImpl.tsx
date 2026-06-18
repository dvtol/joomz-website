"use client";

import { Player } from "@remotion/player";
import { PricingROASComposition } from "./PricingROASComposition";

export function PricingROASPlayerImpl() {
  return (
    /* padding-bottom = 300/560 = 53.57% → preserves aspect ratio */
    <div
      style={{
        width: "100%",
        paddingBottom: "53.57%",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
      }}
    >
      <Player
        component={PricingROASComposition}
        durationInFrames={220}
        fps={30}
        compositionWidth={560}
        compositionHeight={300}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        autoPlay
        loop
        controls={false}
        clickToPlay={false}
        allowFullscreen={false}
        showVolumeControls={false}
        spaceKeyToPlayOrPause={false}
        acknowledgeRemotionLicense
      />
    </div>
  );
}
