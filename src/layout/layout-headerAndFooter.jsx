import { Layout } from "antd";
import MNavbar from "./navbar";
import MFooter from "./footer";

const { Content } = Layout;

export default function MLayoutWithHeaderAndFooter({ children }) {
    return(
        <Layout>
            <MNavbar />
            <Content>
                { children }
            </Content>
            <MFooter />
        </Layout>
    )
}