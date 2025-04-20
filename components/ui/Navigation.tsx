import Link from 'next/link';

export const navItems = [
  { name: 'Portfolio', href: '/portfolio', label: 'portfolio' },
  { name: 'About Us', href: '/about-us', label: 'about-us' },
  { name: 'Contact', href: '/contact', label: 'contact' },
];

const Navigation = () => {
  return (
    <>
      <nav>
        <ul className='flex items-center gap-[60px]'>
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className='text-xs sm:text-(--medium-grey)'>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='hidden md:flex absolute top-0 flex-col items-center gap-12 -left-[60px] xl:-left-[102px]'>
        <span className='w-[1px] h-[104px] bg-(--grey)'></span>
        <p className='uppercase text-xs--vertical text-(--grey)'>home</p>
      </div>
    </>
  );
};

export default Navigation;
