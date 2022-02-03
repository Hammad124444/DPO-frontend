import {formLayout} from "../../core/data/config/ui-config";
import {Form} from "antd";
import MCheckBoxGroup from "../../core/ui-kit/inputs/checkboxgroup";
import {fundraiseTypes} from "../../core/data/config/fundraiseTypes";
import {stableCoins} from "../../core/data/config/stableCoins";

export default function MNewIssueFundRaise() {
    return(
        <Form {...formLayout}>
            <Form.Item label="Fund-raise Types">
                <MCheckBoxGroup options={fundraiseTypes}/>
            </Form.Item>
            <Form.Item  label="Stable Coins">
                <MCheckBoxGroup options={stableCoins}/>
            </Form.Item>
        </Form>
    )
}