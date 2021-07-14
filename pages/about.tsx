import { Container, Heading, Text } from "@chakra-ui/react";
import { BasicLayout } from "../components/basicLayout";

const AboutPage = () => {
  return (
    <BasicLayout title="About">
      <Container>
        <Heading as="h1">About</Heading>
        <Text>There&apos;s nothing here yet</Text>
      </Container>
    </BasicLayout>
  );
};

export default AboutPage;
