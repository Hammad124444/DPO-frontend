import MLayoutWithHeaderAndFooter from "../../../layout/layout-headerAndFooter";

export default function MIssueInvestorsById(props) {
    return(
        // <h1>Investors By Issue Id</h1>
        <div className={'container'}>
            <h1>Investors of Issue: {props.issueTitle}</h1>

        </div>
    )
}

MIssueInvestorsById.getLayout = function getLayout(page) {
    return(
        <MLayoutWithHeaderAndFooter>
            {page}
        </MLayoutWithHeaderAndFooter>
    )
}