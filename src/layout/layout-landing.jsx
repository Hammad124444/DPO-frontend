import { Layout } from 'antd';
const { Content } = Layout;
import  MNavbar  from './navbar';
import  MSider  from '../landing/sidebar';

export default function MLayoutLanding({children}) {
    return (
            <Layout style={{ minHeight: '100vh' }}>
                <MNavbar />
                <Layout>
                    <MSider />
                    <Layout>
                        <Content>
                            { children }
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
    )
}
