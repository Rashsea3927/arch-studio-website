'use client';
import { useDeviceType } from '@/hooks/useDeviceType';
import { PortfolioType } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  portfolio: PortfolioType;
};

const PortfolioItem = ({ portfolio }: Props) => {
  const device = useDeviceType();
  const imageSrc =
    device === 'mobile'
      ? portfolio.images.mobile.src
      : device === 'tablet'
      ? portfolio.images.tablet.src
      : portfolio.images.desktop.src;

  const imageWidth =
    device === 'mobile'
      ? portfolio.images.mobile.width
      : device === 'tablet'
      ? portfolio.images.tablet.width
      : portfolio.images.desktop.width;

  const imageHeight =
    device === 'mobile'
      ? portfolio.images.mobile.height
      : device === 'tablet'
      ? portfolio.images.tablet.height
      : portfolio.images.desktop.height;

  return (
    <li key={portfolio.id}>
      <Link href='/portfolio'>
        <div className='relative after:absolute after:inset-0 after:z-[9] after:bg-linear-to-b after:from-black/0 after:to-black/50'>
          <Image
            className='w-full h-auto object-cover'
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt={portfolio.title}
          />
          <div className='absolute left-6 bottom-6 z-10 sm:left-10 sm:bottom-10'>
            <h3 className='text-sm text-(--white)'>{portfolio.title}</h3>
            <p className='text-body text-(--white)/75'>View All Projects</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PortfolioItem;
