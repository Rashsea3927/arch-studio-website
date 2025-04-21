'use client';

import { useDeviceType } from '@/hooks/useDeviceType';

const Welcome = () => {
  const device = useDeviceType();

  return (
    <section className='mb-[113px]'>
      <div className='relative max-w-xs mx-auto sm:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl'>
        {device === 'mobile' ? (
          <span className='absolute top-0 left-0 block w-[65px] h-[1px] bg-(--grey)'></span>
        ) : (
          <p className='absolute top-0 left-0 block text-xl text-(--light-grey)'>Welcome</p>
        )}
        <div className='pt-[69px] sm:pt-40'>
          <h2 className='text-md text-(--dark-blue) mb-6 sm:max-w-[446px] sm:mb-10'>Welcome to Arch Studio</h2>
          <div className='grid gap-6'>
            <p className='text-body text-(--dark-grey)'>
              We have a unique network and skillset to help bring your projects to life. Our small team of highly
              skilled individuals combined with our large network put us in a strong position to deliver exceptional
              results.
            </p>
            <p className='text-body text-(--dark-grey)'>
              Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we
              create spaces that inspire and delight.
            </p>
            <p className='text-body text-(--dark-grey)'>
              We work closely with our clients so that we understand the intricacies of each project. This allows us to
              work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
