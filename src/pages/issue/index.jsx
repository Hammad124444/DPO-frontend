import MIssueOverView from "../../issues/overview";
import MLayoutWithHeaderAndFooter from "../../layout/layout-headerAndFooter";

export default function MIssuesAll() {
    return(
        <MIssueOverView />
    )
}

MIssuesAll.getLayout = function getLayout(page) {
    return (
        <MLayoutWithHeaderAndFooter>{ page }</MLayoutWithHeaderAndFooter>
    )
}