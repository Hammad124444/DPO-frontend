import {useRouter} from "next/router";
import MLayoutIssues from "../../layout/layout-issues";
import MIssueOverView from "../../issues/overview";

export default function MIssuesAll() {
    const router = useRouter();
    console.log(router.query);
    return(
        <MIssueOverView />
    )
}

MIssuesAll.getLayout = function getLayout(page) {
    return (
        <MLayoutIssues>{ page }</MLayoutIssues>
    )
}