import {FC} from "react";

import {useNavigate} from "react-router-dom";
import {IMarvel} from "../../../modals/modalsMarvel";

interface MarvelProps {
    character: IMarvel
}

const MarvelCharacterTitle: FC<MarvelProps> = ({character}) => {
    let navigate = useNavigate();

    return (
        <>
            <div className="card" key={`character.id`}
                 onClick={() => navigate(`/marvel/character/${character.id}`)}
            >
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                <div className="title">
                    <h3> {character.name}</h3>
                </div>
            </div>
        </>
    );
}

export default MarvelCharacterTitle;