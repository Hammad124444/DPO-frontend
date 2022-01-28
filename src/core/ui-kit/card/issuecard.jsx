import { useRouter } from 'next/router';
import { Card } from 'antd';
import MButtonWithIcon from "../buttons/iconButton";
import MTag from "../tags/tag";
import Image from 'next/image';
const { Meta } = Card;

export default function MIssueCard({info}) {
    const router = useRouter();
    const navigateToDetailedIssue = (id) => {
        router.push(`/issue/${id}`);
    }

    return(
        <Card
            hoverable
            style={{width: 240}}
            cover={<Image alt={info.title} src={info.background} width={400} height={300} />}
            actions={[
                <MButtonWithIcon
                    type="primary"
                    size="large"
                    label="View"
                    navigate={() => navigateToDetailedIssue(info.id)}
                />,
                <MButtonWithIcon
                    type="danger"
                    size="large"
                    label="Edit"
                    editable
                    navigate={() => navigateToDetailedIssue(info.id)}
                />
            ]}
        >
            <Meta
                title={info.title}
                description={info.description}
            />
            <div className="pt-20">
                <MTag label="Open" color="red"/>
                <MTag label="Issuable" color="blue"/>
            </div>
        </Card>
    )
}