import { useState } from "react";

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalAction, setModalAction] = useState(null);

  const openModal = (message, action) => {
    setModalMessage(message);
    setModalAction(() => action);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
    setModalAction(null);
  };

  return {
    isModalOpen,
    modalMessage,
    modalAction,
    openModal,
    closeModal,
  };
};

export default useModal;
