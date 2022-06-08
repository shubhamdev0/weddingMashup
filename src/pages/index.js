import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Home from 'sections/home';
import About from 'sections/about';
import Services from 'sections/services';
import ContactUs from 'sections/contact';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Wedding Mashup"
          description="Wedding Mashup is your one stop solution for all your wedding needs."
        />
        <Home />
        <About />
        <Services />
        <ContactUs/>
      </Layout>
    </ThemeProvider>
  );
}
