import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Search from "../components/Search";

import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";


const Home = () => {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Stores</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt="google"
                />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default Home;
