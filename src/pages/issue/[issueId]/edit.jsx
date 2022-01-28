import { useRouter } from 'next/router';
import MEditIssueDetailById from "../../../issues/editableIssue";
import MLayoutWithHeaderAndFooter from "../../../layout/layout-headerAndFooter";

export default function MIssueEditById() {
    const router = useRouter();
    console.log(router.query);

    return(
        <MEditIssueDetailById />
    )
}

MIssueEditById.getLayout = function getLayout(page) {
    return (
        <MLayoutWithHeaderAndFooter>
            { page }
        </MLayoutWithHeaderAndFooter>
    )
}