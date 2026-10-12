import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index.js";

const useWindowStore = create(
  immer((set) => {
    return {
      windowList: WINDOW_CONFIG,
      nextZIndex: INITIAL_Z_INDEX + 1,

      openWindow: (windowKey, data = null) =>
        set((state) => {
          console.log("openWindow", state);

          const win = state.windowList[windowKey];
          win.isOpen = true;
          win.zIndex = state.nextZIndex;
          win.data = data ?? win.data;

          state.nextZIndex = state.nextZIndex + 1;
        }),
      closeWindow: (windowKey) =>
        set((state) => {
          const win = state.windowList[windowKey];
          win.isOpen = false;
          win.zIndex = INITIAL_Z_INDEX;
          win.data = null;
        }),
      focusWindow: (windowKey) =>
        set((state) => {
          const win = state.windowList[windowKey];
          win.zIndex = state.nextZIndex++;
        }),
    };
  }),
);

export default useWindowStore;
