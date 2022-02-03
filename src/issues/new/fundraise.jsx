import {Form} from "antd";
import MCheckBoxGroup from "../../core/ui-kit/inputs/checkboxgroup";
import {fundraiseTypes} from "../../core/data/config/fundraiseTypes";
import {stableCoins} from "../../core/data/config/stableCoins";
import MLayoutStepper from "../../layout/layout-stepper";

export default function MNewIssueFundRaise() {
    return(
        <>
            <Form.Item label="Fund-raise Types">
                <MCheckBoxGroup options={fundraiseTypes}/>
            </Form.Item>
            <Form.Item  label="Stable Coins">
                <MCheckBoxGroup options={stableCoins}/>
            </Form.Item>
        </>

    )
}
