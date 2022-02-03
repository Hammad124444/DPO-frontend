import {formLayout} from "../../core/data/config/ui-config";
import {Form} from "antd";
import MEditInput from "../../core/ui-kit/inputs/editInput";

export default function MNewIssueWallet() {
    return(
        <>
            <Form.Item label="Fund wallet">
                <MEditInput placeholder="Fund Wallet Address"/>
            </Form.Item>
            <Form.Item label="Treasury wallet">
                <MEditInput placeholder="Treasury Wallet Address"/>
            </Form.Item>
        </>
    )
}