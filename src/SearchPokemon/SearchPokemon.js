import {Button} from "react-bootstrap";

const SearchPokemon = (props) => {
    return (
        <div className="input-group col-4 my-3">
            <input
                className="form-control"
                onChange={props.inputValue}
                type="text"/>
            <Button onClick={props.onClick} >Search</Button>
        </div>
    )
}

export default SearchPokemon;
