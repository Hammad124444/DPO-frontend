import MNewIssueMeta from "../../../issues/new/meta";
import MNewIssuePeriod from "../../../issues/new/period";
import MNewIssueTier from "../../../issues/new/tier";
import MNewIssueFundRaise from "../../../issues/new/fundraise";
import MNewIssueWallet from "../../../issues/new/wallet";

export const steps = [
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