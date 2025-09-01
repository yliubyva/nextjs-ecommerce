"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Container } from "@/shared/ui/atoms/Container";
import { formatSegment } from "@/shared/utils/string";
import Arrow from "@public/icons/greater.svg";

export const Breadcrumbs = () => {
  const path = usePathname();
  const pathNames = path.split("/").filter((path) => path);

  if (path === "/") return null;

  return (
    <Container>
      <ul className="my-[20px] flex items-center gap-[6px] md:mt-[24px] md:mb-[34px]">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
          {pathNames.length > 0 && (
            <Arrow className="fill-primary h-[14px] w-[14px]" />
          )}
        </BreadcrumbItem>
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          return (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink
                href={href}
                isActive={pathNames.length === index + 1}
              >
                {formatSegment(link)}
              </BreadcrumbLink>
              {pathNames.length !== index + 1 && (
                <Arrow className="fill-primary h-[14px] w-[14px]" />
              )}
            </BreadcrumbItem>
          );
        })}
      </ul>
    </Container>
  );
};

const BreadcrumbItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="flex items-center gap-[6px]">{children}</li>;
};

const BreadcrumbLink = ({
  children,
  href,
  isActive = false,
}: {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
}) => {
  return (
    <>
      {isActive ? (
        <span className="text-sm font-light text-black md:text-base">
          {children}
        </span>
      ) : (
        <Link
          href={href}
          className="text-primary text-sm font-light md:text-base"
        >
          {children}
        </Link>
      )}
    </>
  );
};
