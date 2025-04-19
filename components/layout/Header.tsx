import Navigation from '@/components/ui/Navigation';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='fixed w-full top-0 left-0 z-10 flex items-center p-8 justify-between h-[104px] bg-(--white)'>
      <Image src='/assets/logo.svg' width={97} height={40} alt='Arch' />
      <Navigation />
    </header>
  );
};

export default Header;
