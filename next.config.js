const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  latex: true
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/meethackos.github.io",
  images: {
    unoptimized: true,
  },
	// any configs you need
};

module.exports = withNextra(nextConfig);
