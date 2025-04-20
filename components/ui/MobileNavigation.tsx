import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navItems } from './Navigation';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body?.classList.add('overflow-hidden');
    } else {
      body?.classList.remove('overflow-hidden');
    }
    return () => {
      body?.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`absolute top-[104px] left-0 w-full h-screen z-0 bg-black/50 transition-all duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 invisible'
        }`}
      />
      <button
        type='button'
        className={`relative w-6 h-[17px] flex flex-col justify-between ${isOpen ? 'items-center' : ''}`}
        onClick={handleToggle}
      >
        <span
          className={`w-full h-[3px] bg-(--dark-blue) transition-transform ${
            isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-0'
          }`}
        ></span>
        <span
          className={`w-full h-[3px] bg-(--dark-blue) transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        ></span>
        <span
          className={`w-full h-[3px] bg-(--dark-blue) transition-transform ${
            isOpen ? '-rotate-45 -translate-y-1.5' : 'rotate-0 translate-0'
          }`}
        ></span>
      </button>
      <nav
        className={`fixed top-[104px] right-0 z-10 w-[343px] bg-(--light-grey) pt-10 px-12 pb-[42px] transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className='flex flex-col gap-4'>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className='text-sm'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileNavigation;
