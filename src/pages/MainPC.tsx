import styled from 'styled-components';
import {ProductList} from "../server/server";
import Item from "../components/common/Item";
import React from "react";
import {ListLayout} from '../assets/GlobalStyle';

export default function MainPC() {
    return (
        <MainPCLayout>
            <ListLayout>
                {ProductList.map((res, i) => {
                    return <Item key={i} {...res} />
                })}
            </ListLayout>
        </MainPCLayout>
    );
}

const MainPCLayout = styled.section`
  //padding-top: 100px;
`;