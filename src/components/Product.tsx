import {FC, useState} from "react";
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}

const Product: FC<ProductProps> = ({product}) => {
    const [details, setDetails] = useState(false);

    const bntBgClassName = details ? 'bg-blue-400' : 'bg-amber-400';
    const bntClasses = ["py-2", "px-4"];
    bntClasses.push(bntBgClassName);

    return (
        <div
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
        >
            <img
                src={product.image}
                alt={product.title}
                className="w-1/6"
            />
            <p>
                {product.title}
            </p>
            <span className="font-bold">{product.price}</span>
            <button
                className={bntClasses.join(' ')}
                onClick={() => setDetails(prevState => !prevState)}
            >{details ? 'Hide Details' : 'Show details'}
            </button>

            {details && <div>
                <p>{product.description}.</p>
            </div>}
        </div>
    );
}

export default Product;