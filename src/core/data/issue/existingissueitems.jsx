import MNewIssueMeta from "../../../issues/items/meta";
import MNewIssuePeriod from "../../../issues/items/period";
import MNewIssueTier from "../../../issues/items/tier";
import MNewIssueFundRaise from "../../../issues/items/fundraise";
import MNewIssueWallet from "../../../issues/items/wallet";
import MIssueStatus from "../../../issues/items/status";

export const existingIssueItems = [
    {
        title: 'Status',
        content: <MIssueStatus />
    },
    {
        title: 'Meta',
        content: <MNewIssueMeta />
    },
    {
        title: 'Period',
        content: <MNewIssuePeriod />
    },
    {
        title: 'Tier',
        content: <MNewIssueTier />
    },
    {
        title: 'Fund',
        content: <MNewIssueFundRaise />
    },
    {
        title: 'Wallet',
        content: <MNewIssueWallet />
    },
]