import { privacyData } from "../../core/data/config/privacypolicy";
import MKNTypography from "../../core/ui-kit/typography/nTypography";

export default function MCPrivacyPolicy() {
    return(
        <div className="container pt-50">
            <h1 className="text-center font-40 font-bold c-green">Privacy Policy</h1>
            {
                privacyData.map((el, index) => (
                    <MKNTypography key={index} title={el.title} contents={el.descriptions} htmlType titleLevel='24' contentFont={'16'} />
                ))
            }
        </div>
    )
}