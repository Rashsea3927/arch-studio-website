type Props = {
  onClick: () => void;
  selected: boolean;
  index: number;
};

const Thumb = ({ onClick, selected, index }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`w-20 h-20 text-body grid place-items-center ${
        selected
          ? 'bg-(--dark-blue) text-(--white)'
          : 'bg-(--white) text-(--medium-grey) cursor-pointer transition-colors hover:bg-(--light-grey)'
      }`}
    >
      0{index + 1}
    </button>
  );
};

export default Thumb;
