import { AppShell, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import './App.scss';
import HeaderWithSearch from "./components/Header";
import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HtmlPage from './pages/Html/HtmlPage';
import JavascriptPage from './pages/Javascript/JavascriptPage';
import CssPage from './pages/Css/CssPage';
import ReactPage from './pages/React/ReactPage';


function App() {

    const [colorScheme, setColorScheme] = useState("dark");
    const toggleColorScheme = () =>
      setColorScheme(colorScheme === "light" ? "dark" : "light");



  const router = createBrowserRouter([

        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/html",
          element: <HtmlPage />,
        },
        {
          path: "/css",
          element: <CssPage />,
        },
 
    {
      path: "/javascript",
      element: <JavascriptPage />,
    },
    {
      path: "/react",
      element: <ReactPage />,
    },
  ]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{colorScheme,}}
      >
        <AppShell
          className="App"
          padding="md"
          // navbar={<Navbar height={500} p="xs" />}
          header={<HeaderWithSearch height={60} p="xs" />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <RouterProvider router={router} />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
