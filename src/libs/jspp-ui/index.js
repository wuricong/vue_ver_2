import Carousel from "@/libs/jspp-ui/Carousel/index.vue";
import CarouselItem from './Carousel/item.vue'

const coms = [Carousel, CarouselItem]
const JsppUI = {}

let a = 1
if (a > 0) {
    console.log(1)
}

JsppUI.install = function (Vue) {
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarouselItem.name, CarouselItem)
}
export default JsppUI
