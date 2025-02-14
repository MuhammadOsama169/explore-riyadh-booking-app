import { InstagramStoriesProps } from "@birdwingo/react-native-instagram-stories";

export const storiesData: InstagramStoriesProps["stories"] = [
  {
    id: "u1",
    name: "User 2",
    avatarSource: {
      uri: "https://images.ctfassets.net/vy53kjqs34an/744comOZgzZR956FHHezkj/1b2327913f0cfb682e4d5ff5aec5e0d7/KV-Webook-Sizes_1920x1280.jpg?fm=webp&w=1920&h=1280",
    },
    stories: [
      {
        id: "s1",
        source: {
          uri: "https://images.ctfassets.net/vy53kjqs34an/5TtNF7lafkhVVdtgg1qsyO/b405a82fcd5dcb09b017c23ad9552278/Copy-of-DJI_0043.jpg?fm=webp&w=1311&h=737",
        },
      },
      {
        id: "s2",
        source: {
          uri: "https://images.ctfassets.net/vy53kjqs34an/5Fky7NRSPbjRCelJ5n0And/4ec193564797525b549b361e6544e6a7/LIYALI_DIRIYAH_Ticket_Banner-_Feature_Event.jpg?fm=webp&w=1280&h=427",
        },
        //   mediaType: "video",
      },
    ],
  },
];
