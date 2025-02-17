import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import SearchComponent from "@/components/global/SearchComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { eventData, mergedEventData } from "@/assets/data/eventData";
import { FlatList } from "react-native-gesture-handler";
import { Card, FeaturedCard } from "@/components/EventCards";
import { router } from "expo-router";
import { useDebounce } from "use-debounce";

const ExplorePage = () => {
  const { id } = useLocalSearchParams();

  const [filteredEvents, setFilteredEvents] = useState(mergedEventData);
  const [searchTerm, setSeachTerm] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleCardPress = (id: string) => {
    router.push(`/discover/${id}`);
  };

  const [debouncedSearchTerm] = useDebounce<string>(searchTerm, 300);

  const handleSearch = (text: string) => {
    setSeachTerm(text);
  };

  useEffect(() => {
    setIsSearching(true);
    let events = mergedEventData;

    if (id) {
      events = events.filter((event) => event.type === id);
    }

    if (debouncedSearchTerm) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      events = events.filter((event) =>
        event.name.toLowerCase().includes(searchLower)
      );
    }

    setFilteredEvents(events);
    setIsSearching(false);
  }, [id, debouncedSearchTerm]);

  const ListHeader = () => (
    <>
      <SearchComponent onSearch={handleSearch} value={searchTerm} />
      <Text style={{ color: "#fff", marginVertical: 16 }}>
        Showing events for: {id || "All"}
      </Text>
    </>
  );

  return (
    <SafeAreaView className="bg-black flex-1 py-4 px-8">
      {isSearching ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <FeaturedCard
              item={item}
              onPress={() => handleCardPress(item.id)}
            />
          )}
          ListHeaderComponent={ListHeader}
          contentContainerStyle={{
            paddingBottom: 16,
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default ExplorePage;
