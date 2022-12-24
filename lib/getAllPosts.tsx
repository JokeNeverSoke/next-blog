import { MDXProvider } from "@mdx-js/react";
import { renderToStaticMarkup } from "react-dom/server";
import { components } from "./components";

function importAll(r: ReturnType<typeof require.context>) {
  return r
    .keys()
    .map((fileName) => {
      const _module = r(fileName);
      return {
        link:
          "/posts" +
          fileName
            .substr(1)
            .replace(/\/index\.mdx$/, "")
            .replace(/\.mdx$/, ""),
        module: _module,
        raw: renderToStaticMarkup(
          // @ts-ignore
          <MDXProvider components={{ NextImage: components.NextImage }}>
            <_module.default />
          </MDXProvider>
        ),
      };
    })
    .sort(
      (a, b) => b.module.meta.date.getTime() - a.module.meta.date.getTime()
    );
}

export const posts = importAll(
  require.context("../pages/posts/", true, /\.mdx$/)
);
