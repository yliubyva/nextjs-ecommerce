import { Container } from "@/components/ui-kit/Container";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Container>
      <div className="flex h-[480px] w-full flex-wrap justify-between gap-[10px] md:flex-nowrap">
        <Link
          href="/shop/men"
          className="relative block w-full overflow-hidden"
        >
          <Image
            src="/men.png"
            alt="men"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw"
          />
        </Link>
        <Link
          href="/shop/women"
          className="relative block w-full overflow-hidden"
        >
          <Image
            src="/women.png"
            alt="women"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw"
          />
        </Link>
      </div>
    </Container>
  );
}
