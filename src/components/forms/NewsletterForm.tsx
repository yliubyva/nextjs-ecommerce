import Mail from "@public/icons/icon-mail.svg";

export const NewsletterForm = () => {
  return (
    <form
      className="flex w-full max-w-[311px] flex-col gap-[12px]"
    >
      <div>
        <div className="flex h-[42px] w-full items-center gap-[15px] rounded-[60px] bg-white px-[16px]">
          <Mail className="fill-[#00000040]" />
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full text-xs text-(--color-text-primary) outline-0"
          />
        </div>
      </div>
      <button className="flex h-[42px] w-full cursor-pointer items-center justify-center rounded-[60px] border bg-white text-sm font-normal transition delay-150 duration-300 ease-in-out hover:border-white hover:bg-(--color-badge)">
        Subscribe to Newsletter
      </button>
    </form>
  );
};
