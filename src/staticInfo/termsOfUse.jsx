import { termsOfUse } from "../core/data/config/termsOfUse";
import MKNTypography from "../core/ui-kit/typography/nTypography";

export default function MPTermsOfUse() {
    return(
        <div className="container pt-50">
            <h1 className="text-center font-40 font-bold c-green">Terms Of Use</h1>
            {
                termsOfUse.map((el) => (
                    !el.type &&
                        <MKNTypography title={el.title} content={el.description} htmlType titleLevel='24' contentFont={'16'}/>
                ))
            }
        </div>
    )
}