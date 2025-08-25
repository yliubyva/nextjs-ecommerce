"use client";
import { useEffect, useRef } from "react";
import Close from "@public/icons/icon-close.svg";
import { usePathname } from "next/navigation";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    isOpen && onClose();
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };

    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();

      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      previousActiveElement.current?.focus();
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="bg-primary fixed top-0 right-0 bottom-0 left-0 z-[1000] flex h-full w-full items-center justify-center p-[10px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[700px] rounded-2xl bg-white p-[20px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-[20px] flex items-center justify-between">
          <p id="modal-title" className="text-xl font-normal xl:text-2xl">
            {title}
          </p>
          <button
            className="h-[20px] w-[20px] cursor-pointer"
            aria-label="Close modal"
            onClick={onClose}
          >
            <Close />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
