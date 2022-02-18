import { Layout } from 'antd';
const { Content } = Layout;
import  MNavbar  from './navbar';
import MFooter from "./footer";

export default function MLayoutLanding({children}) {
    return (
            <Layout style={{ minHeight: '100vh' }}>
                <MNavbar />
                <Layout>
                    {/*<MSider />*/}
                    <Layout>
                        <Content className="bg-white">
                            { children }
                        </Content>
                    </Layout>
                </Layout>
                <MFooter />
            </Layout>
    )
}
