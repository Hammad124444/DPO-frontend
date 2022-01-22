import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

export default function MRangeDatePicker({ label, type }) {
    if (type == 'new') {
        // Component to be rendered on Issue Creation Page
        return(
                <RangePicker renderExtraFooter={() => 'extra footer'} size="large"/>
        )
    } else if (type == 'edit') {
        //Component to be rendered on Issue Edit Page - admin/issuers
        return(
                <RangePicker
                    defaultValue={[moment('2019-09-03', dateFormat), moment('2019-11-22', dateFormat)]}
                />
        )
    } else if (type == 'view') {
        //Component to rendered on Issue View Page - investors
        return(
                <RangePicker
                    defaultValue={[moment('2019-09-03', dateFormat), moment('2019-11-22', dateFormat)]}
                    disabled
                />
        )
    }

}