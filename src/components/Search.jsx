import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Search.css";

import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";

import { useStateValue } from "./StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();

        console.log("You hit the search button >>", input);
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
