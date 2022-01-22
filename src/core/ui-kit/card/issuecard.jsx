import { useRouter } from 'next/router';
import { Card } from 'antd';
import MButtonWithIcon from "../buttons/iconButton";

export default function MIssueCard({info}) {
    const router = useRouter();

    const navigateToDetailedIssue = (id) => {
        router.push('/issue/' + id);
    }

    return(
        <Card
            hoverable
            style={{width: 240}}
            cover={<img alt={info.title} src={info.background} />}
            actions={[
                <MButtonWithIcon
                    type="default"
                    size="large"
                    label="Edit"
                    editable
                    navigate={() => navigateToDetailedIssue(info.id)}
                />
            ]}
        >
        </Card>
    )
}