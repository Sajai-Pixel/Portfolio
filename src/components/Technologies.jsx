import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiRedux, SiBootstrap, SiFigma, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si';

const Technologies = () => {
  return (
    <div className='pb-24 overflow-hidden'>
      <h2 className='my-20 text-center font-semibold text-5xl'>Technologies</h2>
      <div className='relative flex items-center'>
        <div className='marquee flex'>
          <SiHtml5 className='text-7xl text-orange-600 mx-5' />
          <SiCss3 className='text-7xl text-blue-500 mx-5' />
          <SiJavascript className='text-7xl text-yellow-400 mx-5' />
          <RiReactjsLine className='text-7xl text-cyan-400 mx-5' />
          <SiMongodb className='text-7xl text-green-500 mx-5' />
          <SiNodedotjs className='text-7xl text-green-600 mx-5' />
          <SiExpress className='text-7xl text-gray-500 mx-5' />
          <SiTailwindcss className='text-7xl text-teal-400 mx-5' />
          <SiRedux className='text-7xl text-purple-600 mx-5' />
          <SiBootstrap className='text-7xl text-indigo-700 mx-5' />
          <SiFigma className='text-7xl text-pink-500 mx-5' />
        </div>
        {/* Duplicate content for seamless effect */}
        <div className='marquee flex'>
          <SiHtml5 className='text-7xl text-orange-600 mx-5' />
          <SiCss3 className='text-7xl text-blue-500 mx-5' />
          <SiJavascript className='text-7xl text-yellow-400 mx-5' />
          <RiReactjsLine className='text-7xl text-cyan-400 mx-5' />
          <SiMongodb className='text-7xl text-green-500 mx-5' />
          <SiNodedotjs className='text-7xl text-green-600 mx-5' />
          <SiExpress className='text-7xl text-gray-500 mx-5' />
          <SiTailwindcss className='text-7xl text-teal-400 mx-5' />
          <SiRedux className='text-7xl text-purple-600 mx-5' />
          <SiBootstrap className='text-7xl text-indigo-700 mx-5' />
          <SiFigma className='text-7xl text-pink-500 mx-5' />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
