const app = {
    data() {
        return {
            gallery: [
                { img: "./images/strawberry-sundae.png", menuTitle: "Strawberry Banana & Cream", click: false },
                { img: "./images/coit-tower.png", menuTitle: "Coit Tower", click: false },
                { img: "./images/banana-split.png", menuTitle: "Banana Split", click: false }
            ],
        }
    },
    methods: {
        imgClicked(index) {
            this.gallery[index].click = !this.gallery[index].click;
        }
    },
    computed: {
        photoAmount() {
            return this.gallery.length;
        },
        likeAmount() {
            return this.gallery.filter(n => n.click).length;
        }
    }
}
Vue.createApp(app).mount('#app');