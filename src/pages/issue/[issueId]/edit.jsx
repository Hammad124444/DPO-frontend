import { useRouter } from 'next/router';
import MEditIssueDetailById from "../../../issues/editableIssue";
import MLayoutWithHeaderAndFooter from "../../../layout/layout-headerAndFooter";

export default function MIssueEditById(props) {
    const router = useRouter();
    console.log(router.query);

    return(
        <MEditIssueDetailById issueId={props.issueId}/>
    )
}

export async function getServerSideProps(context) {
   const { params } = context;
   const issueId = params.issueId;
    return {
        props: {
            issueId: issueId
        }
    }
}

MIssueEditById.getLayout = function getLayout(page) {
    return (
        <MLayoutWithHeaderAndFooter>
            { page }
        </MLayoutWithHeaderAndFooter>
    )
}