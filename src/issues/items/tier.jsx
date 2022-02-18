import {formLayout} from "../../core/data/config/ui-config";
import {Form} from "antd";
import MEditInput from "../../core/ui-kit/inputs/editInput";

export default function MNewIssueTier() {
    return(
        <>
            <Form.Item  label="Rate per Tier">
                <MEditInput prefix="$" placeholder="Rate Per Tier"/>
            </Form.Item>
            <Form.Item label="Total ST per Tier">
                <MEditInput placeholder="Total ST per Tier"/>
            </Form.Item>
        </>
    )
}