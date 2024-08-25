// components/Modal.tsx
import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onNext, onPrevious, children }) => {
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
      {/* 左側の「前へ」ボタン */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-black font-bold py-2 px-4 rounded"
        onClick={(e) => { e.stopPropagation(); onPrevious(); }}
      >
        前へ
      </button>

      {/* 右側の「次へ」ボタン */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-black font-bold py-2 px-4 rounded"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        次へ
      </button>

      <div
        className="bg-white relative rounded-lg shadow-lg w-11/12 md:w-2/3  max-h-[80vh] overflow-y-auto p-6"
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
