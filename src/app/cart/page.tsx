import { Container } from "@/components/ui-kit/Container";
import { CartItems } from "@/components/sections/cart/CartItems";
import { OrderSummary } from "@/components/sections/cart/OrderSummary";

export default function CartPage() {
  return (
    <Container>
      <h1 className="font-hubot mb-[20px] text-4xl font-black xl:text-6xl">
        Your cart
      </h1>
      <div className="flex flex-col justify-between gap-[20px] md:flex-row">
        <CartItems />
        <OrderSummary />
      </div>
    </Container>
  );
}
