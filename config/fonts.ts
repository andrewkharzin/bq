import { Fira_Code as FontMono, Inter as FontSans, Roboto_Condensed } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontRoboto = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-roboto",
})
