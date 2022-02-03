import { useRouter } from 'next/router';
import { Card } from 'antd';
import MButtonWithIcon from "../buttons/iconButton";
import MTag from "../tags/tag";
import Image from 'next/image';
import {EditOutlined, EyeOutlined} from "@ant-design/icons";
const { Meta } = Card;

export default function MIssueCard({info}) {
    const router = useRouter();
    const navigateToDetailedIssue = (pass) => {
        router.push(`/issue/${pass}`);
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
                    action={() => navigateToDetailedIssue(info.id)}
                    children={<EyeOutlined />}
                />,
                <MButtonWithIcon
                    type="danger"
                    size="large"
                    label="Edit"
                    action={() => navigateToDetailedIssue(info.id+'/edit')}
                    children={<EditOutlined />}
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