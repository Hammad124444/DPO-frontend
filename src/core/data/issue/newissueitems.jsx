import MNewIssueMeta from "../../../issues/items/meta";
import MNewIssuePeriod from "../../../issues/items/period";
import MNewIssueTier from "../../../issues/items/tier";
import MNewIssueFundRaise from "../../../issues/items/fundraise";
import MNewIssueWallet from "../../../issues/items/wallet";

export const newIsuseSteps = [
    {
        title: 'Meta',
        description: 'General Info of issue',
        content:  <MNewIssueMeta />
    },
    {
        title: 'Period',
        description: 'Period of issue',
        content: <MNewIssuePeriod />
    },
    {
        title: 'Tier',
        description: 'Set Rate and Total Tier',
        content: <MNewIssueTier />
    },
    {
        title: 'Fund',
        description: 'Fund Raise Types',
        content: <MNewIssueFundRaise />
    },
    {
        title: 'Wallet',
        description: 'Fund and Treasury Wallet',
        content: <MNewIssueWallet />
    }
]