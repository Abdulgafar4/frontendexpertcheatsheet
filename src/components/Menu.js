import React from "react";
import { Menu, Center, Group, createStyles, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";


const useStyles = createStyles((theme) => ({

  link: {
    display: "block",
    lineHeight: 1,
    padding: "10px 15px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

const links = [
  {
    label: "Menu",
    links: [
      { link: "/html", label: "HTML" },
      { link: "/css", label: "CSS" },
      { link: "/javascript", label: "JavaScript" },
      { link: "/react", label: "ReactJs" },
    ],
  },
];

export function MenuItem() {
  const { classes } = useStyles();

  const items = links.map((l) => {
    const menuItems = l?.links?.map((item) => (
      <Menu.Item key={item.link} className={classes.box}>
        <Text variant="link" color="dimmed" className="link" component="a" href={item.link}>
          {item.label}
        </Text>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={l.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <div
              className={classes.link}
              target="_blank"
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{l.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </div>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Text
        key={l.label}
        className={classes.link}
      >
        {l.label}
      </Text>
    );
  });

  return (
    <Group spacing={5} className={classes.links}>
      {items}
    </Group>
  );
}
