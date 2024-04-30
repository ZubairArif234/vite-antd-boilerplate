import { create } from "zustand";
import { devtools } from "zustand/middleware";

// ! this is just an example of how create stores with zustand
const store = (set) => ({
  state: 0,
  increment: () => set((prev) => ({ state: prev.state + 1 })),
  decrement: () =>
    set((prev) => ({ state: prev.state > 0 ? prev.state - 1 : state })),
  reset: () => set({ state: 0 }),
});

export const useExampleStore = create(
  devtools(store, {
    enabled: true,
    store: "example",
  })
);
