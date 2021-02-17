const app = {
    data() {
        return {
            gallery: [
                { img: "./images/strawberry-sundae.png", menuTitle: "Strawberry Banana & Cream", click: false },
                { img: "./images/coit-tower.png", menuTitle: "Coit Tower", click: false },
                { img: "./images/banana-split.png", menuTitle: "Banana Split", click: false }
            ],
            searchClicked: false,
            inputSearch: '',
            notFound: false,
            showImg: false
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