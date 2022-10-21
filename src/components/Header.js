import React from 'react'
import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Text,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { MenuItem } from './Menu';
import { SwitchToggle } from "./SwitchToggle";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  menu: {

    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
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
      "link": "/html",
      "label": "HTML"
    },
    {
      "link": "/css",
      "label": "CSS"
    },
    {
      "link": "/javascript",
      "label": "Javascript"
    },
    {
      "link": "/react",
      "label": "ReactJs"
    }
  ]

export default function HeaderWithSearch() {
  const { classes } = useStyles();

  const items = links.map((link) => (
    <Text
      key={link.label}
      href={link.link}
      className={classes.link}
      component="a"
    >
      {link.label}
    </Text>
  ));


  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
          <Text variant="link" component="a" href="/" color='dimmed' className='link'>
            Clever CheatSheet
          </Text>
        </Group>
        <Group>
          <Group ml={50} spacing={5} className={classes.links}>
            {items}
          </Group>
          <Group className={classes.menu}>
            <MenuItem />
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size={16} stroke={1.5} />}
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
          />
          <SwitchToggle />
        </Group>
      </div>
    </Header>
  );
}