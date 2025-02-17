import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface FeaturedCardProps {
  item: any;
  onPress?: () => void;
  width?: string;
}

const headingStyle = `text-md font-bold text-white py-1`;
const descriptionStyle = `text-xs text-[#cfcfd1]`;

export const StoriesCard = ({ item, onPress }: FeaturedCardProps) => {
  return (
    <TouchableOpacity className=" flex flex-col " onPress={onPress}>
      <Image
        source={{ uri: item?.avatarSource.uri }}
        className="size-[80px] rounded-full"
      />
      <View className="">
        <Text className={`${headingStyle} text-center `}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const FeaturedCard = ({
  item,
  onPress,
  width = "300px",
}: FeaturedCardProps) => {
  return (
    <TouchableOpacity className={` flex flex-col `} onPress={onPress}>
      <Image
        source={{ uri: item?.images[0] }}
        className={`w-[${width}] h-[250px] rounded-xl`}
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
