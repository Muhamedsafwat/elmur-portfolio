/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  experimental: {
    reactCompiler: false,
  },

  images: {
    domains: ["localhost"],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
