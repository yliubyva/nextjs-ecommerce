import clsx from "clsx";

type Props = {
  addClass?: string;
};

export const Divider: React.FC<Props> = ({ addClass }) => {
  return <div className={clsx(addClass, "bg-secondary h-[1px] w-full")}></div>;
};
