import styled from 'styled-components';
import {useParams} from 'react-router';
import {GetProductInterface, ProductList} from '@interface/Product';
import React, {useState, useEffect} from 'react';
import instance from '@api/axios';
import Item from '@components/common/Item';
import {ListLayout, ListSection} from '@assets/GlobalStyle';

export default function CategoryList() {
    const {category} = useParams();
    const [productListData, setProductListData] = useState<ProductList>({list: [], totalCount: 0});
    const getCategoryList = (category: string | undefined) => {
        instance.get(`/products?category_like=${category}`).then(res => {
            console.log(res.data);
            setProductListData({
                list: GetProductInterface(res.data),
                totalCount: res.data.length
            });
        });
    }
    useEffect(() => {
        getCategoryList(category);
    }, [category]);

    return (
        <CategoryListSection>
            <ListLayout>
                {productListData.list.map((res, i) => {
                    return <Item key={i} {...res} />
                })}
            </ListLayout>
        </CategoryListSection>
    );
}

const CategoryListSection = styled(ListSection)`
  margin-top: 50px;
`;

