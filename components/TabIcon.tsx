import { View, Text, Image } from "react-native";
import React from "react";

interface TabIconProps {
  focused: boolean;
  Icon: any;
  iconName: string;
  title: string;
}
export default function TabIcon({
  focused,
  iconName,
  title,
  Icon,
}: TabIconProps) {
  const color = focused ? "#ff2b79" : "#ffffff";
  const size = 24; // Adjust size as needed

  return (
    <View style={{ alignItems: "center", marginTop: 12 }}>
      <Icon name={iconName} color={color} size={size} />
      <Text
        className={`${
          focused ? "text-pink_pop " : "text-white "
        } text-xs w-full text-center mt-1`}
      >
        {title}
      </Text>
    </View>
  );
}
