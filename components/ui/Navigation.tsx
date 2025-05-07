'use client';

import { useDeviceType } from '@/hooks/useDeviceType';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const navItems = [
  { name: 'Portfolio', link: '/portfolio', label: 'portfolio' },
  { name: 'About Us', link: '/about-us', label: 'about-us' },
  { name: 'Contact', link: '/contact', label: 'contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const deviceSize = useDeviceType();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <Link href='/' onClick={() => setIsOpen(false)} className='w-[77px] h-auto sm:w-auto'>
        <Image src='/assets/logo.svg' className='w-full h-auto' width={97} height={40} alt='' />
      </Link>
      {deviceSize === 'mobile' ? (
        <>
          <button type='button' className='flex flex-col gap-1' onClick={handleClick}>
            <span
              className={`w-6 h-[3px] bg-neutral-900 transition-transform ${isOpen && 'rotate-45 translate-y-2'}`}
            ></span>
            <span className={`w-6 h-[3px] bg-neutral-900 transition-opacity ${isOpen && 'opacity-0'}`}></span>
            <span
              className={`w-6 h-[3px] bg-neutral-900 transition-transform ${isOpen && '-rotate-45 -translate-y-1.5'}`}
            ></span>
          </button>
          <nav
            className={`fixed z-20 top-24 bg-neutral-200 w-full max-w-[343px] py-10 pl-12 ${
              isOpen ? 'right-0' : '-right-[343px]'
            } transition-[right] duration-400 ease-in-out`}
          >
            <ul className='flex flex-col gap-4'>
              {navItems.map((item) => (
                <li key={item.label} className='text-3xl leading-10 font-bold text-neutral-900'>
                  <Link href={item.link} onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={`absolute top-24 transition-all duration-400 left-0 w-full bg-black/50 h-[calc(100vh-96px)] ${
              isOpen ? 'opacity-100' : 'opacity-0 invisible'
            }`}
          />
        </>
      ) : (
        <nav>
          <ul className='flex items-center gap-15'>
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.link} className='text-lg font-bold text-neutral-700 leading-6'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
