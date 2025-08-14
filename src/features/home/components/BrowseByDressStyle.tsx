import Image from "next/image";
import clsx from "clsx";
import { Container } from "@/shared/ui/atoms/Container";

export const BrowseByDressStyle: React.FC = () => {
  const categoryStyle = [
    { name: "Casual", image: "/dress-style/casual.png" },
    { name: "Formal", image: "/dress-style/formal.png" },
    { name: "Party", image: "/dress-style/party.png" },
    { name: "Gym", image: "/dress-style/gym.png" },
  ];
  return (
    <section className="mb-[50px] xl:mb-[80px]">
      <Container>
        <div className="bg-category-background w-full rounded-[20px] px-[24px] pt-[40px] pb-[27px] xl:rounded-[40px] xl:px-[64px] xl:pt-[70px] xl:pb-[76px]">
          <h2 className="font-hubot mx-auto mb-[28px] max-w-[250px] text-center text-3xl font-black uppercase sm:max-w-full xl:mb-[64px] xl:text-5xl">
            Browse by dress style
          </h2>

          <div className="grid grid-cols-1 gap-[16px] md:grid-cols-3 md:gap-[20px]">
            {categoryStyle.map((category) => (
              <div
                key={category.name}
                className={clsx(
                  "relative h-[190px] w-full overflow-hidden rounded-[20px] bg-white md:h-[298px]",
                  category.name === "Formal" || category.name === "Party"
                    ? "md:col-span-2"
                    : "",
                )}
              >
                <h3 className="absolute top-[16px] left-[24px] text-2xl font-medium xl:top-[25px] xl:left-[36px] xl:text-4xl">
                  {category.name}
                </h3>
                <Image
                  src={category.image}
                  alt={category.name}
                  width={310}
                  height={119}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
