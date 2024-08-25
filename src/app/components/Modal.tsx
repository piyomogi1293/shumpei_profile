// components/Modal.tsx
import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // モーダルのウィンドウ部分のクリックを無視するために、イベントの伝播を停止
  const handleModalContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // 背景クリック時にモーダルを閉じる
    >
      <div
        className="bg-white relative rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 p-6"
        onClick={handleModalContentClick} // コンテンツクリック時のイベント伝播を停止
      >
        <button
          className="absolute top-4 right-4 text-black"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
