import { withSentry } from "@sentry/nextjs";
import { Feed } from "feed";
import { posts } from "../../lib/getAllPosts";

const author = {
  name: "Joseph Zeng",
  email: "jokeneversoke@gmail.com",
  link: "https://jokens.me",
};

const feed = new Feed({
  title: "JokeNS's Blog Feed",
  description: "My personal blog feed",
  id: "me.jokens.atom",
  link: "https://jokens.me",
  copyright: "CC BY 4.0",
  author,
  feedLinks: {
    atom: "https://jokens.me/atom.xml",
  },
});

posts.forEach((post) => {
  const { title, date } = post.module.meta;
  const link = `https://jokens.me${post.link}`;
  const content = post.raw.replace(`src="./`, `src="${link}/`);
  feed.addItem({
    title,
    id: post.link,
    link,
    date: date,
    content,
  });
});

const atom = feed.atom1();

export default withSentry((req, res) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/atom+xml; charset=utf-8")
    .send(atom);
});
