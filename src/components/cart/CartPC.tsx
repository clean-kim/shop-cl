import React from 'react';
import styled from "styled-components";
import {useAppSelector} from '@modules/store';
import Product from '@interface/Product';
import ProductBoxPC from '@components/cart/ProductBoxPC';
import CheckboxRound from '@components/common/CheckboxRound';
import Calculator from '@components/cart/Calculator';
import Button, {ButtonStyleGuide} from '@components/common/Button';

export default function CartPC() {
    const cartSelector = useAppSelector(state => state.cartSlice);
    return (
        <CartPCLayout>


            <Table>
                <colgroup>
                    <col width={'125px'} style={{textAlign: 'start'}}/>
                    <col width={'500px'} />
                    <col width={'180px'} />
                    <col width={'180px'} />
                    <col width={'295px'} />
                </colgroup>
                <thead>
                <tr>
                    <th>
                        <CheckboxRound />
                    </th>
                    <th>상품정보</th>
                    <th>수량</th>
                    <th>가격</th>
                    <th>선택</th>
                </tr>
                </thead>
                <tbody>
                    {cartSelector.map((item: Product) => {
                        return <ProductBoxPC {...item} key={item.no}/>;
                    })}
                </tbody>
            </Table>

        </CartPCLayout>
    );
}

const CartPCLayout = styled.div`
  width: 100%;
  height: calc(var(--vh, 100vh) * 100);
  margin-top: 80px;
`;


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-top: 2px solid var(--primary);
  border-bottom: 2px solid var(--primary);
  box-sizing: border-box;

  th, td {
    word-break: break-all;
    background-clip: padding-box;
  }

  thead {
    height: 80px;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 80px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--border400);

    th:first-child {
      position: relative;
      text-align: start;
      padding-left: 1rem;
      vertical-align: middle;
    }

  }

  tbody {
    tr {
      border-collapse: collapse;
      border-bottom: 1px solid var(--border200);
    }

    td:first-child {
      position: relative;
      text-align: start;
      padding-left: 1rem;
      vertical-align: middle;
    }

    td {
      padding: 20px;
      vertical-align: middle;
      text-align: center;
    }
  }
`;
