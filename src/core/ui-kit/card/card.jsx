import { useRouter } from 'next/router';
import { Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
const { Meta } = Card;

export default function MCard({cards, issue}) {
   const router = useRouter();

   const navigateToDetailed = (id) => {
        router.push('/issue/' + id);
   }
    return (
        <div>
            {
                !issue ? (
                    cards.map(el => (
                        <Card key={el.id}
                            hoverable
                            style={{width: 240}}
                        >
                        </Card>
                    ))
                ) : (
                    cards.map((el) => (
                        <Card key={el.id}
                            hoverable
                            style={{width: 240}}
                            cover={<img alt={el.title} src={el.background} />}
                            actions={[
                                    <EditOutlined key="edit" onClick={() => navigateToDetailed(el.id)}/>
                                ]
                            }
                        >
                            <Meta title={el.title} description={el.description}/>
                        </Card>
                    ))
                )
            }
        </div>
    )
}