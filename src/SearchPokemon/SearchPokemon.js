import {Button} from "@mui/material";

const SearchPokemon = (props) => {
    return (
        <div className="input-group col-4 my-3">
            <input
                className="form-control"
                onChange={props.inputValue}
                type="text"/>
            <Button onClick={props.onClick} variant="contained">Search </Button>
        </div>
    )
}

export default SearchPokemon;
