import { Card } from 'antd';

const { Meta } = Card;

export default function MCard({cards, issue}) {
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
                        >
                            <Meta title={el.title}/>
                        </Card>
                    ))
                )
            }
        </div>
    )
}