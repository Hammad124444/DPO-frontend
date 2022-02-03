import MIssueCreate from "../../issues/newIssue";
import MLayoutIssues from "../../layout/layout-issues";


export default function MNewIssue() {
    return(
        <MIssueCreate />
    )
}


MNewIssue.getLayout = function getLayout(page) {
    return(
        <MLayoutIssues>
            {page}
        </MLayoutIssues>
    )
}