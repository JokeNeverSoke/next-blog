import {
  Container,
  UnorderedList,
  ListItem,
  Heading,
  Box,
  Button,
  useColorModeValue,
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
  const textColor = useColorModeValue("black", "white");

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
        color: textColor,

        // drawOutOfBound: true,
        rotateRatio: 0.3,
        shape: "diamond",
        click: (item) => {
          console.log(item);
          router.push(`/tags/${item[0].toLowerCase()}`);
        },
      });
    })();
  }, [router, textColor]);

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
          _dark={{
            background: "var(--chakra-gray-800) !important",
          }}
        />
      </Container>
    </BasicLayout>
  );
};

export default TagListPage;
