import { create } from 'zustand'

const useHeaderStore = create((set) => ({
    title : '',
    newTitle: (newTitle) => set({ title : newTitle }),
}));

export default useHeaderStore