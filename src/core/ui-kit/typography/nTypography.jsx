import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function MKNTypography({ title, content }) {
    return(
        <Typography>
            <Title>{ title }</Title>
            <Paragraph className="font-20">{ content }</Paragraph>
        </Typography>
    )
}