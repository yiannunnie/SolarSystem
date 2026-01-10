interface ButtonProps {
  title?: string;
  id?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
  onClick?: () => void;
}

export const Button = ({ title, id, rightIcon, leftIcon, containerClass, onClick }: ButtonProps) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-4 py-2 md:px-5 md:py-3 text-white border ${containerClass ?? ""}`}
      onClick={onClick}
    >
      {leftIcon}
      {rightIcon}

      <span className="relative inline-flex overflow-hidden text-[11px] md:text-xs uppercase">
        <div>
            {title}
        </div>
      </span>
    </button>
  );
};
