"use client";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import type { ReactNode } from "react";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
        <SidebarProvider>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <SidebarInset className="flex flex-col flex-1 overflow-hidden">
              <AppHeader />
              <main className="flex-1 overflow-auto hide-scrollbar">
                {children}
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}