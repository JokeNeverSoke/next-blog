import {
  Container,
  Heading,
  UnorderedList,
  ListItem,
  Image,
  Text,
} from "@chakra-ui/react";
import { BasicLayout } from "../components/basicLayout";
import { SiteLink } from "../components/siteLink";

const Friend = ({
  link,
  name,
  description,
  avatar,
}: {
  link: string;
  name: string;
  description: string;
  avatar: string;
}) => {
  return (
    <ListItem key={link}>
      <SiteLink to={link}>
        <Image boxSize="128px" alt={name} src={avatar} />
        <Heading as="h3">{name}</Heading>
        <Text>{description}</Text>
      </SiteLink>
    </ListItem>
  );
};

const FriendsPage = () => {
  return (
    <BasicLayout title="Friends">
      <Container>
        <Heading as="h1">Friends</Heading>
        <UnorderedList>
          <Friend
            name="Ahei"
            link="https://ahei.me"
            avatar="https://ahei.me/images/avatar.jpg"
            description="出生入死的仙贝"
          />
        </UnorderedList>
      </Container>
    </BasicLayout>
  );
};

export default FriendsPage;
