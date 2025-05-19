import X from "@public/icons/icon-x.svg";
import Facebook from "@public/icons/icon-facebook.svg";
import Instagram from "@public/icons/icon-instagram.svg";
import GitHub from "@public/icons/icon-github.svg";

export function ListSocials() {
  const socialsList = [
    { name: "x", component: <X />, src: "http://x.com" },
    { name: "facebook", component: <Facebook />, src: "http://facebook.com" },
    {
      name: "instagram",
      component: <Instagram />,
      src: "http://instagram.com",
    },
    { name: "github", component: <GitHub />, src: "http://github.com" },
  ];
  return (
    <ul className="flex gap-[12px]">
      {socialsList.map((item) => (
        <li key={item.name}>
          <a
            href={item.src}
            className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-(--color-border-container) bg-white transition-all delay-100 ease-in hover:bg-(--color-black) hover:fill-white"
          >
            {item.component}
          </a>
        </li>
      ))}
    </ul>
  );
}
