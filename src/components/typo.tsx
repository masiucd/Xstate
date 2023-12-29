import {PropsWithChildren} from "react";

import {cn} from "@/lib/styles";

type Props = {
  className?: string;
};

export function H1({children, className}: PropsWithChildren<Props>) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({children, className}: PropsWithChildren<Props>) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function H3({children, className}: PropsWithChildren<Props>) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

export function Paragraph({children, className}: PropsWithChildren<Props>) {
  return <p className={cn("leading-7 ", className)}>{children}</p>;
}
