import clsx from "clsx";

type Props = {
  onClick: () => void;
  label: string;
  isPrimaryButton: boolean;
  addStyle?: string;
};

export const Button: React.FC<Props> = ({
  label,
  onClick,
  isPrimaryButton,
  addStyle,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full max-w-[358px] cursor-pointer rounded-[60px] border py-[16px] text-base font-light transition delay-150 duration-300 ease-in-out xl:max-w-[210px]",

        isPrimaryButton
          ? "hover:border-border-container bg-black font-normal text-white hover:bg-white hover:text-black"
          : "border-border-container bg-white hover:bg-black hover:text-white",

        addStyle,
      )}
    >
      {label}
    </button>
  );
};