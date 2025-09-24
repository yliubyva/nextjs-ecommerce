import Image from "next/image";

export const Loader = () => {
  return (
    <div className="flex h-100 w-screen items-center justify-center md:h-200">
      <div className="relative h-[22px] w-[160px] animate-pulse">
        <Image
          src="/logo.svg"
          fill
          alt="logo"
          priority={true}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};
