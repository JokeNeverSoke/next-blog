import {
  Container,
  UnorderedList,
  ListItem,
  Heading,
  Box,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef } from "react";
import { BasicLayout } from "../../components/basicLayout";
import { SiteLink } from "../../components/siteLink";
import { tagCounts } from "../../lib/getAllTags";

const tags = Object.keys(tagCounts);

const TagListPage = () => {
  // const ref = useRef(null);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      console.log(tagCounts);
      const { default: WordCloud } = await import("wordcloud");
      WordCloud(document.getElementById("tags")!, {
        list: tags
          .map(
            (t) =>
              [t, tagCounts[t] * tagCounts[t] * 1.6 + 16] as [string, number]
          )
          .sort((a, b) => b[1] - a[1]),
        fontFamily: "Noto Sans SC, -system-ui, sans-serif",
        color: "black",
        // drawOutOfBound: true,
        rotateRatio: 0.3,
        shape: "diamond",
        click: (item) => {
          console.log(item);
          router.push(`/tags/${item[0].toLowerCase()}`);
        },
      });
    })();
  }, [router]);

  return (
    <BasicLayout title="Tags">
      <Container>
        <Heading as="h1" mb={2}>
          Tags
        </Heading>
        <Box
          w="full"
          h="40vh"
          id="tags"
          sx={{
            "& span": {
              cursor: "pointer",
              "&:hover": { textDecoration: "underline" },
            },
          }}
        />
      </Container>
    </BasicLayout>
  );
};

export default TagListPage;
