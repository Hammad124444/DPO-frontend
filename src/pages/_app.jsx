// Original Ant Style import
import 'antd/dist/antd.min.css';
// Custom Style Import
import '../../styles/globals.css';
import '../../styles/custom.css';
import '../../styles/layout.css';
import '../../styles/spacing.scss';
import '../../styles/font.scss';
import '../../styles/colors.scss';
// Root layout on the app
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

