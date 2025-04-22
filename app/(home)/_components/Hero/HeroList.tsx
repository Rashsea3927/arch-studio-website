'use client';

import LinkButton from '@/components/ui/LinkButton';
import { heroItems } from '@/constants';
import { useDeviceType } from '@/hooks/useDeviceType';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import Thumb from './Thumb';

const HeroList = () => {
  const device = useDeviceType();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaRefApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
  });

  const handleThumbClick = useCallback(
    (index: number) => {
      if (!emblaRefApi || !emblaThumbsApi) return;
      emblaRefApi.scrollTo(index);
    },
    [emblaRefApi, emblaThumbsApi]
  );

  const handleSelect = useCallback(() => {
    if (!emblaRefApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaRefApi.selectedScrollSnap());
  }, [emblaRefApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaRefApi) return;
    handleSelect();

    emblaRefApi.on('select', handleSelect).on('reInit', handleSelect);
  }, [emblaRefApi, handleSelect]);

  return (
    <div className='relative'>
      <div ref={emblaRef} className='overflow-hidden'>
        <ul className='flex'>
          {heroItems.map((hero) => {
            return (
              <li
                key={hero.id}
                className='relative grow-0 shrink-0 basis-full after:absolute after:inset-0 after:z-[1] after:bg-black/35'
              >
                <Image
                  src={
                    device === 'mobile'
                      ? hero.image.mobile.src
                      : device === 'tablet'
                      ? hero.image.tablet.src
                      : hero.image.desktop.src
                  }
                  width={
                    device === 'mobile'
                      ? hero.image.mobile.width
                      : device === 'tablet'
                      ? hero.image.tablet.width
                      : hero.image.desktop.width
                  }
                  height={
                    device === 'mobile'
                      ? hero.image.mobile.height
                      : device === 'tablet'
                      ? hero.image.tablet.height
                      : hero.image.desktop.height
                  }
                  className='w-full h-[560px] text-center object-cover sm:h-[720px]'
                  alt=''
                />
                <div className='absolute top-[116px] left-1/2 -translate-x-1/2 z-10 max-w-xs w-full sm:max-w-[457px] sm:top-[186px] lg:translate-x-0 lg:left-[190px] lg:max-w-[544px]'>
                  <div>
                    <h2 className='text-lg text-(--white) whitespace-pre-line mb-3'>{hero.title}</h2>
                    <p className='text-body text-(--white) lg:max-w-[445px]'>{hero.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className='absolute bottom-[110px] max-w-xs sm:max-w-[457px] left-1/2 -translate-x-1/2 w-full sm:bottom-[179px] lg:translate-x-0 lg:left-[160px] lg:max-w-[544px] xl:left-[190px]'>
          <div className='w-[252px]'>
            <LinkButton link='portfolio' text='See Our Portfolio' />
          </div>
        </div>
      </div>
      <div ref={emblaThumbsRef} className='absolute bottom-0 -left-20'>
        <div className='hidden lg:flex'>
          {heroItems.map((_, index) => (
            <Thumb
              key={index}
              onClick={() => handleThumbClick(index)}
              selected={index === selectedIndex}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroList;
