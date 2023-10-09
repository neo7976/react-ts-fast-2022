import React, {FC, useState} from "react";
import Product from "./components/Product";
import {useProducts} from "./hooks/products";
import Loader from "./components/Loader";
import ErrorMsg from "./components/ErrorMsg";
import CreateProduct from "./components/CreateProduct";
import {Modal} from "./components/Modal";
import {IProduct} from "./models";

const App: FC = () => {
    //Вынесли методы в hooks
    const {products, error, loading, addProduct} = useProducts();
    const [modal, setModal] = useState(false);

    const createHandler = (product: IProduct) => {
        setModal(false);
        addProduct(product);
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading && <Loader/>}
            {error && <ErrorMsg error={error}/>}
            {products.map(product => <Product product={product} key={product.id}/>)}

            {modal && <Modal
                title='Create new Product'
                onClose={() => setModal(false)}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}
            <button
                className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-1.5'
                onClick={() => setModal(true)}
            >+</button>
        </div>
    );
}

export default App;
