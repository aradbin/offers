import {
  Poppins as FontPoppins,
} from "next/font/google";

export const fontPoppins = FontPoppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});
