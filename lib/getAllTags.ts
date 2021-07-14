import { posts } from "./getAllPosts";

export const getAllTags = () => {
  const tags: string[] = [];
  posts.forEach((p) => {
    p.module.meta.tags?.forEach((tag: string) => {
      if (!tags.includes(tag)) tags.push(tag);
    });
  });
  return tags;
};
