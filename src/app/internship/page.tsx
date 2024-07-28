import React from 'react';
import Link from 'next/link';

const Internship = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-fixed bg-center bg-[url('')] bg-custom bg-no-repeat">
      <h1 className="text-2xl font-bold">インターンシップ Borzoi AI</h1>
      <p>This is the details page for the selected item.</p>
      <Link href={'https://borzoi.ai'}>
        <p>Borzoi AI HP</p>
      </Link>
    </div>
  );
};

export default Internship;

