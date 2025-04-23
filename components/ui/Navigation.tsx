'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navItems = [
  { name: 'Portfolio', href: '/portfolio', label: 'portfolio' },
  { name: 'About Us', href: '/about-us', label: 'about-us' },
  { name: 'Contact', href: '/contact', label: 'contact' },
];

const Navigation = () => {
  const pathname = usePathname().slice(1);
  return (
    <>
      <nav>
        <ul className='flex items-center gap-[60px]'>
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`relative ${
                pathname === item.label
                  ? 'after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-6 after:h-[1px] after:bg-(--dark-blue)'
                  : ''
              }`}
            >
              <Link
                href={item.href}
                className={`text-xs transition-colors hover:text-(--dark-blue) ${
                  pathname === item.label ? 'text-(--dark-blue)' : 'text-(--medium-grey)'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='hidden md:flex absolute top-0 flex-col items-center gap-12 -left-[60px] xl:-left-[102px]'>
        <span className='w-[1px] h-[104px] bg-(--grey)'></span>
        <p className='uppercase text-xs--vertical text-(--grey)'>{`${
          pathname.includes('-') ? pathname.replace(/-/g, ' ') : pathname
        }`}</p>
      </div>
    </>
  );
};

export default Navigation;
