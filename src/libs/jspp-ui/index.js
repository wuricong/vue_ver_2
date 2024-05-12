import Carousel from "@/libs/jspp-ui/Carousel/index.vue";
import CarouselItem from './Carousel/item.vue'

const coms = [Carousel, CarouselItem]
const JsppUI = {}


JsppUI.install = function (Vue) {
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarouselItem.name, CarouselItem)
}
export default JsppUI
