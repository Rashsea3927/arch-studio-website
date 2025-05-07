'use client';

import Button from '@/components/ui/Button';
import { heroItems } from '@/constants';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const HeroImage = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div ref={emblaRef} className='relative overflow-hidden mx-auto max-w-[375px] sm:max-w-sm'>
      <ul className='relative flex'>
        {heroItems.map((hero) => (
          <li
            key={hero.id}
            className='relative grow-0 shrink-0 basis-full after:absolute after:inset-0 after:z-[1] after:bg-black/35'
          >
            <picture>
              <source
                media='(min-width: 1024px)'
                srcSet={hero.image.desktop.src}
                width={hero.image.desktop.width}
                height={hero.image.desktop.height}
              />
              <source
                media='(min-width: 640px)'
                srcSet={hero.image.tablet.src}
                width={hero.image.tablet.width}
                height={hero.image.tablet.height}
              />
              <Image
                src={hero.image.mobile.src}
                className='object-cover'
                width={hero.image.mobile.width}
                height={hero.image.mobile.height}
                alt=''
              />
            </picture>
            <div className='absolute top-[116px] left-1/2 max-w-[311px] px-2 -translate-x-1/2 z-10 xxs:px-0 sm:left-12 sm:translate-x-0 sm:max-w-[457px]'>
              <h2 className='text-5xl text-neutral-0 font-bold -tracking-[1.2px] leading-12 whitespace-pre-line mb-3 sm:text-8xl sm:leading-20'>
                {hero.title}
              </h2>
              <p className='text-base text-neutral-0 font-medium'>{hero.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className='absolute bottom-10 left-1/2 max-w-[311px] px-2 -translate-x-1/2 xxs:left-8 z-[2] sm:bottom-36 sm:translate-x-0 sm:max-w-[457px]'>
        <Button />
      </div>
    </div>
  );
};

export default HeroImage;
