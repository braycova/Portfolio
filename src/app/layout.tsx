import type { Metadata } from "next";
import { MantineProvider, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';
import "./globals.css";
import { description } from "@/data/about";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Brayan Covarrubias",
  description: description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      {/*<head>*/}
      {/*  <ColorSchemeScript />*/}
      {/*</head>*/}
      <body className={`antialiased`}>
        <MantineProvider defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
