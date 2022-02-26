import {Form} from "antd";
import MEditInput from "../../../core/ui-kit/inputs/editInput";

export default function MNewIssueUsd() {
    return(
        <>
            <Form.Item label="Non-accredited Limit USD">
                <MEditInput prefix="$" />
            </Form.Item>
            <Form.Item label="Minimum investment USD">
                <MEditInput prefix="$" />
            </Form.Item>
        </>
    )
}