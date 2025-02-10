import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface FeaturedCardProps {
  item: any;
  onPress?: () => void;
}

export const EventCard = ({ item, onPress }: FeaturedCardProps) => {
  return (
    <TouchableOpacity
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 "
      onPress={onPress}
    >
      <Image source={{ uri: item?.image }} className="size-[200px]" />
      <Text className="text-xs  text-black ml-0.5">{item.name}</Text>
    </TouchableOpacity>
  );
};
