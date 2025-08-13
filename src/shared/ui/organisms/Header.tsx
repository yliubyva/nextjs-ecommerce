import { Container } from "@/shared/ui/atoms/Container";
import { Navigation } from "../molecules/Navigation";
import { UserActions } from "../molecules/UserActions";

export const Header = () => {
  return (
    <header className="fixed right-0 left-0 z-100 bg-white">
      <Container>
        <div className="flex items-center justify-between py-5 xl:pt-[24px] xl:pb-[24px]">
          <Navigation />
          <UserActions />
        </div>
        <div className="absolute right-0 left-0 h-[1px] w-screen bg-white drop-shadow-xs"></div>
      </Container>
    </header>
  );
};
