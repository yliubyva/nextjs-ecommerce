"use client";
import { useState } from "react";
import Mail from "@public/icons/icon-mail.svg";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (!email) {
      setError("Please enter an email address.");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (error) return;

    console.log("Subscribed email: ", email);

    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[311px] flex-col gap-[12px]"
    >
      <div>
        <div className="flex h-[42px] w-full items-center gap-[15px] rounded-[60px] bg-white px-[16px]">
          <Mail className="fill-[#00000040]" />
          <input
            type="text"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={handleBlur}
            className="w-full text-xs text-(--color-text-primary) outline-0"
          />
        </div>
        {error && <div className="text-sm text-red-500">{error}</div>}
      </div>
      <button className="flex h-[42px] w-full cursor-pointer items-center justify-center rounded-[60px] border bg-white text-sm font-normal transition delay-150 duration-300 ease-in-out hover:border-white hover:bg-badge">
        Subscribe to Newsletter
      </button>
    </form>
  );
};
