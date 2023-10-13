import {MoonLoader} from "react-spinners";
import {CSSProperties, useState} from "react";

const Loader = () => {
    let [color, setColor] = useState("rgb(222,63,14)");
    //
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    return (
        <MoonLoader
            color={color}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}
export default Loader;