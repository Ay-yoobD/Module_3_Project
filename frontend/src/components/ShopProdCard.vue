<template>
    <div class="ProductCardView">
        <div class="ProdCard">
            <img class="imgprod"
                src="https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/41afc2867b6489330d4144f4be120756.jpg?imageView2/2/w/800/q/70/format/webp"
                alt="productImg">
            <div class="scrollwrapper">
                <h3 class="ProdText scrolltext">Prod Name Here</h3>

            </div>
            <p class="lead ProdText">Some Details Here</p>
            <p class="fw-lighter ProdText">Pricing details go here</p>
            <button>More Details btn</button>
        </div>

    </div>


</template>

<script>
export default {
    name: "ShopProdCard",
};


</script>

<style>
/* ----------------------------------------Product Card CSS------------------------------------- */

.ProductCardView {

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;


}

.ProdCard {

    height: 400px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

    box-shadow:
        /* right shadow */
        6px 0px 10px -1px rgba(25, 96, 250, 0.414),
        /* left shadow */
        -4px 0px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* top shadow */
        0px -4px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* bottom shadow */
        0px 6px 8px -1px rgba(25, 96, 250, 0.414);


}

.ProdText {
    padding-bottom: 10px;
}

.imgprod {
    width: 120px;
    height: auto;
    margin-bottom: 10px;
}

.ProdCard button {

    border-radius: 10px;
    width: 130px;
    height: 40px;
    background: linear-gradient(to right, #3315dec4, rgb(54, 142, 237));
    color: white;
    justify-self: center;
    cursor: pointer;
    margin: 10px;
    transition: transform 0.3s ease;

    box-shadow:
        /* right shadow */
        6px 0px 10px -1px rgba(25, 96, 250, 0.414),
        /* left shadow */
        -4px 0px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* top shadow */
        0px -4px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* bottom shadow */
        0px 6px 8px -1px rgba(25, 96, 250, 0.414);

}

.ProdCard button:hover {
    transform: translateY(-5px);
}

.scrollwrapper {
    width: 100%;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    mask-image: linear-gradient(to right, black 85%, transparent);
    -webkit-mask-image: linear-gradient(to right, black 85%, transparent);

}


.scrolltext {
    display: inline-block;
    white-space: nowrap;
    transform: translateX(0);
    transition: transform 0.3s ease;
    animation: none;
}

.ProdCard:hover .scrolltext {
    animation: scroll-loop 10s linear infinite;
}

@keyframes scroll-loop {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }

}
</style>
