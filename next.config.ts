import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // config
  devIndicators: false,
  // i18n: {
  //   locales: ["en-US", "id-ID"],
  //   defaultLocale: "id",
  // }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
