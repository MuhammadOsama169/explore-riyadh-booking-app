import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import StoriesPlayer from "@/components/StoriesPlayer";
import { storiesData } from "@/assets/data/storiesData";

const StoriesCarousel = () => {
  const { id } = useLocalSearchParams();

  const selectedStory = storiesData.find((story) => story.id === id);

  if (!selectedStory) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg font-bold">Story not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-black flex flex-col h-full px-4">
      <StoriesPlayer userStories={selectedStory.stories} />
    </SafeAreaView>
  );
};

export default StoriesCarousel;
