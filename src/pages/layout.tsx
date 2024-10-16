import Head from 'next/head';
import { Layout as LayoutTemplate } from "@templates";
import { ReactNode, memo } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = memo(({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Template</title>
        <meta name="description" content="Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutTemplate>
        {children}
      </LayoutTemplate>
    </>
  );
});

export default Layout;
