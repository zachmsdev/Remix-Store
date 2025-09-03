
import initialShopState from '../helpers/initialState.js'

// Shop Intro Component

const ShopIntro = ({ setStoreState }) => {

    const permaState = initialShopState;

    const changeStore = (element) => {
        const clickedCategory = element.name;
        const updatedState = permaState.filter((item) => item.category === clickedCategory );
        setStoreState(updatedState);
    }

    const introImages = [
    {
        name: "Shoes",
        productAmount: 3,
        URL: "https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/43/best-lightweight-hiking-boots-20020534-main.jpg"
    },
    {
        name: "Tents",
        productAmount: 4,
        URL: "https://images.thdstatic.com/productImages/4a46857c-67ea-410a-bfb9-942faf6b16f2/svn/vevor-camping-tents-zpmgb4mmbk0000001v0-64_600.jpg"
    },
    {
        name: "Axes",
        productAmount: 2,
        URL: "https://www.themanual.com/wp-content/uploads/sites/9/2019/10/how-to-split-wood-motion.jpg?p=1"
    },
    {
        name: "Jackets",
        productAmount: 2,
        URL: "https://cdn.shopify.com/s/files/1/0583/3536/3262/files/DSCF1306_480x480.jpg?v=1702028264"
    },
    {
        name: "Heaters",
        productAmount: 2,
        URL: "https://images.thdstatic.com/productImages/1861161a-eaa3-4311-aba7-f48999d17f9a/svn/black-mr-heater-propane-heaters-2-x-mh-f232000-44_600.jpg"
    },
    {
        name: "Pants",
        productAmount: 3,
        URL: "https://ketlmtn.com/cdn/shop/files/KETL-Vent-Pant-PDP-4x5-Brown-6.jpg?v=1722895615&width=2048"
    }];

    return (
        <section className="shopIntro">
            <div className="shopContainer">
                <h1>Shop</h1>
                <p className="shopIntroText">Check out our store and get prepared for your next outdoor adventure! <br/> Cycle through products with the buttons below.</p>
                <ul>
                    { introImages.map((element, index) => {
                        return <li key={index} onClick={() => {changeStore(element)}}>
                            <img src={element.URL}></img>
                            <p>{element.name}</p>
                            <p className="productAmount"><b>{element.productAmount}</b> products</p>
                         </li>;
                    })}
                </ul>
            </div>
        </section>
    )

}

export default ShopIntro;







