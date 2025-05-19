"use client";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/all.min.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/style.css";
import { useEffect } from "react";
import { useWow } from '@/customHooks/useWow';
import { rubik, playfair } from "@/fonts/font";
import SmoothPageScroll from "@/utils/SmoothPageScroll";
import ScrollCircleProgress from "@/utils/ScrollCircleProgess";


export default function RootLayout({ children }) {

  useWow()
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/img/fav-icon.svg"
          type="image/x-icon"
          sizes="16x16"
        />
        <meta name="description" content="Your description here" />
        <meta name="keywords" content="next.js, SEO, meta tags" />
        <title>Best Photo Retouching and Editing Company | Perfect Retouching</title>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      </head>
      <body id="body" className={`tt-magic-cursor ${rubik.variable} ${playfair.variable} `}>

        <SmoothPageScroll />
        <ScrollCircleProgress />
        {children}
      </body>
    </html>
  );
}
