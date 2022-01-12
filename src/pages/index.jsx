import MLayoutLanding  from '../layout/layout-landing';
import MCarousel from  '../core/ui-kit/carousel/carousel';
import { carousels } from '../core/data/carousels';

export default function Home() {
  return (
    <MCarousel carousels={carousels}/>
  )
}

Home.getLayout = function getLayout(page) {
  return (
      <MLayoutLanding>{page}</MLayoutLanding>
  )
}