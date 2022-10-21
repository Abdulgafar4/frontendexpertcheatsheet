import { Center, Code, Text } from "@mantine/core";
import React from "react";
import { CSS, HTML, JavaScript, ReactJS } from "./PreCode";
import { useMediaQuery } from "@mantine/hooks";

function Home() {
   const textScreen = useMediaQuery("(min-width: 600px)");
   const largeScreen = useMediaQuery("(max-width: 1025px)")

  return (
    <div>
      <section className="hero">
        <div>
          <Text size={textScreen ? "40px" : "20px"} weight={700}>
            Refresh what you've Learn{" "}
          </Text>
          <Text align="center" color="dimmed" weight={400}>
            With Clever CheatSheet
          </Text>
        </div>
      </section>
      <section className={largeScreen ? "html" : "htmlFlex"}>
        <div className="htmlfirstdiv">
          <Text weight={700} align="center">
            HTML CheatSheet
          </Text>
          <Text align="center" py="lg">
            The language for building web pages
          </Text>
          <Center>
            <Text
              variant="link"
              component="a"
              href="/html"
              color="dimmed"
              className="link"
            >
              HTML
            </Text>
          </Center>
        </div>
        <div className="htmlseconddiv">
          <Code block>{HTML}</Code>
        </div>
      </section>
      <section className={largeScreen ? "css" : "cssFlex"}>
        <div className="cssfirstdiv">
          <Text weight={700} align="center">
            CSS CheatSheet
          </Text>
          <Text align="center" py="lg">
            The language for styling web pages
          </Text>
          <Center>
            <Text
              variant="link"
              component="a"
              href="/css"
              color="dimmed"
              className="link"
            >
              CSS
            </Text>
          </Center>
        </div>
        <div className="cssseconddiv">
          <Code block>{CSS}</Code>
        </div>
      </section>
      <section className={largeScreen ? "javascript" : "javascriptFlex"}>
        <div className="javascriptfirstdiv">
          <Text weight={700} align="center">
            Javascript CheatSheet
          </Text>
          <Text align="center" py="lg">
            The language for programming web pages
          </Text>
          <Center>
            <Text
              variant="link"
              component="a"
              href="/javascript"
              color="dimmed"
              className="link"
            >
              JavaScript
            </Text>
          </Center>
        </div>
        <div className="javascriptseconddiv">
          <Code block>{JavaScript}</Code>
        </div>
      </section>
      <section className={largeScreen ? "react" : "reactFlex"}>
        <div className="reactfirstdiv">
          <Text weight={700} align="center">
            React CheatSheet
          </Text>
          <Text align="center" py="lg" >
            A library for JavaScript for building responsive UI
          </Text>
          <Center>
            <Text
              variant="link"
              component="a"
              href="/react"
              color="dimmed"
              className="link"
            >
              ReactJS
            </Text>
          </Center>
        </div>
        <div className="">
          <Code block>{ReactJS}</Code>
        </div>
      </section>
    </div>
  );
}

export default Home;
