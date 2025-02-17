import { EventEnums } from "@/enums/eventEnums";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const EventOptionsIcon = [
  {
    id: EventEnums.THINGS_TO_DO,
    name: "Things to do",
    icon: (
      <MaterialCommunityIcons
        name="ticket-confirmation-outline"
        size={30}
        color="white"
      />
    ),
  },
  {
    id: EventEnums.RESTAURANT,
    name: "Restuarant",
    icon: <Ionicons name="fast-food-outline" size={30} color="white" />,
  },
  {
    id: EventEnums.SPORT,
    name: "Sports",
    icon: <Ionicons name="football-outline" size={30} color="white" />,
  },
  {
    id: EventEnums.CONCERT,
    name: "Concert",
    icon: <Feather name="music" size={30} color="white" />,
  },
  {
    id: EventEnums.SHOW,
    name: "Theater",
    icon: <MaterialIcons name="theater-comedy" size={30} color="white" />,
  },
  {
    id: EventEnums.HISTORY,
    name: "Tours",
    icon: <MaterialIcons name="travel-explore" size={30} color="white" />,
  },
];
