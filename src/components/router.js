import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import GreetingSkeleton from "./greetingSkeleton";
import FinalSkeleton from "./finalSkeleton";
import LevelSkeleton from "./levelSkeleton";
import Welcome from "./welcome";
import Daothimun from "./daothimun";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/greeting" element={<GreetingSkeleton />} />
            <Route path="/level" element={<LevelSkeleton />} />
            <Route path="/daothimun" element={<Daothimun />} />
            <Route path="/final" element={<FinalSkeleton />} />
        </Routes>
    );
};

export default Router;
