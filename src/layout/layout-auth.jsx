import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export default function MAuthLayout({ children }) {
    return(
        <Layout style={{ minHeight: '100vh' }}>
            <Header>
                <div className="logo" />
            </Header>
            <Content className='container-sm align-items-center justify-content-center pt-5'>
                    { children }
            </Content>
            <Footer>
                <h1>Footer of DPO Authentication</h1>
            </Footer>
        </Layout>
    )
}