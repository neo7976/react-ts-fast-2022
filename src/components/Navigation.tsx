import {Link} from "react-router-dom";

export function Navigation() {
return (
    <nav
    className='h-[50px] flex justify-between px-5 bg-red-700 items-center text-white'>
        <span className='font-bold'>React 2022</span>
        <span>
            <Link className='mr-2' to='/'>Products</Link>
            <Link className='mr-2' to='/marvels'>Marvels</Link>
            <Link className='mr-2' to='/todo'>Todo</Link>
        </span>
    </nav>
);
}

