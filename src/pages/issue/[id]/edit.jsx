import { useRouter } from 'next/router';
import MEditIssueDetailById from "../../../issues/editableIssue";

export default function MIssueEditById() {
    const router = useRouter();
    console.log(router.query);

    return(
        <MEditIssueDetailById />
    )
}