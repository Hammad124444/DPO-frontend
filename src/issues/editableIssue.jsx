import { Tabs } from 'antd';
import EPeriod from "./edit/timesEdit";
import EFundType from "./edit/fundTypeEdit";
import ECreditLimit from "./edit/limitEdit";
import EStatus from "./edit/statusEdit";
import EInvestors from "./edit/investorsEdit";
import ETier from "./edit/tierEdit";

const { TabPane } = Tabs;

export default function MEditIssueDetailById() {
    return(
        <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            size="large"
            style={{ minHeight: '100vh' }}
        >
            <TabPane tab="Period Times" key="1">
                <EPeriod />
            </TabPane>
            <TabPane tab="Credit Limit" key="2">
                <ECreditLimit />
            </TabPane>
            <TabPane tab="Status" key="3">
                <EStatus />
            </TabPane>
            <TabPane tab="Tier" key="4">
                <ETier />
            </TabPane>
            <TabPane tab="Fund Types" key="5">
                <EFundType />
            </TabPane>
            <TabPane tab="Investors" key="6">
                <EInvestors />
            </TabPane>
        </Tabs>
    )
}