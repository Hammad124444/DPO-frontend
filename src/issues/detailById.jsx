import { Descriptions } from "antd";
import { detailedIssueInfo } from "../core/data/issues_detailed";
import MRangeDatePicker from "../core/ui-kit/datepicker/rangedatepicker";
import MTag from "../core/ui-kit/tags/tag";
import Image from 'next/image';
import MPrimaryBtn from "../core/ui-kit/buttons/primaryBtn";


export default function MIssueDetailById({issueId}) {
    const issueDetail = detailedIssueInfo[issueId];

    return(
        <div className="container pt-30 ant-row">
            <div className="ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-lg-8 ant-col-xl-8">
                <Image src={issueDetail.background} alt={issueDetail.title} width={500} height={300}/>
                <MPrimaryBtn type="danger" label="Edit" size="large" />
                <MPrimaryBtn type="primary" label="Investors" size="large" />
            </div>
            <div className="ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-lg-16 ant-col-xl-16 ph-30">
                <Descriptions title={issueDetail.title} className="d-flex flex-column" bordered
                    column={1}
                >
                    <Descriptions.Item label="Description">{issueDetail.description}</Descriptions.Item>
                    <Descriptions.Item label="Period">
                        <MRangeDatePicker type="view" start_date={issueDetail.start_date} end_date={issueDetail.end_date}/>
                    </Descriptions.Item>
                    <Descriptions.Item label="Security Token Offering">
                        <MTag label="open" color="blue"/>
                    </Descriptions.Item>
                    <Descriptions.Item label="Security Token Offering">
                        <MTag label="open" color="blue"/>
                    </Descriptions.Item>
                    <Descriptions.Item label="Cap">
                        <MTag label="open" color="blue" />
                    </Descriptions.Item>
                    <Descriptions.Item label="Tokens Minted">
                        { issueDetail.tminted }
                    </Descriptions.Item>
                    <Descriptions.Item label="Tokens Sold">
                        { issueDetail.tsold }
                    </Descriptions.Item>
                    <Descriptions.Item label="Fund Raised">
                        <MTag color="magenta" label="4.5 ETH"/>
                        <MTag color="orange" label="6500 USDT"/>
                        <MTag color="purple" label="$ 7500"/>
                    </Descriptions.Item>
                    <Descriptions.Item label="Number of Investors">
                        { issueDetail.investors }
                    </Descriptions.Item>
                    <Descriptions.Item label="Balance Locked">
                        { issueDetail.balanceLocked }
                    </Descriptions.Item>
                    <Descriptions.Item label="Balance Unlocked">
                        { issueDetail.balanceUnlocked }
                    </Descriptions.Item>
                </Descriptions>
            </div>
        </div>
    )
}