import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export default function MAuthLayout({ children }) {
    return(
        <Layout>
            <Header>
                <div className="logo" />
            </Header>
            <Content>
                { children }
            </Content>
            <Footer>
                <h1>Footer of DPO Authentication</h1>
            </Footer>
        </Layout>
    )
}