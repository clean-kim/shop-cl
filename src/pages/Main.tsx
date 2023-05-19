import {M, PC} from "@components/common/MediaQuery";
import MainMobile from "./MainMobile";
import MainPC from "./MainPC";
import React from "react";

export default function Main() {
    return (
        <>
            <M elem={<MainMobile />} />
            <PC elem={<MainPC />} />
        </>
    );
}
