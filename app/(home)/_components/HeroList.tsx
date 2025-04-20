'use client';

import LinkButton from '@/components/ui/LinkButton';
import { heroItems } from '@/constants';
import { useDeviceType } from '@/hooks/useDeviceType';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const HeroList = () => {
  const device = useDeviceType();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Fade(), Autoplay()]);

  return (
    <div ref={emblaRef} className='relative overflow-hidden'>
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
                className='w-full h-auto object-contain'
                alt=''
              />
              <div className='absolute top-[116px] left-1/2 -translate-x-1/2 z-10 w-full px-8'>
                <div>
                  <h2 className='text-lg--mobile text-(--white) whitespace-pre-line mb-3'>{hero.title}</h2>
                  <p className='text-body text-(--white)'>{hero.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className='absolute bottom-[110px] w-[252px] left-8'>
        <LinkButton link='portfolio' text='See Our Portfolio' />
      </div>
    </div>
  );
};

export default HeroList;
