import { EventEnums } from "@/enums/eventEnums";

export type EventTypes = {
  id: string;
  name: string;
  desc: string;
  type: EventEnums;
  images: string[];
  price: string;
  date: string;
  location: string;
};
