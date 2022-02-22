import { tempIssues } from "../../core/data/examples/issues_temp";
import MIssueCard from "../../core/ui-kit/card/issuecard";

export default function MIssueOverView() {

    return(
        <div className="container ant-row pt-30">
            {
                tempIssues.map((el) => (
                    <div className="ant-col-xs-24 ant-col-sm-24 ant-col-md-12 ant-col-xl-6 pb-30 justify-content-center d-flex"
                         key={el.id}
                    >
                        <MIssueCard info={el} />
                    </div>
                ))
            }
        </div>
    )
}


