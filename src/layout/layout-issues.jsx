import { Layout } from "antd";
import MSider from "../landing/sidebar";

const { Header, Content } = Layout;

export default function MLayoutIssues({ children }) {

    return(
        <Layout style={{ minHeight: '100vh' }}>
            <Header>
            </Header>
            <Layout>
                {/*<MSider />*/}
                <Content className="bg-white">
                        { children }
                </Content>
            </Layout>
        </Layout>
    )
}
