import { Inter } from 'next/font/google';
import type { PropsWithChildren } from "react";

const inter = Inter();

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return <main className={`${inter.className} flex flex-col items-center gap-2`}>{children}</main>;
};

export default Layout;
