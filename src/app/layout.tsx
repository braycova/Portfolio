import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Brayan Covarrubias",
  description: "Brayan Covarrubias, an up-and-coming software developer, based in Iowa, USA :)",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`antialiased`}>
        <MantineProvider defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
