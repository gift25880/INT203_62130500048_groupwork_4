const app = {
    data() {
        return {
            gallery: [
                { img: "./images/strawberry-sundae.png", menuTitle: "Strawberry Banana & Cream", click: false, showImg: false },
                { img: "./images/coit-tower.png", menuTitle: "Coit Tower", click: false, showImg: false },
                { img: "./images/banana-split.png", menuTitle: "Banana Split", click: false, showImg: false }
            ],
            searchClicked: false,
            inputSearch: '',
            notFound: false,
            showImages: false
        }
    },
    methods: {
        favClicked(index) {
            this.gallery[index].click = !this.gallery[index].click;
        },
        switchSearchClicked() {
            this.searchClicked = !this.searchClicked;
            if (this.searchClicked == false) {
                this.inputSearch = '';
            }
        },
        close() {
            this.showImages = false;
            for (let i = 0; i<this.gallery.length; i++) {
                console.log(this.gallery[i].showImg);
                this.gallery[i].showImg = false;
            }
        },
        imgClicked(index) {
            this.showImages = !this.showImages;
            this.gallery[index].showImg = !this.gallery[index].showImg;
        }

    },
    computed: {
        photoAmount() {
            return this.gallery.length;
        },
        likeAmount() {
            return this.gallery.filter(n => n.click).length;
        },
        searchMenu() {
            this.notFound = false;
            if (this.inputSearch == '') {
                return this.gallery;
            } else {
                let menu = this.gallery.filter(n => n.menuTitle.toLowerCase().includes(this.inputSearch.toLowerCase()));
                if (menu == '') {
                    this.notFound = true;
                } else {
                    return menu;
                }
            }
            
        }
    }
}
Vue.createApp(app).mount('#app');