import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { EmptyLayout } from '../components/ui/layout';
import { Web3Provider } from '../components/provider';

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Web3Provider>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </Web3Provider>
  )
}

export default MyApp
