import React, { useState, useContext } from 'react';
import { Layout } from "antd";
import MSider from "../landing/sidebar";

const { Header, Content } = Layout;

export default function MLayoutIssues({ children }) {
    return(
        <Layout>
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
