import Loader from "../components/Loader";
import ErrorMsg from "../components/ErrorMsg";
import Product from "../components/Product";
import {Modal} from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import React, {useContext} from "react";
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";

export function ProductPage () {
    //Вынесли методы в hooks
    const {products, error, loading, addProduct} = useProducts();
    // const [modal, setModal] = useState(false);


    const {modal, open, close: closeModal} = useContext(ModalContext);
    const createHandler = (product: IProduct) => {
        closeModal();
        addProduct(product);
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading && <Loader/>}
            {error && <ErrorMsg error={error}/>}
            {products.map(product => <Product product={product} key={product.id}/>)}

            {modal && <Modal
                title='Create new Product'
                onClose={closeModal}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}
            <button
                className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-1.5'
                onClick={open}
            >+
            </button>
        </div>
    );
}