import Menu from '@components/Menu';

type Props = {
  isOpen: boolean;
};

const MobileMenu = ({ isOpen }: Props) => {
  return (
    <div className='xs:hidden'>
      <div
        className={`absolute inset-0 -z-10 w-full bg-overlay transition-opacity duration-400 ${
          isOpen ? 'opacity-100' : 'opacity-0 visibility-hidden'
        }`}
      />

      <Menu isOpen={isOpen} />
    </div>
  );
};

export default MobileMenu;
