import { create } from "zustand"

export const useModalStore = create(set => ({
	isModalActive: false,
	activeModal: "none",
	setIsModalActive: isModalActive => set(() => ({
		isModalActive
	})),
	setActiveModal: activeModal => set(() => ({
		activeModal
	}))
}))
