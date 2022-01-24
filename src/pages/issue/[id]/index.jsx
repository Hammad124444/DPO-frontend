import { useRouter } from 'next/router';
import MIssueDetailById from "../../../issues/detailById";

export default function MIssueById() {
    const router = useRouter();
    console.log(router.query);

    return(
        <MIssueDetailById />
    )
}