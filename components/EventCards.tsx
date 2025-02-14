import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface FeaturedCardProps {
  item: any;
  onPress?: () => void;
}

const headingStyle = `text-md font-bold text-white py-1`;
const descriptionStyle = `text-xs text-[#cfcfd1]`;

export const FeaturedCard = ({ item, onPress }: FeaturedCardProps) => {
  return (
    <TouchableOpacity className=" flex flex-col " onPress={onPress}>
      <Image
        source={{ uri: item?.images[0] }}
        className="w-[300px] h-[250px] rounded-xl"
      />
      <View className="py-4">
        <Text className={headingStyle}>{item.name}</Text>
        <Text className={descriptionStyle}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ item, onPress }: FeaturedCardProps) => {
  return (
    <TouchableOpacity className=" flex flex-col " onPress={onPress}>
      <Image
        source={{ uri: item?.images[0] }}
        className="size-[200px] rounded-xl"
      />
      <View className="py-4">
        <Text className={headingStyle}>{item.name}</Text>
        <Text className={descriptionStyle}>{item.location}</Text>
        <Text className={descriptionStyle}>{item.date}</Text>
        <Text className={descriptionStyle}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
