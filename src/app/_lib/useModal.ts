import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  content?: React.ReactNode;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

const useModal = create<ModalState>()((set) => ({
  isOpen: false,

  /**
   * Opens the modal with the provided content.
   * @param content – content of the modal.
   */
  openModal: (content) => {
    set({ isOpen: true, content });
  },

  /**
   * Closes the modal and resets its state.
   */
  closeModal: () =>
    set({
      isOpen: false,
      content: undefined,
    }),
}));

export default useModal;
