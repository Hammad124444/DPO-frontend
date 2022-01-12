import { UserSwitchOutlined, UsergroupAddOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';

export const siderItems = [
    {
        key: 'active',
        name: 'Active Issues',
        count: 5,
        Icon: UserSwitchOutlined
    },
    {
        key: 'ongoing',
        name: 'Onging Issues',
        count:  3,
        Icon: UsergroupDeleteOutlined
    },
    {
        key: 'upcoming',
        name: 'Upcoming Issues',
        count: 7,
        Icon: UsergroupAddOutlined
    }
]