import { Geist_Mono, Roboto } from "next/font/google";

enum FontVariables {
	GeistMono = "--font-geist-mono",
	Roboto = "--font-roboto",
}
const geistMono = Geist_Mono({
  variable: FontVariables.GeistMono,
  subsets: ["latin"],
  preload: true,
});

const roboto = Roboto({
  variable: FontVariables.Roboto,
  weight: ["400"],
  subsets: ["latin"],
});

const FONTS_INJECT_STRING = `${geistMono.variable} ${roboto.variable} antialiased`;

export {FONTS_INJECT_STRING, FontVariables}
