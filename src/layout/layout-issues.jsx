import { useContext } from "react";
import { Layout } from "antd";
import MSider from "../landing/sidebar";
import { UserAuthContext } from "../states/userAuth";

const { Header, Content } = Layout;

export default function MLayoutIssues({ children }) {

    return(
        <Layout style={{ minHeight: '100vh' }}>
            <Header>
            </Header>
            <Layout>
                <MSider />
                <Content>
                        { children }
                </Content>
            </Layout>
        </Layout>
    )
}
