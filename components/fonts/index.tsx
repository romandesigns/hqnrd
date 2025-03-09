import localFont from "next/font/local";
// export const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-poppins-sans",
// });

export const poppins = localFont({
  src: [
    { path: "./local/Poppins-Black.woff2", weight: "900", style: "normal" },
    { path: "./local/Poppins-BlackItalic.woff2", weight: "900", style: "italic" },
    { path: "./local/Poppins-Bold.woff2", weight: "700", style: "normal" },
    { path: "./local/Poppins-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "./local/Poppins-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./local/Poppins-ExtraBoldItalic.woff2", weight: "800", style: "italic" },
    { path: "./local/Poppins-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./local/Poppins-ExtraLightItalic.woff2", weight: "200", style: "italic" },
    { path: "./local/Poppins-Italic.woff2", weight: "400", style: "italic" },
    { path: "./local/Poppins-Light.woff2", weight: "300", style: "normal" },
    { path: "./local/Poppins-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "./local/Poppins-Medium.woff2", weight: "500", style: "normal" },
    { path: "./local/Poppins-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "./local/Poppins-Regular.woff2", weight: "400", style: "normal" },
    { path: "./local/Poppins-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./local/Poppins-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "./local/Poppins-Thin.woff2", weight: "100", style: "normal" },
    { path: "./local/Poppins-ThinItalic.woff2", weight: "100", style: "italic" }
  ],
  variable: "--font-poppins",
  display: "swap"
});
