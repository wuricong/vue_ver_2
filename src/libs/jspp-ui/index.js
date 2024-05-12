import Carousel from "@/libs/jspp-ui/Carousel/index.vue";


const JsppUI = {}


JsppUI.install = function (Vue) {
    Vue.component(Carousel.name, Carousel)
}
export default JsppUI
