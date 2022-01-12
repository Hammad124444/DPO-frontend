import { Carousel } from 'antd';
import { MCarouselStyle } from './carouselStyle';

export default function MCarousel({ carousels }) {
    return (
        <Carousel autoplay dots='false'>
            {
                carousels.map((el) => 
                    <img src={el.url} key={el.alt} alt={el.alt} style={MCarouselStyle}/>
                )
            }
        </Carousel>  
    )
}