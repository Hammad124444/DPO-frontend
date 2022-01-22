import { Switch } from 'antd';

export default function MSwitch({ on, off, type }) {
    if (type == 'edit') {
    // Switch on editable Issue Page - admin/issuers
        return(
            <Switch
                checkedChildren={on}
                unCheckedChildren={off}
                defaultChecked
            />
        )
    } else {
    // Switch on viewable Issue Page - Investors
        return(
            <Switch
                checkedChildren={on}
                unCheckedChildren={off}
                defaultChecked
                disabled
            />
        )
    }
}