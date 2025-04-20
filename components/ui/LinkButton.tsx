import Image from 'next/image';
import Link from 'next/link';

type Props = {
  link: string;
  text: string;
};

const LinkButton = ({ link, text }: Props) => {
  return (
    <Link
      href={`/${link}`}
      className='flex justify-center items-center gap-6 bg-(--dark-blue) w-full h-[72px] text-xs text-(--white)'
    >
      <span>{text}</span>
      <Image src='/assets/icons/icon-arrow.svg' width={26} height={20} alt='' />
    </Link>
  );
};

export default LinkButton;
