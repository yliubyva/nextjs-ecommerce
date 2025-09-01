type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto my-0 w-full max-w-[1240px] min-w-[334px] px-4 xl:px-0">
      {children}
    </div>
  );
};
