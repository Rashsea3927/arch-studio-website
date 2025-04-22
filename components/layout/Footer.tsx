import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '../ui/LinkButton';

const Footer = () => {
  return (
    <footer className='relative pt-[93px] pb-12 bg-(--light-grey) md:bg-transparent md:p-0 md:max-w-[768px] md:mx-auto xl:max-w-5xl 2xl:max-w-6xl'>
      <div className='flex flex-col items-center gap-8 bg-(--light-grey) md:flex-row md:w-[612px] md:gap-10 xl:w-[900px] xl:gap-[85px] 2xl:w-[984px]'>
        <div className='absolute -top-[60px] w-[120px] h-[120px] bg-(--dark-blue) grid place-items-center md:static xl:w-[200px] xl:h-[200px]'>
          <Image className='xl:w-24 xl:h-auto' src='/assets/logo_footer.svg' width={58} height={24} alt='' />
        </div>
        <ul className='flex flex-col gap-8 md:flex-row md:gap-[60px]'>
          <li>
            <Link href='/portfolio' className='text-xs text-(--medium-grey)'>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href='/about-us' className='text-xs text-(--medium-grey)'>
              About Us
            </Link>
          </li>
          <li>
            <Link href='/contact' className='text-xs text-(--medium-grey)'>
              Contact
            </Link>
          </li>
        </ul>
        <div className='w-[252px] md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0'>
          <LinkButton link='portfolio' text='See Our Portfolio' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
