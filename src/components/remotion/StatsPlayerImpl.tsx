"use client";

import { Player } from "@remotion/player";
import { StatsCounterComposition } from "./StatsCounterComposition";

export function StatsPlayerImpl() {
  return (
    <div style={{ width: "100%", paddingBottom: "32.14%" /* 180/560 */, position: "relative", overflow: "hidden", borderRadius: "8px" }}>
      <Player
        component={StatsCounterComposition}
        durationInFrames={90}
        fps={30}
        compositionWidth={560}
        compositionHeight={180}
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
