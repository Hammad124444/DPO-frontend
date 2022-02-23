import { Row, Col, Descriptions } from "antd";
import { detailedIssueInfo } from "../../core/data/examples/issues_detailed";
import MRangeDatePicker from "../../core/ui-kit/datepicker/rangedatepicker";
import MTag from "../../core/ui-kit/tags/tag";
import MIssueDetailCard from "../../core/ui-kit/card/detailissuecard";

export default function MIssueDetailById({issueId}) {

    const issueDetail = detailedIssueInfo.find((el) => el.id === issueId);

    return(
        <Row className="container pt-50 pb-50">
            <Col xs={24} sm={24} md={12} lg={8} xl={8} className="d-flex align-items-center">
                <MIssueDetailCard background={issueDetail.background} alt={issueDetail.title}/>
            </Col>
            <Col xs={24} sm={24} md={12} lg={16} xl={16} className="ph-30">
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
                        {
                            issueDetail.fundraised.fiat.usd &&
                                <MTag color="orange" label={'$' + issueDetail.fundraised.fiat.usd  + '(US)'}/>
                        }
                        {
                            issueDetail.fundraised.fiat.cad &&
                                <MTag color="purple" label={'$' + issueDetail.fundraised.fiat.cad  + '(CA)'}/>
                        }
                        {
                            issueDetail.fundraised.crypto.ether &&
                                <MTag color="magenta" label={issueDetail.fundraised.crypto.ether  + ' Ether'}/>
                        }
                        {
                            issueDetail.fundraised.crypto.dai &&
                                <MTag color="geekblue" label={issueDetail.fundraised.crypto.dai  + ' DAI'}/>
                        }
                        {
                            issueDetail.fundraised.crypto.usdt &&
                                <MTag color="red" label={issueDetail.fundraised.crypto.usdt  + ' USDT'}/>
                        }
                        {
                            issueDetail.fundraised.crypto.usdc &&
                                <MTag color="cyan" label={issueDetail.fundraised.crypto.ether  + 'USDC'}/>
                        }
                    </Descriptions.Item>
                    <Descriptions.Item label="Number of Investors">
                        { issueDetail.investors.length }
                    </Descriptions.Item>
                    <Descriptions.Item label="Balance Locked">
                        { issueDetail.balanceLocked }
                    </Descriptions.Item>
                    <Descriptions.Item label="Balance Unlocked">
                        { issueDetail.balanceUnlocked }
                    </Descriptions.Item>
                </Descriptions>
            </Col>
        </Row>
    )
}