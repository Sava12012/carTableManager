import React from "react";
import { CircularProgress } from "@mui/material";

function Loader() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>
            <CircularProgress />
        </div>
    );
}

export default Loader;
