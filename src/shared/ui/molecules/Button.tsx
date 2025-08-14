import clsx from "clsx";
import Arrow from "@public/icons/arrow.svg";
import Link from "next/link";

type ButtonProps = {
  variant: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  addStyle?: string;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  href,
  onClick,
  addStyle,
  children,
  ...props
}) => {
  const baseStyles =
    "flex justify-center items-center w-full max-w-[358px] cursor-pointer rounded-[60px] border py-[16px] text-base font-light transition delay-150 duration-300 ease-in-out xl:max-w-[210px]";
  const variants = {
    primary:
      "hover:border-secondary bg-black font-normal text-white hover:bg-white hover:text-black",
    secondary: "border-secondary bg-white hover:bg-black hover:text-white",
  };
  const finalClassName = clsx(baseStyles, variants[variant], addStyle);

  if (href) {
    return (
      <Link href={href} className={finalClassName}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} {...props} className={finalClassName}>
      {children}
    </button>
  );
};

type PaginationButtonProps = {
  label: string | number;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  label,
  isActive,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "text-primary flex h-[36px] w-[36px] cursor-pointer items-center justify-center font-normal",
        isActive && "bg-secondary rounded-[8px] text-black",
      )}
    >
      {label}
    </button>
  );
};

type PaginationArrowButtonProps = {
  label: string;
  isNext: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const PaginationArrowButton: React.FC<PaginationArrowButtonProps> = ({
  label,
  isNext,
  ...props
}) => {
  return (
    <button
      {...props}
      className="border-secondary flex cursor-pointer items-center gap-[8px] rounded-[8px] border p-[10px] font-normal"
    >
      <Arrow
        className={clsx(
          isNext && "order-2 scale-x-[-1]",
          "h-[16px] w-[16px] fill-black md:h-[20px] md:w-[20px]",
        )}
      />
      <span>{label}</span>
    </button>
  );
};
