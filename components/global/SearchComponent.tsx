import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";

interface SearchComponentProps {
  onSearch: (term: string) => void;
  value: string;
}

const SearchComponent = ({ onSearch, value }: SearchComponentProps) => {
  const handleSearchSubmit = () => {
    onSearch(value);
  };

  return (
    <TouchableOpacity
      className="my-5 px-4 z-50 rounded-lg flex flex-row items-center  justify-between  bg-white border "
      onPress={handleSearchSubmit}
    >
      <View className="flex-1">
        <TextInput
          value={value}
          onChangeText={onSearch}
          placeholder="Search ..."
          className="text-sm text-black-100 w-full"
          onSubmitEditing={handleSearchSubmit}
        />
      </View>

      <AntDesign name="search1" size={20} color="black" />
    </TouchableOpacity>
  );
};

export default SearchComponent;
