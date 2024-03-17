import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export const useCharacterState = create(
  subscribeWithSelector((set, get) => ({
    characterState: "Idle",
    setCharacterState: (characterState) => set({ characterState }),
  }))
);
