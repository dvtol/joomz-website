"use client";

import { Player } from "@remotion/player";
import { DashboardRevealComposition } from "./DashboardRevealComposition";

export function DashboardPlayerImpl() {
  return (
    <div style={{ width: "100%", paddingBottom: "62.5%" /* 350/560 */, position: "relative", overflow: "hidden", borderRadius: "8px" }}>
      <Player
        component={DashboardRevealComposition}
        durationInFrames={300}
        fps={30}
        compositionWidth={560}
        compositionHeight={350}
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
