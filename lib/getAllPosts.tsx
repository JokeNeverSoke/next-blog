import { MDXProvider } from "@mdx-js/react";
import { renderToStaticMarkup } from "react-dom/server";
import { components } from "./components";

function importAll(r: ReturnType<typeof require.context>) {
  return r.keys().map((fileName) => {
    const module = r(fileName);
    return {
      link:
        "/posts" +
        fileName
          .substr(1)
          .replace(/\/index\.mdx$/, "")
          .replace(/\.mdx$/, ""),
      module,
      raw: renderToStaticMarkup(
        // @ts-ignore
        <MDXProvider components={{ NextImage: components.NextImage }}>
          <module.default />
        </MDXProvider>
      ),
    };
  });
}

export const posts = importAll(
  require.context("../pages/posts/", true, /\.mdx$/)
);
