import Navigation from '@components/ui/Navigation';

const Header = () => {
  return (
    <header className='sticky top-0 left-0 z-10 h-24 p-8 bg-neutral-0 xs:px-0 xs:py-8 sm:px-0 sm:py-14 sm:h-auto'>
      <div className='flex items-center justify-between mx-auto max-w-[375px] sm:max-w-sm sm:justify-normal sm:gap-20 lg:max-w-lg lg:gap-24 xl:max-w-xl 2xl:max-w-2xl'>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
