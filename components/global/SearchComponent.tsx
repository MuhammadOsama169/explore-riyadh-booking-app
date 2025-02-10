import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchComponent = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    (text: string) => router.setParams({ query: text }),
    500
  );

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };
  return (
    <View className="my-5 px-4 z-50 rounded-lg flex flex-row items-center  justify-between  bg-white border ">
      <TextInput
        value={search}
        onChangeText={handleSearch}
        placeholder="Search ..."
        className="text-sm text-black-100"
      />

      <AntDesign name="search1" size={20} color="black" />
    </View>
  );
};

export default SearchComponent;
