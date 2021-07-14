const { withSentryConfig } = require("@sentry/nextjs");
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [
      require("remark-heading-id"),
      require("remark-join-cjk-lines"),
    ],
  },
});
const withImages = require("next-images");
const path = require("path");

module.exports = withMDX(
  withSentryConfig(
    {
      reactStrictMode: true,
      pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
      async rewrites() {
        return [{ source: "/atom.xml", destination: "/api/atom.xml" }];
      },
      webpack(config, options) {
        config.module.rules
          .find((rule) => String(rule.test) === String(/\.mdx$/))
          .use.push({ loader: path.resolve(__dirname, "mdxLoader.js") });
        return config;
      },
      experimental: {
        cpus: 1, // <https://github.com/vercel/next.js/issues/27000#issuecomment-877069389>
      },
    },
    {
      silent: true,
    }
  )
);
