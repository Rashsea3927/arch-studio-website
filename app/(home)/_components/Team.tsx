'use client';

import LinkButton from '@/components/ui/LinkButton';
import { teamImages } from '@/constants';
import { useDeviceType } from '@/hooks/useDeviceType';
import Image from 'next/image';

const Team = () => {
  const device = useDeviceType();
  const imageSrc =
    device === 'mobile'
      ? teamImages.image.mobile.src
      : device === 'tablet'
      ? teamImages.image.tablet.src
      : teamImages.image.desktop.src;

  const imageWidth =
    device === 'mobile'
      ? teamImages.image.mobile.width
      : device === 'tablet'
      ? teamImages.image.tablet.width
      : teamImages.image.desktop.width;

  const imageHeight =
    device === 'mobile'
      ? teamImages.image.mobile.height
      : device === 'tablet'
      ? teamImages.image.tablet.height
      : teamImages.image.desktop.height;

  return (
    <section className='mb-18 md:mb-[200px]'>
      <div className='relative xs:mx-8 sm:max-w-xl sm:mx-auto lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl after:absolute after:inset-0 after:bg-black/50'>
        <Image
          className='w-full h-[560px] object-cover'
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          alt=''
        />
        <div className='absolute top-1/2 left-8 -translate-y-1/2 z-10 w-max sm:left-[58px] sm:translate-x-0 lg:left-[160px] xl:left-[190px]'>
          <h2 className='text-md text-(--white)'>
            Small team,
            <br />
            big ideas
          </h2>
          <div className='w-[187px] mt-6'>
            <LinkButton link='about-us' text='About Us' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
