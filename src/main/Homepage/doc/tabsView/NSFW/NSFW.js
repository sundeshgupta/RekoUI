import React from "react";
import { ReqRes, SnippetTab } from "./AllTabs";
function NSFWAPIs() {
    return (
        <div>
        <b>POST</b>
        <br />
        /nsfw
            <ReqRes />
            <SnippetTab />
        </div>
    );
}

export default NSFWAPIs;