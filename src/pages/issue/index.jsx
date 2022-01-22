import MLayoutIssues from "../../layout/layout-issues";
import MIssueOverView from "../../issues/overview";

export default function MIssuesAll() {
    return(
        <MIssueOverView />
    )
}

MIssuesAll.getLayout = function getLayout(page) {
    return (
        <MLayoutIssues>{ page }</MLayoutIssues>
    )
}