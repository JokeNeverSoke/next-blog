import {
  ListItem,
  Box,
  UnorderedList,
  Container,
  Heading,
} from "@chakra-ui/react";
import { BasicLayout } from "../components/basicLayout";
import { SiteLink } from "../components/siteLink";

const Project = ({
  name,
  details,
  link,
}: {
  name: string;
  details: string;
  link: string;
}) => {
  return (
    <ListItem>
      <Box>
        <SiteLink to={link}>{name}</SiteLink>
      </Box>
      <Box>{details}</Box>
    </ListItem>
  );
};

const ProjectsPage = () => {
  return (
    <BasicLayout title="Projects">
      <Container>
        <Heading as="h1" pb={7}>
          Projects
        </Heading>
        <UnorderedList>
          <Project
            name="电子花园"
            details="My personal experimental digital garden"
            link="https://garden.jokens.me"
          />
          <Project
            name="今天你学习了吗"
            details="Peer Pressure 来源"
            link="https://study.jokens.me"
          />
          <Project
            name="营销号视频生成器"
            details="a.k.a. 生草器"
            link="https://github.com/JokeNeverSoke/BVG"
          />
          <Project
            name="打 Call 神器"
            details="用 Banner 来为爱豆打 Call 吧！（未完成）"
            link="https://call.jokens.me"
          />
          <Project
            name="又一个 ls 工具"
            details="项目文件夹的简介获取"
            link="https://github.com/jokeneversoke/poets"
          />
          <Project
            name="Leitcard"
            details="背单词"
            link="https://leitcard.jokens.me"
          />
        </UnorderedList>
      </Container>
    </BasicLayout>
  );
};

export default ProjectsPage;
