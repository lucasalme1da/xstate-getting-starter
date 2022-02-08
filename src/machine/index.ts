import { createMachine } from "xstate";

type TrafficLightEvent =
  | { type: "NEXT" }
  | { type: "TURN_ON" }
  | { type: "TURN_OFF" };

type TrafficLightStates =
  | { value: { ON: "red" }; context: undefined }
  | { value: { ON: "yellow" }; context: undefined }
  | { value: { ON: "green" }; context: undefined }
  | { value: "OFF"; context: undefined };

export const trafficLightMachine = createMachine<
  undefined,
  TrafficLightEvent,
  TrafficLightStates
>({
  id: "traffic-light",
  initial: "OFF",
  states: {
    ON: {
      initial: "red",
      on: { TURN_OFF: "OFF" },
      states: {
        red: {
          on: {
            NEXT: "green",
          },
          after: {
            3500: "green",
          },
        },
        yellow: {
          on: {
            NEXT: "red",
          },
          after: {
            1500: "red",
          },
        },
        green: {
          on: {
            NEXT: "yellow",
          },
          after: {
            5000: "yellow",
          },
        },
      },
    },
    OFF: {
      on: { TURN_ON: "ON" },
    },
  },
});
