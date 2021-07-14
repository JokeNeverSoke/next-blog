import { Container, UnorderedList, ListItem } from "@chakra-ui/react";
import { BasicLayout } from "../../components/basicLayout";
import { SiteLink } from "../../components/siteLink";
import { getAllTags } from "../../lib/getAllTags";

const tags = getAllTags();

const TagListPage = () => {
  return (
    <BasicLayout title="Tags">
      <Container>
        <UnorderedList>
          {tags.map((t) => {
            return (
              <ListItem key={t}>
                <SiteLink to={`/tags/${t.toLowerCase()}`}>{t}</SiteLink>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Container>
    </BasicLayout>
  );
};

export default TagListPage;
