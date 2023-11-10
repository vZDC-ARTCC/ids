import React from "react";
import type {Metadata} from 'next'
import './globals.css'
import ThemeRegistry from "@/theme/ThemeRegistry";

// noinspection JSUnusedGlobalSymbols
export const metadata: Metadata = {
  title: 'vZDC IDS',
  description: 'Information Display System for the Washington Virtual ARTCC.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <ThemeRegistry>
      <body>
      {children}
      </body>
    </ThemeRegistry>
    </html>
  )
}
