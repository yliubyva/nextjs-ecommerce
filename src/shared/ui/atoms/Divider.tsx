import clsx from "clsx";

type Props = {
  addClass?: string;
};

export const Divider: React.FC<Props> = ({ addClass }) => {
  return (
    <div
      className={clsx(addClass, "h-[1px] w-full bg-secondary")}
    ></div>
  );
};
