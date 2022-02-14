import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function MKNTypography({ title, content, color, htmlType, titleLevel, contentFont }) {
    return(
        <Typography>
            <Title className={'font-'+ titleLevel+ ' ' +color} >{ title }</Title>
            {
                htmlType ? (
                    <Paragraph className={'font-'+  contentFont + ' ' + color}>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </Paragraph>
                    ):(
                    <Paragraph className={'font-'+  contentFont + ' ' + color}>{ content }</Paragraph>
                )
            }
            
        </Typography>
    )
}