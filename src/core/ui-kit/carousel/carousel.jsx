import { Carousel } from 'antd';
import Image from 'next/image';

export default function MCarousel({ carousels }) {
    return (
        <Carousel autoplay dots='false'>
            {
                carousels.map((el) =>
                        <Image src={el.url} key={el.alt} width={3500} height={800}/>
                )
            }
        </Carousel>  
    )
}