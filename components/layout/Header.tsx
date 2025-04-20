'use client';

import MobileNavigation from '@/components/ui/MobileNavigation';
import Navigation from '@/components/ui/Navigation';
import { useDeviceType } from '@/hooks/useDeviceType';
import Image from 'next/image';

const Header = () => {
  const device = useDeviceType();
  return (
    <header className='relative flex items-center px-8 mx-auto py-8 justify-between sm:justify-start sm:gap-20 sm:max-w-xl sm:px-0 sm:py-14 lg:max-w-3xl lg:gap-24 xl:max-w-5xl 2xl:max-w-6xl'>
      <h1>
        <Image src='/assets/logo.svg' width={97} height={40} alt='Arch' />
      </h1>
      {device === 'mobile' ? <MobileNavigation /> : <Navigation />}
    </header>
  );
};

export default Header;
