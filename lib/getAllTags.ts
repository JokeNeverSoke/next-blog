import { posts } from "./getAllPosts";

export const getAllTags = () => {
  const tags: { [tag: string]: number } = {};
  posts.forEach((p) => {
    p.module.meta.tags?.forEach((tag: string) => {
      if (!(tag in tags)) {
        tags[tag] = 1;
      } else {
        tags[tag]++;
      }
    });
  });
  return { ...tags };
};

export const tagCounts = getAllTags();
