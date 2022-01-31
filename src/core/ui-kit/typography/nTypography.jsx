import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function MKNTypography({ title, content, color }) {
    return(
        <Typography>
            <Title className={color}>{ title }</Title>
            <Paragraph className={"font-18 " + color}>{ content }</Paragraph>
        </Typography>
    )
}