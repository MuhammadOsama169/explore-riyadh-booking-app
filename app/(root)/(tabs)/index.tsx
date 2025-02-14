import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { eventData, featuredEventData } from "@/assets/data/eventData";
import { FeaturedCard, Card } from "@/components/EventCards";
import { router } from "expo-router";
import SearchComponent from "@/components/global/SearchComponent";
import StoriesPlayer from "@/components/StoriesPlayer";

export default function index() {
  const handleCardPress = (id: string) => {
    router.push(`/discover/${id}`);
  };

  return (
    <SafeAreaView className="bg-black flex flex-col h-full p-4">
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerClassName="pb-28"
        columnWrapperClassName="flex gap-5 px-5"
        data={[]}
        renderItem={null}
        removeClippedSubviews={false}
        ListHeaderComponent={() => (
          <View className="px-5 ">
            {/* /basic info */}
            <View className="flex flex-1 flex-row  gap-4 items-center">
              <FontAwesome5 name="user-circle" size={24} color="white" />
              <View className="flex flex-col ">
                <Text className="text-xs text-white">Good Monring,</Text>
                <Text className="text-base font-semibold text-white">
                  Muhammad
                </Text>
              </View>
            </View>

            <SearchComponent />

            <StoriesPlayer />

            <FlatList
              data={eventData}
              initialNumToRender={eventData.length}
              renderItem={({ item }) => (
                <FeaturedCard
                  item={item}
                  onPress={() => handleCardPress(item.id)}
                />
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="flex gap-5 mt-4"
              removeClippedSubviews={false}
            />
            {/* heading divider */}
            <View className="flex flex-row justify-between items-center  mt-5">
              <Text className="font-bold text-2xl text-white">Whats New</Text>
            </View>
            <FlatList
              data={featuredEventData}
              initialNumToRender={featuredEventData.length}
              renderItem={({ item }) => (
                <Card item={item} onPress={() => handleCardPress(item.id)} />
              )}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="flex gap-5 mt-5"
              removeClippedSubviews={false}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
