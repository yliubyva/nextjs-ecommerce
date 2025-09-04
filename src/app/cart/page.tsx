import { Container } from "@/shared/ui/atoms/Container";
import { CartItems } from "@/features/cart/components/CartItems";
import { OrderSummary } from "@/features/cart/components/OrderSummary";
import { NoSSR } from "@/shared/ui/atoms/NoSSR";

export default function CartPage() {
  return (
    <Container>
      <h1 className="font-hubot mb-[20px] text-4xl font-black xl:text-6xl">
        Your cart
      </h1>
      <NoSSR>
        <div className="flex flex-col justify-between gap-[20px] md:flex-row">
          <CartItems />
          <OrderSummary />
        </div>
      </NoSSR>
    </Container>
  );
}
