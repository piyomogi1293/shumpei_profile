// components/Card.tsx
import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  textBackgroundColor?: string;
  width?: string;
  height?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
  textBackgroundColor = 'bg-white',
  width = 'w-1000',
  height = 'h-100'
}) => {
  return (
    <div className='flex justify-center'>
    <Link href={linkUrl}>
      <div className={`block hover:shadow-xl transition-shadow duration-300 ease-in-out ${width} ${height}`}>
        <div className="flex max-w-lg rounded overflow-hidden shadow-lg bg-gray-100">
          <div className="flex-shrink-0">
            <img className="w-48 h-48 object-cover" src={imageUrl} alt={title} />
          </div>
          <div className={`p-4 ${textBackgroundColor} flex-1`}>
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default Card;
