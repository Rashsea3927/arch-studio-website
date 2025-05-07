import Image from 'next/image';
import Link from 'next/link';

const Button = () => {
  return (
    <Link
      href='/portfolio'
      className='flex justify-center items-center gap-6 pl-9 pr-8 w-full h-18 text-base text-neutral-0 font-bold tracking-normal leading-6 bg-neutral-900'
    >
      <span>See Our Portfolio</span>
      <Image src='/assets/icons/icon-arrow.svg' width={26} height={20} alt='' />
    </Link>
  );
};

export default Button;
