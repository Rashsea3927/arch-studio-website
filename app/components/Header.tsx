'use client';

import Image from 'next/image';
import LogoImage from '@assets/logo.svg';
import Link from 'next/link';
import HamburgerIcon from '@assets/icons/icon-hamburger.svg';
import { useEffect, useState } from 'react';
import MobileMenu from '@components/MobileMenu';
import Menu from '@components/Menu';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className='relative bg-background w-full z-10 max-w-sm p-8 mx-auto flex justify-between items-center xs:gap-12 sm:justify-start sm:gap-19 sm:p-0 sm:py-14 lg:max-w-md xl:max-w-lg lg:gap-24'>
        <Link href='/' className='xs:w-24'>
          <Image
            className='w-full h-auto'
            src={LogoImage}
            width={77}
            height={32}
            priority={true}
            sizes='(min-width: 540px) 96px'
            alt='Arch Studio Logo'
          />
        </Link>
        <Menu />
        <button className='xs:hidden' onClick={handleMenuButtonClick}>
          <Image src={HamburgerIcon} width={24} height={17} alt='Open Menu' />
        </button>
      </header>
      <MobileMenu isOpen={isMenuOpen} />
    </>
  );
};

export default Header;
