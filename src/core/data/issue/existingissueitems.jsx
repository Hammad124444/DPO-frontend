import MNewIssueMeta from "../../../issues/items/meta";
import MNewIssuePeriod from "../../../issues/items/period";
import MNewIssueTier from "../../../issues/items/tier";
import MNewIssueFundRaise from "../../../issues/items/fundraise";
import MNewIssueWallet from "../../../issues/items/wallet";
import MIssueStatus from "../../../issues/items/status";

export const existingIssueItems = [
    {
        key: 'status',
        title: 'Status',
        contentGenerator: (props) => <MIssueStatus {...props} />
    },
    {
        key: 'meta',
        title: 'Meta',
        contentGenerator: (props) => <MNewIssueMeta {... props}/>
    },
    {
        key: 'period',
        title: 'Period',
        contentGenerator: (props) => <MNewIssuePeriod {... props}/>
    },
    {
        key: 'tier',
        title: 'Tier',
        contentGenerator: (props) => <MNewIssueTier {... props}/>
    },
    {
        key: 'fund',
        title: 'Fund',
        contentGenerator: (props) => <MNewIssueFundRaise {... props}/>
    },
    {
        key: 'wallet',
        title: 'Wallet',
        contentGenerator: (props) => <MNewIssueWallet {... props}/>
    },
]