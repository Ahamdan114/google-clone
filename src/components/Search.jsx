import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Search.css";
import searchImports from "./searchImports";

function Search({ hideButtons = false }) {
    const { SearchIcon, MicIcon, Button, useStateValue, actionTypes } = searchImports;

    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        dispatch({ type: actionTypes.SET_SEARCH_TERM, term: input });
        navigate("/search");
    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined">
                        Google Search
                    </Button>
                    <Button variant="outlined">I'm feeling Lucky</Button>
                </div>
            ) : (
                <div className="search__buttons">
                    <Button
                        className="search_buttonsHidden"
                        type="submit"
                        onClick={search}
                        variant="outlined"
                    >
                        Google Search
                    </Button>
                    <Button className="search_buttonsHidden" variant="outlined">
                        I'm feeling Lucky
                    </Button>
                </div>
            )}
        </form>
    );
}

export default Search;
