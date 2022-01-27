import MIssueDetailById from "../../../issues/detailById";

export default function MIssueById(props) {
    return(
        <MIssueDetailById issueId={props.issueId}/>
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
