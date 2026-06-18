"use client";

import { Player } from "@remotion/player";
import { PricingStatsComposition } from "./PricingStatsComposition";

export function PricingStatsPlayerImpl() {
  return (
    /* padding-bottom = 150/560 = 26.79% */
    <div
      style={{
        width: "100%",
        paddingBottom: "26.79%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Player
        component={PricingStatsComposition}
        durationInFrames={90}
        fps={30}
        compositionWidth={560}
        compositionHeight={150}
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
