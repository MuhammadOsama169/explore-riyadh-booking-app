import React, { useRef } from "react";
import { ScrollView, View } from "react-native";
import InstagramStories, {
  InstagramStoriesPublicMethods,
} from "@birdwingo/react-native-instagram-stories";
import { storiesData } from "@/assets/data/storiesData";

const StoriesPlayer = () => {
  const ref = useRef<InstagramStoriesPublicMethods>(null);

  return (
    <ScrollView horizontal className="gap-5">
      <InstagramStories
        ref={ref}
        stories={storiesData}
        animationDuration={5000}
        progressActiveColor={"#ff2b79"}
        progressColor={"#ffffff"}
        imageStyles={{ resizeMode: "cover" }}
        showName
        nameTextStyle={{ color: "#ffffff", textAlign: "center", paddingTop: 5 }}
        mediaContainerStyle={{ backgroundColor: "#ffffff" }}
        imageProps={{ height: 1000 }}
        closeIconColor={"#ff2b79"}
      />
    </ScrollView>
  );
};

export default StoriesPlayer;
