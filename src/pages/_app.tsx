import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { CartDrawer } from "~/components/drawerCart";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/header";
import { Main } from "~/components/main";
import { CartDrawerContextProvider } from "~/contexts/CartDrawerContext";
import { store } from "~/redux/store";
import { GlobalStyle } from "~/styles/global";
import { theme } from "~/styles/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <title>MKS Frontend Challenge</title>
    </Head>

    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <ReduxProvider store={store}>
        <CartDrawerContextProvider>
          <Header />
          <CartDrawer />
        </CartDrawerContextProvider>

        <Main>
          <Component {...pageProps} />
        </Main>
      </ReduxProvider>

      <Footer />
    </ThemeProvider>
  </Fragment>
);

export default App;
