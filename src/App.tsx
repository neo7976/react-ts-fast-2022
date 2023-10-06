import React, {FC} from "react";
import Product from "./components/Product";
import {useProducts} from "./hooks/products";
import Loader from "./components/Loader";
import ErrorMsg from "./components/ErrorMsg";
import Modal from "./components/Modal";

const App: FC = () => {
    //Вынесли методы в hooks
    const {products, error, loading} = useProducts();

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading && <Loader/>}
            {error && <ErrorMsg error={error}/>}
            {products.map(product => <Product product={product} key={product.id}/>)}
            <Modal/>
        </div>
    );
}

export default App;
