import styled from 'styled-components';
import {useParams} from 'react-router';
import {GetProductInterface, ProductList} from '@interface/Product';
import React, {useState, useEffect} from 'react';
import instance from '@api/axios';
import Item from '@components/common/Item';
import {ListLayout, ListSection, Flex, theme} from '@assets/GlobalStyle';
import CircularProgress from '@mui/material/CircularProgress';
import {ThemeProvider} from '@mui/material';

export default function CategoryList() {
    const {category} = useParams();
    const [loading, setLoading] = useState(true);
    const [productListData, setProductListData] = useState<ProductList>({list: [], totalCount: 0});
    const getCategoryList = (category: string | undefined) => {
        instance.get(`/products?category_like=${category}`).then(res => {
            setProductListData({
                list: GetProductInterface(res.data),
                totalCount: res.data.length
            });
            setLoading(false);
        });
    }
    useEffect(() => {
        getCategoryList(category);
    }, [category]);

    return (
        <ListSection>
            {
                loading &&
                    <NoList>
                        <ThemeProvider theme={theme}>
                            <CircularProgress color="primary" />
                        </ThemeProvider>
                    </NoList>
            }
            {
                productListData.totalCount > 0 ?
                    <ListLayout>
                        {productListData.list.map((res, i) => {
                            return <Item key={i} {...res} />
                        })}
                    </ListLayout>
                :
                    <NoList>
                        <p>데이터가 없습니다.</p>
                    </NoList>
            }
        </ListSection>
    );
}

const NoList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc((var(--vh, 100vh)*100) - 160px);

  @media only screen and (max-width: 768px) {
    height: calc((var(--vh, 100vh)*100) - 90px);
  }
  
  p {
    font-weight: 300;
    font-size: 1.5rem;
  }
`;