import { create } from "zustand"

export const useGrowingStore = create(set => ({
	isGrowing: false,
	isGrowingDone: false,
	setIsGrowing: isGrowing => set(() => ({
		isGrowing
	})),
	setIsGrowingDone: isGrowingDone => set(() => ({
		isGrowingDone
	})),
}))