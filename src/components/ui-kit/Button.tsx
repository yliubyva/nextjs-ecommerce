import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  variant: "primary" | "secondary";
  label: string;
  href?: string;
  onClick?: () => void;
  addStyle?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  href,
  onClick,
  addStyle,
  ...props
}) => {
  const baseStyles =
    "flex justify-center items-center w-full max-w-[358px] cursor-pointer rounded-[60px] border py-[16px] text-base font-light transition delay-150 duration-300 ease-in-out xl:max-w-[210px]";
  const variants = {
    primary:
      "hover:border-border-container bg-black font-normal text-white hover:bg-white hover:text-black",
    secondary:
      "border-border-container bg-white hover:bg-black hover:text-white",
  };
  const finalClassName = clsx(baseStyles, variants[variant], addStyle);

  if (href) {
    return (
      <Link href={href} className={finalClassName}>
        {label}
      </Link>
    );
  }
  return (
    <button onClick={onClick} {...props} className={finalClassName}>
      {label}
    </button>
  );
};
