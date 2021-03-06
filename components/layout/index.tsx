import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Container } from "./style"
import Header from "../header";
type Props = {
  children?: ReactNode
  title?: string,
  header?: string
}
const Layout = ({ children, title = 'This is the default title'}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header  />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout

