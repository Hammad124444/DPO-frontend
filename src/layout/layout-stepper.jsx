import {formLayout} from "../core/data/config/ui-config";
import { Form } from 'antd';
export default function MLayoutStepper({children}) {
    return(
        <>
            <Form {...formLayout}>
                {children}
            </Form>
        </>
    )
}