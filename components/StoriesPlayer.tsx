import {
  SafeAreaView,
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import { useVideoPlayer, VideoView } from "expo-video";
import { StoriesType } from "@/types/StoriesTypes";

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

interface StoriesPlayerProps {
  userStories: StoriesType[];
}

const StoriesPlayer = ({ userStories }: StoriesPlayerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const VideoItem = ({ uri, isActive }: { uri: string; isActive: boolean }) => {
    const player = useVideoPlayer(uri, (player) => {
      player.loop = false;
      player.play();
      player.volume = 0;
      if (isActive) {
        player.play();
      }
    });

    // Watch for changes to isActive and control playback accordingly.
    useEffect(() => {
      if (isActive) {
        player.play();
      } else {
        player.pause();
      }
    }, [isActive]);

    return <VideoView style={styles.video} player={player} />;
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: StoriesType;
    index: number;
  }) => {
    // Check if the story is a video or an image.
    if (item.mediaType === "video") {
      return (
        <VideoItem uri={item.source.uri} isActive={activeIndex === index} />
      );
    }
    // If not a video, render as an image.
    return <Image source={{ uri: item.source.uri }} style={styles.image} />;
  };

  return (
    <View
      className={`w-[${viewportWidth}] h-[${viewportHeight}] flex flex-col`}
    >
      <View>
        <Text className="text-white">Progress Bar</Text>
      </View>

      <View>
        <Carousel
          loop
          width={viewportWidth}
          height={viewportHeight}
          autoPlay={false}
          data={userStories}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </View>
  );
};

export default StoriesPlayer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: viewportWidth,
    height: viewportHeight,
  },
  video: {
    width: viewportWidth,
    height: viewportHeight,
  },
  image: {
    width: viewportWidth,
    height: viewportHeight,
    resizeMode: "cover",
  },
});
