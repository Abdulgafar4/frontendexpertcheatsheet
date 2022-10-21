import React from "react";
import {
  Card,
  Text,
  Button,
  Group,
  Container,
  Grid,
  Code,
  Badge,
} from "@mantine/core";
import { data } from "./CssData";

function HtmlPage() {
  return (
    <Container size="xl" className="htmlpagewrapper">
      <Grid>
        {data.map(function (data) {
          return (
            <Grid.Col sm={4} md={3} key={data.id}>
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Group mt="md" mb="xs">
                  <Badge variant="outline">{data.tittle}</Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  {data.desc}
                </Text>

                <Group>
                  <Text weight={500}>Example</Text>

                  <Code block>{data.example}</Code>
                </Group>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  component="a"
                  href={data.link}
                  target="_blank"
                >
                  Learn More
                </Button>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}

export default HtmlPage;
