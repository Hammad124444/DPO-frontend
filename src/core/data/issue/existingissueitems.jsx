import MNewIssueMeta from "../../../issues/items/meta";
import MNewIssuePeriod from "../../../issues/items/period";
import MNewIssueTier from "../../../issues/items/tier";
import MNewIssueFundRaise from "../../../issues/items/fundraise";
import MNewIssueWallet from "../../../issues/items/wallet";
import MIssueStatus from "../../../issues/items/status";

export const existingIssueItems = [
    {
        title: 'Status',
        contentGenerator: (props) => <MIssueStatus {...props} />
    },
    {
        title: 'Meta',
        contentGenerator: (props) => <MNewIssueMeta {... props}/>
    },
    {
        title: 'Period',
        contentGenerator: (props) => <MNewIssuePeriod {... props}/>
    },
    {
        title: 'Tier',
        contentGenerator: (props) => <MNewIssueTier {... props}/>
    },
    {
        title: 'Fund',
        contentGenerator: (props) => <MNewIssueFundRaise {... props}/>
    },
    {
        title: 'Wallet',
        contentGenerator: (props) => <MNewIssueWallet {... props}/>
    },
]