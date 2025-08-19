<template>
    <div>
        <div class="ProdCard">
            <img class="imgprod" :src="product.image" :alt="product.title">
            <div class="scrollwrapper">
                <h3 class="ProdText scrolltext">{{ product.title }}</h3>

            </div>
            <p class="fw-light ProdText">R{{ product.price }}</p>
            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#productModal">
                View Product
            </button>
        </div>

    </div>


    <!-- --------------------------- Modal----------------------------------------------------------- -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content custom-blur">
                <div class="modal-header prodinfoheading  border-0 m-2">
                    <h5 class="modal-title " id="productModalLabel">{{ product.title }}</h5>

                </div>
                <div class="modal-body text-center m-3">
                    <img :src="product.image" :alt="product.title" class="prodimg2">
                    <p class="fs-5 fw-bold">{{ product.price }}</p>
                    <p class="text-muted my-2">
                        {{ product.description }}
                    </p>
                </div>
                <div class="modal-footer border-0  justify-content-between">
                    <button type="button" class="btnClose " data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btnAddToCart "><span>Add to Cart</span></button>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "ShopProdCard",
    props: {
        product: {
            type: Object,
            required: true
            
        }

    }

};
</script>

<style scoped>
/* ----------------------------------------Product Card CSS------------------------------------- */

.ProdCard {

    height: 400px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

    /* box-shadow:
        /* right shadow *
        6px 0px 10px -1px rgba(250, 141, 25, 0.738),
        /* left shadow *
        -4px 0px 3.5px -2px rgba(22, 22, 22, 0.738),
        /* top shadow *
        0px -4px 3.5px -2px rgba(22, 22, 22, 0.738),
        /* bottom shadow *
        0px 6px 8px -1px rgba(250, 141, 25,0.738)  ; */

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
    margin-bottom: 5px;
    padding-bottom: 8px;
    margin-left: 5px;

}
 
.imgprod {
      width: 100%;
  height: 255px;
  object-fit: cover;
    /* Fixed height for all */
  
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}

.ProdCard button {
    border: none;
    border-radius: 10px;
    width: 130px;
    height: 40px;
    background: linear-gradient(to right, #3315dec4, rgb(54, 142, 237));
    /* background: linear-gradient(100deg, #000000, #3b3b3c, #f9750f); */
    color: white;
    justify-self: center;
    cursor: pointer;
    margin: 10px;
    transition: transform 0.3s ease;
    /* 
        box-shadow:
        /* right shadow 
        6px 0px 10px -1px rgba(250, 141, 25, 0.738),
        /* left shadow *
        -4px 0px 3.5px -2px rgba(22, 22, 22, 0.738),
        /* top shadow *
        0px -4px 3.5px -2px rgba(22, 22, 22, 0.738),
        /* bottom shadow *
        0px 6px 8px -1px rgba(250, 141, 25,0.738)  ; */

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
    margin-left: 5px;
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



/* ------------------------------------Modal Styling:------------------------------------------ */

#productModal {
    z-index: 99999999;

}

.modal-dialog {
    margin: 0 auto;

}

.modal-backdrop.show {
    backdrop-filter: blur(6px);
    background-color: rgba(0, 0, 0, 0.3);
}

.prodimg2 {
    object-fit: contain;
    height: 400px;
    width: 400px;
}


.btnClose {
    background-color: #6c757d;
    color: white;
    border: none;
    height: 40px;
    width: 100px;
    margin: 10px;
    border-radius: 8px !important;
}

.btnAddToCart {
    background: linear-gradient(135deg, #3315dec4, rgb(54, 142, 237)) !important;
    /* background: linear-gradient(100deg, #000000, #3b3b3c, #f9750f); */
    border-radius: 8px !important;
    box-shadow:
        /* right shadow */
        6px 0px 10px -1px rgba(25, 96, 250, 0.414),
        /* left shadow */
        -4px 0px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* top shadow */
        0px -4px 3.5px -2px rgba(152, 30, 246, 0.414),
        /* bottom shadow */
        0px 6px 8px -1px rgba(25, 96, 250, 0.414);

    /* box-shadow:
        /* right shadow *
        6px 0px 10px -1px rgba(250, 141, 25, 0.738),
        /* left shadow *
        -4px 0px 3.5px -2px rgba(22, 22, 22, 0.738),
        /* top shadow *
        0px -4px 3.5px -2px rgba(22, 22, 22, 0.738),
        /* bottom shadow *
        0px 6px 8px -1px rgba(250, 141, 25,0.738)  ; */

    color: rgb(255, 255, 255);
    border: none;
    height: 40px;
    width: 100px;
    margin: 10px;
    position: relative;
    transition: box-shadow .7s;

}

.btnAddToCart:hover {
    box-shadow:
        /* right shadow */
        6px 0px 10px -1px rgba(152, 30, 246, 0.414),
        /* left shadow */
        -4px 0px 3.5px -2px rgba(25, 96, 250, 0.414),
        /* top shadow */
        0px -4px 3.5px -2px rgba(25, 96, 250, 0.414),
        /* bottom shadow */
        0px 6px 8px -1px rgba(152, 30, 246, 0.414);
    /* 
                    box-shadow:
        /* right shadow *
        6px 0px 10px -1px rgba(22, 22, 22, 0.738),
        /* left shadow *
        -4px 0px 3.5px -2px rgba(250, 141, 25, 0.738),
        /* top shadow *
        0px -4px 3.5px -2px rgba(250, 141, 25, 0.738) ,
        /* bottom shadow *
        0px 6px 8px -1px rgba(22, 22, 22, 0.738)  ; */


}

.btnAddToCart::before {
    content: '';
    position: absolute;
    border-radius: 8px !important;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(135deg, rgba(54, 213, 237, 0.751), #7d15dea1) !important;

    opacity: 0;
    transition: opacity 0.8s ease-in;
    color: white;

}

.btnAddToCart:hover::before {
    opacity: 1;

}

.btnAddToCart>span {
    position: relative;
}

/* --------------------------------------------------------------------------------------------- */
</style>
