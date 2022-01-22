import MLandingOptionCard from "../core/ui-kit/card/landing_card";

export default function MLandingOptions({cards}) {
    return(
        <div className="ant-row container pt-30">
            {
                cards.map((el) => (
                    <div key={el.id} className="ant-col-8 ant-col-sm-8 ant-col-xs-24">
                        <MLandingOptionCard info={el}/>
                    </div>
                ))
            }
        </div>
    )
}