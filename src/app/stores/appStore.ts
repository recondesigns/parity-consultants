import { create } from "zustand"

const useAppStore = create((set) => ({
  isFlyoutOpen: false,
  setIsFlyoutOpen: () =>
    set((state: any) => ({ isFlyoutOpen: !state.isFlyoutOpen })),
}))

export { useAppStore }
