import Image from "next/image";

export function PaymentsList() {
  const paymentsList = [
    { name: "visa", src: "/icons/visa.svg" },
    { name: "mastercard", src: "/icons/mastercard.svg" },
    { name: "paypal", src: "/icons/paypal.svg" },
    { name: "applePay", src: "/icons/apple-pay.svg" },
    { name: "gPay", src: "/icons/g-Pay.svg" },
  ];
  return (
    <ul className="flex gap-[12px]">
      {paymentsList.map((payment) => (
        <li
          key={payment.name}
          className="flex h-[25px] w-[40px] items-center justify-center rounded-[5px] border border-badge bg-white drop-shadow-xs xl:h-[30px] xl:w-[46px]"
        >
          <Image
            width={27}
            height={10}
            src={payment.src}
            alt={payment.name}
            className="h-[10px] w-[27px] xl:h-[12px] xl:w-[35px]"
          />
        </li>
      ))}
    </ul>
  );
}
