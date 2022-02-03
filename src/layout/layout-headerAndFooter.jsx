import { Layout } from "antd";
import MNavbar from "./navbar";

const { Content } = Layout;

export default function MLayoutWithHeaderAndFooter({ children }) {
    return(
        <Layout>
            <MNavbar />
            <Content className="bg-white">
                { children }
            </Content>
        </Layout>
    )
}