import {
  SafeAreaView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useRef } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { mergedEventData } from "@/assets/data/eventData";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import Feather from "@expo/vector-icons/Feather";

const Events = () => {
  const progress = useSharedValue(0);
  const { width: viewportWidth } = Dimensions.get("window");

  const { id } = useLocalSearchParams();

  const selectedEvent = mergedEventData.find((event) => event.id === id);

  if (!selectedEvent) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text className="text-lg font-bold">Event not found</Text>
      </SafeAreaView>
    );
  }

  const renderImageItem = ({ item, index }: { item: any; index: number }) => (
    <View
      key={index}
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Image
        source={{ uri: item }}
        style={{
          width: viewportWidth - 32,
          height: 350,
          resizeMode: "cover",
          borderRadius: 8,
        }}
      />
    </View>
  );

  return (
    <SafeAreaView className="bg-black flex flex-col h-full p-4">
      <View style={{ flex: 1 }}>
        <TouchableOpacity className=" mb-4" onPress={() => router.push(`/`)}>
          <Feather name="chevron-down" size={24} color="white" />
        </TouchableOpacity>

        <Carousel
          loop
          width={viewportWidth - 32}
          height={350}
          autoPlay
          autoPlayInterval={5000}
          data={selectedEvent?.images}
          renderItem={renderImageItem}
          onSnapToItem={(index) => {
            progress.value = index;
          }}
        />
        <Pagination.Basic
          progress={progress}
          data={selectedEvent?.images || []}
          dotStyle={{
            backgroundColor: "rgba(255,255,255,0.5)",
            width: 8,
            height: 8,
            borderRadius: 4, // half of 8
          }}
          activeDotStyle={{
            backgroundColor: "#ff2b79",
            width: 8,
            height: 8,
            borderRadius: 4,
          }}
          containerStyle={{
            alignSelf: "center",
            gap: 8,
            marginTop: 10,
          }}
        />
        {/* //basic info */}

        <View>
          <Text className="font-bold text-[30px] text-white">
            {selectedEvent?.name}
          </Text>

          <Text className="font-bold text-md text-gray-300">
            {selectedEvent?.location}
          </Text>

          <Text className="font-medium text-lg text-gray-300 mt-4">
            {selectedEvent?.desc}
          </Text>
        </View>
      </View>

      {/* //btn  */}
      <View className="flex flex-row items-center justify-between  text-white py-4">
        <View className="flex flex-row">
          <Text className="text-gray-300 font-bold">Price: </Text>
          <Text className="text-white font-bold">{selectedEvent?.price}</Text>
        </View>
        <TouchableOpacity className="bg-pink_pop  p-4 rounded-lg">
          <Text className="text-white font-bold">Book Ticket</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Events;
