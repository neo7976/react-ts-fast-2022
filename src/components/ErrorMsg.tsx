import {FC} from "react";


interface ErrorMsgProps {
    error: string
}

const ErrorMsg: FC<ErrorMsgProps> = ({error}) => {
    return (
        <p className='text-center text-red-600'>{error}</p>
    );
}
export default ErrorMsg;