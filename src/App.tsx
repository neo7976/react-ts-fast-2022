import {FC, useEffect, useState} from "react";
// import {products} from "./data/product";
import Product from "./components/Product";
import axios, {AxiosError} from "axios";
import {IProduct} from "./models";

const App: FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchProducts() {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
            console.log(response);
            setProducts(response.data);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }


    }


    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {loading && <p className='text-center'>Loading...</p>}
            {error && <p className='text-center text-red-600'>{error}</p>}
            {products.map(product => <Product product={product} key={product.id}/>)}
        </div>
    );
}

export default App;
