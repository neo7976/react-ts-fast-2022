import {FC, useState} from "react";
import {IMarvel} from "../modals/modalsMarvel";
import {useNavigate} from "react-router-dom";

interface MarvelProps {
    character: IMarvel
}

const Marvel: FC<MarvelProps> = ({character}) => {
    const [details, setDetails] = useState(false);
    let navigate = useNavigate();

    const bntBgClassName = details ? 'bg-amber-400' : 'bg-blue-400';
    const bntClasses = ["py-2", "px-4"];
    bntClasses.push(bntBgClassName);

    return (
        <>
            <div className="card" key={character.id}
                 onClick={() => navigate(`/${character.id}`)}
            >
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                <div className="title">
                    <h3> {character.name}</h3>
                </div>
            </div>
        </>


    );
}

export default Marvel;