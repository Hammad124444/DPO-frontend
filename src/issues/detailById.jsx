import { Descriptions } from "antd";
import { detailedIssueInfo } from "../core/data/issues_detailed";
import MRangeDatePicker from "../core/ui-kit/datepicker/rangedatepicker";
import MSwitch from "../core/ui-kit/Switch/switch";

export default function MIssueDetailById({issueId}) {
    const issueDetail = detailedIssueInfo[issueId];
    return(
        <>
        <img src={issueDetail.background} alt={issueDetail.title}/>
        <Descriptions title={issueDetail.title}>
            <Descriptions.Item label="Description">{issueDetail.description}</Descriptions.Item>
            <Descriptions.Item label="Period">
                <MRangeDatePicker type="view" start_date={issueDetail.start_date} end_date={issueDetail.end_date}/>
            </Descriptions.Item>
            <Descriptions.Item label="Security Token Offering">
                <MSwitch type="view" on="Open" off="Closed" checked={issueDetail.open}/>
            </Descriptions.Item>
            <Descriptions.Item label="Security Token Offering">
                <MSwitch type="view" on="Paused" off="Not Paused" checked={issueDetail.paused}/>
            </Descriptions.Item>
            <Descriptions.Item label="Cap">
                <MSwitch type="view" on="Reached" off="Not Reached" checked={issueDetail.capreached}/>
            </Descriptions.Item>
            <Descriptions.Item label="Tokens Minted">
                { issueDetail.tminted }
            </Descriptions.Item>
            <Descriptions.Item label="Tokens Sold">
                { issueDetail.tsold }
            </Descriptions.Item>
        </Descriptions>
        </>
    )
}