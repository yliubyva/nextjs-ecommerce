import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/ui/atoms/Container";
import { NewsletterForm } from "@/shared/ui/molecules/NewsletterForm";
import { SocialsList } from "@/shared/ui/atoms/SocialsList";
import { PaymentsList } from "@/shared/ui/atoms/PaymentsList";
import { Divider } from "@/shared/ui/atoms/Divider";

export function Footer() {
  const footerInfo = [
    {
      title: "Company",
      list: ["About", "Features", "Works", "Career"],
    },

    {
      title: "Help",
      list: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },

    {
      title: "FAQ",
      list: ["Account", "Manage Delivery", "Orders", "Payments"],
    },

    {
      title: "Resources",
      list: [
        "Free eBooks",
        "Development Tutorial",
        "How to - Blog",
        "YouTube Playlist",
      ],
    },
  ];

  return (
    <Container>
      <div className="relative pt-[190px] pb-[77px] md:pt-[100px] xl:pt-[140px] xl:pb-[92px]">
        <div className="absolute inset-x-3 top-[-135px] flex flex-col items-center rounded-[20px] bg-black p-[24px] md:top-[-80px] md:flex-row md:justify-between xl:inset-x-0.5 xl:top-[-100px] xl:px-[64px] xl:py-[43px]">
          <h2 className="font-hubot mb-[32px] w-full max-w-[297px] text-2xl font-black text-white md:mb-0 md:max-w-[400px] xl:max-w-[560px] xl:text-4xl">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <NewsletterForm />
        </div>
        <div className="mb-[40px] grid grid-cols-2 gap-y-[25px] md:mb-[50px] md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <Image
                src="/logo.svg"
                width={144}
                height={20}
                alt="logo"
                priority={true}
                className="mb-[14px] h-[30px] w-[144px] xl:mb-[25px] xl:h-[33px] xl:w-[167px]"
              />
            </Link>
            <p className="mb-[20px] text-sm text-primary xl:mb-[35px]">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <SocialsList />
          </div>
          {footerInfo.map((item, index) => (
            <div key={index} className="md:justify-self-end">
              <p className="mb-[16px] font-normal tracking-widest uppercase xl:mb-[26px]">
                {item.title}
              </p>
              <ul className="flex flex-col gap-[10px]">
                {item.list.map((listItem, i) => (
                  <li
                    key={i}
                    className="cursor-pointer text-sm text-primary"
                  >
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Divider addClass="mb-[16px] xl:mb-[21px]" />
        <div className="flex flex-col items-center justify-between gap-[16px] xl:flex-row">
          <p className="text-sm text-primary">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <PaymentsList />
        </div>
      </div>
    </Container>
  );
}
