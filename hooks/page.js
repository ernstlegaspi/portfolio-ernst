import { create } from "zustand"

export const usePageStore = create(set => ({
	currentPage: 1,
	setCurrentPage: page => set(() => ({
		currentPage: page
	}))
}))
