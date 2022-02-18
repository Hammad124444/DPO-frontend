import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function MKNTypography({ title, contents, color, htmlType, titleLevel, contentFont }) {
    return(
        <Typography>
            <Title className={'font-'+ titleLevel+ ' ' +color} >{ title }</Title>
            {
                 contents && contents.map((el, index) => (
                     htmlType ? (
                         <Paragraph key={index} className={'font-'+  contentFont + ' ' + color}>
                             <div dangerouslySetInnerHTML={{ __html: el }} />
                         </Paragraph>
                         ):(
                         <Paragraph key={index} className={'font-'+  contentFont + ' ' + color}>{ el }</Paragraph>
                     )
                 ))
            }
        </Typography>
    )
}