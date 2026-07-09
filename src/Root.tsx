import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Demo, DEMO_DURATION_IN_FRAMES } from "./Demo/Demo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
      />
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />
      <Composition
        id="Demo"
        component={Demo}
        durationInFrames={DEMO_DURATION_IN_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
