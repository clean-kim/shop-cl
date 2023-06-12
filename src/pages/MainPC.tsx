import styled from 'styled-components';
import {ProductList} from "../api/server";
import Item from "@components/common/Item";
import React from "react";
import {ListLayout} from '@assets/GlobalStyle';

export default function MainPC() {
    return (
        <ListLayout>
            {ProductList.map((res, i) => {
                return <Item key={i} {...res} />
            })}
        </ListLayout>
    );
}
