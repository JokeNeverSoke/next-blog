import {
  Container,
  Heading,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { BasicLayout } from "../components/basicLayout";
import { SiteLink } from "../components/siteLink";

const MediaLink = ({ link, name }: { link: string; name: string }) => (
  <ListItem>
    <SiteLink to={link}>{name}</SiteLink>
  </ListItem>
);

const AboutPage = () => {
  return (
    <BasicLayout title="About">
      <Container>
        <Heading as="h1" pb={7}>
          About
        </Heading>
        <Text>
          <p>There&apos;s not much here yet:(</p>
          <p>
            You can try to ask for more with any of the links below, but no
            promises.
          </p>
          All links from me:
          <UnorderedList>
            <MediaLink name="Email" link="mailto:zengjoseph@hotmail.com" />
            <MediaLink name="Twitter" link="https://twitter.com/@NeverSoke" />
            <MediaLink name="Dev" link="https://dev.to/jokeneversoke" />
            <MediaLink
              name="Instagram"
              link="https://instagram.com/jokeneversoke"
            />
            <MediaLink
              name="Bilibili"
              link="https://space.bilibili.com/152156332"
            />
          </UnorderedList>
        </Text>
      </Container>
    </BasicLayout>
  );
};

export default AboutPage;
