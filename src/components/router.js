import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import GreetingSkeleton from "./greetingSkeleton";
import LevelSkeleton from "./levelSkeleton";
import Welcome from "./welcome";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/greeting" element={<GreetingSkeleton />} />
            <Route path="/level" element={<LevelSkeleton />} />
        </Routes>
    );
};

export default Router;
