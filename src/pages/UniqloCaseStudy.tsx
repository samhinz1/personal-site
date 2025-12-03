import React, { useEffect } from 'react';

const UniqloCaseStudy: React.FC = () => {
  useEffect(() => {
    window.location.href = 'https://how-vinted-became-europe-qli8r25.gamma.site/';
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-dutch-white">
      <div className="text-center px-6 max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-rich-black">
          Redirecting to Vinted Case Study...
        </h1>
        <p className="text-gray-700 mb-6">
          If you&apos;re not redirected automatically, click the button below to view the full
          write-up.
        </p>
        <a
          href="https://how-vinted-became-europe-qli8r25.gamma.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 bg-tomato text-dutch-white rounded-lg font-semibold
          shadow-[0_6px_0_0_#c73122] hover:shadow-[0_3px_0_0_#c73122]
          active:shadow-[0_0px_0_0_#c73122]
          transition-all hover:translate-y-[3px] active:translate-y-[6px]"
        >
          Open Vinted Case Study
        </a>
      </div>
    </main>
  );
};

export default UniqloCaseStudy;