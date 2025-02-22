import TabIcon from "@/components/TabIcon";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Text, View } from "react-native";
import webookLogo from "@/assets/icons/wbk-logo.png";

const Header = () => (
  <View className="bg-black flex ">
    <Image source={webookLogo} className="size-[100px]" resizeMode="center" />
  </View>
);

const TabsLayout = () => {
  return (
    <>
      <Header />
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "black",
            position: "absolute",
            minHeight: 70,
            borderTopWidth: 1,
            borderColor: "#ff2b79",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Discover",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                Icon={Ionicons}
                iconName="home"
                title="Home"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="booking"
          options={{
            title: "Booking",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                Icon={Ionicons}
                iconName="ticket-sharp"
                title="Booking"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                Icon={AntDesign}
                iconName="user"
                title="Profile"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};
export default TabsLayout;
