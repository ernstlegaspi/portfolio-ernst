import { create } from "zustand"

export const useGrowingStore = create(set => ({
	isGrowing: false,
	setIsGrowing: isGrowing => set(() => ({
		isGrowing
	}))
}))