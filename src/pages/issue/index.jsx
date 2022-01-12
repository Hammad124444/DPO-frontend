import MLayoutIssues from "../../layout/layout-issues";
import MCard from '../../core/ui-kit/card/card';
import { tempIssues } from '../../core/data/issues_temp';

export default function MIssuesAll() {

    return(
        <MCard cards={ tempIssues } issue/>
    )
}

MIssues.getLayout = function getLayout(page) {
    return (
        <MLayoutIssues>{ page }</MLayoutIssues>
    )
}