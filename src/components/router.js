import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import GreetingSkeleton from "./greetingSkeleton";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<GreetingSkeleton />} />
        </Routes>
    );
};

export default Router;
