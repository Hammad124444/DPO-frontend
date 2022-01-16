import { Layout } from "antd";
import MSider from "../landing/sidebar";
import { RoleContext } from '../states/rolecontext';

const { Header, Content } = Layout;

export default function MLayoutIssues({ children }) {
    return(
        <Layout>
            <Header>
            </Header>
            <Layout>
                <MSider />
                <Content>
                    <RoleContext.Provider>
                        { children }
                    </RoleContext.Provider>
                </Content>
            </Layout>
        </Layout>
    )
}
