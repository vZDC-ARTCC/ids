import React from "react";
import type {Metadata} from 'next'
import './globals.css'
import ThemeRegistry from "@/theme/ThemeRegistry";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer/Footer";

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
                <>
                    <Navbar />
                    {children}
                    <Footer />
                </>
            </body>
        </ThemeRegistry>
    </html>
  )
}
