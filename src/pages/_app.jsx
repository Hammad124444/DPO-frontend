import '../../styles/globals.css';
import '../../styles/layout.css';
import 'antd/dist/antd.min.css';
import MLayOutRoot from '../layout/layout-root';


export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <MLayOutRoot>
      {
        getLayout(<Component {...pageProps} />)
      }
    </MLayOutRoot>
  )
}

