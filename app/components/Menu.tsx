import Link from 'next/link';

const menuItems = [
  { name: 'portfolio', path: '/portfolio' },
  { name: 'about us', path: '/about-us' },
  { name: 'contact', path: '/contact' },
];

type Props = {
  isOpen?: boolean;
};

const Menu = ({ isOpen }: Props) => {
  return (
    <nav
      className={`absolute top-24 bg-veryLightGray w-[91vw] py-[10.67vw] px-[12.8vw] transition-right duration-400 xs:static xs:bg-transparent xs:w-auto xs:px-0 xs:py-0 xs:mt-3 ${
        isOpen ? 'right-0' : '-right-full'
      }`}
    >
      <ul className='flex flex-col gap-2 text-veryDarkBlue xs:flex-row xs:gap-8 sm:gap-15'>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.path}
              className='font-bold text-2.5xl capitalize xs:text-lg xs:leading-6 xs:text-mediumGray'
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
