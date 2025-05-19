import { Playfair, Rubik } from "next/font/google";

export const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-rubik",
    style: ["normal"]
})
export const playfair = Playfair({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
    style: ["normal"]
})
