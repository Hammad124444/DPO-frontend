import { Layout } from 'antd';
import Image from "next/image";
import Link from "next/link";
//components
import MFooter from "./footer";
//style
import styles from "../../styles/local/navbar.module.scss";

const { Header, Content } = Layout;

export default function MSimpleHeaderLayout({ children }) {
    return(
        <Layout style={{ minHeight: '100vh' }}>
            <Header className='p-sticky top-0 no-padding z-10 bg-white'>
                <Link href={"/"}>
                    <a className={'d-flex align-items-center ' + styles.logoArea} >
                        <Image alt="logo"
                               src="/assets/icons/directprivateoffers-logo-bd.png"
                               width={300} height={44}
                        />
                    </a>
                </Link>
            </Header>
            <Content className='container-sm align-items-center justify-content-center pt-5'>
                    { children }
            </Content>
            <MFooter />
        </Layout>
    )
}