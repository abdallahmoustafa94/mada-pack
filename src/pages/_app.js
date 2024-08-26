import React from "react";
import Script from "next/script";
import Head from "next/head";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import "../styles/preloader.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "15px", // Increased padding for larger buttons
    backgroundColor: "#25d366",
    color: "white",
    border: "none",
    borderRadius: "50%", // Rounded shape
    cursor: "pointer",
    outline: "none",
    fontSize: "28px", // Increased font size for larger buttons
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
    zIndex: "9999",
  };
  return (
    <>
      <Head>
        <title>مادا - رواد صناعة البلاستيك في مصر</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <div>
        {/* Your page content */}

        {/* Floating WhatsApp button */}
        <a
          className="whatsapp"
          style={{
            ...buttonStyle,
            backgroundColor: "#25d366",
            animation: "pulse 2s infinite",
          }}
          href="https://wa.me/201114447801"
        >
          <FaWhatsapp className="whatsapp" style={{ fontSize: "22px" }} />
        </a>

        <a
          className="call"
          style={{
            ...buttonStyle,
            backgroundColor: "#007bff",
            bottom: "100px",
            animation: "pulse 2s infinite",
          }}
          href="tel:00201114447801"
        >
          <FiPhoneCall className="call" style={{ fontSize: "22px" }} />
        </a>
      </div>
      <Component {...pageProps} />

      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/pace.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/bootstrap.bundle.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/mixitup.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/wow.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/lib/html5shiv.min.js"
      ></Script>
      <Script strategy="lazyOnload" src="/assets/js/main.js"></Script>
    </>
  );
}

export default MyApp;
