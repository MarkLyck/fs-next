import App, { Container } from 'next/app'
import React from 'react'
import withApolloClient from 'lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import Layout from 'lib/layout'
import 'common/utils/fontAwesomeLibrary'

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <Layout>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} apolloClient={apolloClient} />
          </ApolloProvider>
        </Layout>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
