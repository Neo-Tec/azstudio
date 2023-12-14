import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "../styles/styles.scss";

export const metadata: Metadata = {
  title: "AZCreation",
  description: "This is the official page of AZCreation Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <link href="css/glightbox.min.css" rel="stylesheet" />

        <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="css/animate.css" />

        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />

        <link rel="stylesheet" href="css/aos.css" />

        <link rel="stylesheet" href="css/ionicons.min.css" />

        <link rel="stylesheet" href="css/flaticon.css" />
        <link rel="stylesheet" href="css/icomoon.css" />
        {/* <link rel="stylesheet" href="css/style.css" /> */}

        <Script src="./js/jquery.min.js"></Script>
        <Script src="./js/jquery-migrate-3.0.1.min.js"></Script>
        <Script src="./js/popper.min.js"></Script>
        <Script src="./js/bootstrap.min.js"></Script>
        <Script src="./js/jquery.easing.1.3.js"></Script>
        <Script src="./js/jquery.waypoints.min.js"></Script>
        <Script src="./js/jquery.stellar.min.js"></Script>
        <Script src="./js/owl.carousel.min.js"></Script>
        <Script src="./js/jquery.magnific-popup.min.js"></Script>
        <Script src="./js/aos.js"></Script>
        <Script src="./js/jquery.animateNumber.min.js"></Script>
        <Script src="./js/scrollax.min.js"></Script>
        <Script src="./js/glightbox.min.js"></Script>

        <Script src="js/main.js"></Script>
      </head>
      <body
        data-spy="scroll"
        data-target=".site-navbar-target"
        data-offset="300"
      >
        {children}
      </body>
    </html>
  );
}
