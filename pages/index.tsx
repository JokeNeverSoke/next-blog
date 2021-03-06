import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
  UnorderedList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useViewportScroll, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { BasicLayout } from "../components/basicLayout";
import { Navbar } from "../components/navbar";
import { SiteLink } from "../components/siteLink";
import { posts } from "../lib/getAllPosts";

const SpacedTitle: React.FC<{ title: string; link: string }> = (props) => {
  const { title, children } = props;
  return (
    <Flex align="baseline" wrap="wrap" mb={1}>
      <Heading as="h1" fontFamily="Arial, serif">
        <SiteLink to={props.link}>{title}</SiteLink>
      </Heading>
      <Spacer minW={6} />
      <Text color="gray.600" _dark={{ color: "gray.200" }} fontStyle="italic">
        {children}
      </Text>
    </Flex>
  );
};

const PostList = ({
  p,
  title,
  des,
  link,
}: {
  p: typeof posts;
  title: string;
  des: string;
  link: string;
}) => {
  return (
    <Box p={[8, 12]}>
      <SpacedTitle title={title} link={link}>
        {des}
      </SpacedTitle>
      <UnorderedList listStyleType={`"> "`}>
        {p.map((post, i) => {
          return (
            <ListItem key={post.link}>
              <SiteLink to={post.link} fontSize="lg">
                {post.module.meta.title}
              </SiteLink>
              {!i && (
                <Text
                  as="div"
                  fontSize="xs"
                  noOfLines={3}
                  sx={{
                    "& *": {
                      fontSize: "var(--chakra-fontSizes-xs) !important",
                    },
                  }}
                >
                  {post.module.meta.description || (
                    <post.module.default as="div" isPreview />
                  )}
                </Text>
              )}
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
};

const RecentPosts = () => {
  const blogPosts = posts
    .filter((post) => post.module.meta.tags.includes("Blog"))
    .sort(
      (pa, pb) => pb.module.meta.date.getTime() - pa.module.meta.date.getTime()
    )
    .slice(0, 3);
  const notePosts = posts
    .filter((post) => post.module.meta.tags.includes("Note"))
    .sort(
      (pa, pb) => pb.module.meta.date.getTime() - pa.module.meta.date.getTime()
    )
    .slice(0, 3);

  return (
    <SimpleGrid columns={[1, null, 2]} spacing={[4, null, 8]} px={[6, 12]}>
      <PostList
        p={blogPosts}
        link="/tags/blog"
        title="Blogs"
        des="Longer nonsense"
      />
      <PostList
        p={notePosts}
        link="/tags/note"
        title="Notes"
        des="Shorter nonsense"
      />
    </SimpleGrid>
  );
};

const Hero = () => {
  const title = useBreakpointValue(
    {
      base: (
        <>
          Joke
          <br />
          Never
          <br />
          Soke
        </>
      ),
      md: "JokeNeverSoke",
    },
    "base"
  );

  const [status, setStatus] = useState<"scrolled" | "initial">("initial");
  useEffect(() => {
    function onScroll() {
      if (status === "initial" && window.scrollY > 5) {
        setStatus("scrolled");
      } else if (status === "scrolled" && window.scrollY <= 5) {
        setStatus("initial");
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [status]);
  const variants: Variants = {
    initial: {
      y: [-16, -54],
      opacity: 1,
      transition: {
        y: { repeat: Infinity, repeatType: "mirror" },
      },
    },
    scrolled: {
      y: 24,
      opacity: 0,
    },
  };
  return (
    <Center w="full" h="100vh" position="relative" mb={2}>
      <Heading size="3xl" fontFamily="mono">
        {title}
      </Heading>
      <motion.div
        style={{
          position: "absolute",
          margin: "0 auto",
          bottom: "1rem",
        }}
        animate={status}
        variants={variants}
        transition={{
          duration: 0.7,
        }}
      >
        <Text color="gray.300" fontSize="4xl" fontWeight="extrabold">
          \/
        </Text>
      </motion.div>
    </Center>
  );
};

const Home = () => {
  return (
    <BasicLayout noNav title="Home">
      <Hero />
      <Navbar />
      <RecentPosts />
    </BasicLayout>
  );
};
export default Home;
