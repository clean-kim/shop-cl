import styled from 'styled-components';
import {useLayoutEffect, useState} from 'react';
import Product, {GetProductInterface, ProductList} from '@interface/Product';
import instance from '@api/axios';
import {useSearchParams} from 'react-router-dom';
import {ListSection, ListLayout} from '@assets/GlobalStyle';
import Item from '@components/common/Item';

export default function SearchResult() {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') ?? '';
    const [keywordList, setKeywordList] = useState<ProductList>({list: [], totalCount: 0});
    const getKeywordList = (title: string) => {
        instance.get(`/products?title_like=${title}`).then(res => {
            setKeywordList({
                list: GetProductInterface(res.data),
                totalCount: res.data.length
            });
        });
    }
    useLayoutEffect(() => {
        getKeywordList(keyword);
    }, [keyword]);

    return (
        <SearchResultLayout>
            <Text><q>&#39;{keyword}&#39;</q>에 대한 검색 결과입니다.</Text>
            <SmallText>총 {keywordList.totalCount}개 상품</SmallText>
            {
                keywordList.list.length > 0 ?
                <ListLayout>
                    {keywordList.list.map((item: Product, i) => {
                        return <Item key={i} {...item} />;
                    })}
                </ListLayout>
                    :
                <NoData>
                    <p>검색된 상품이 없습니다.</p>
                    <p>검색어를 변경해 보세요.</p>
                </NoData>
            }
        </SearchResultLayout>
    );
}

const SearchResultLayout = styled(ListSection)`
  margin-top: 50px;
`;

const Text = styled.p`
  font-size: 1.375rem;
  font-weight: 300;
  margin-bottom: 40px;
  q {
    font-size: 1.500rem;
    font-weight: 500;
  }
`;

const SmallText = styled(Text)`
  font-size: 1rem;
  text-align: start;
`;

const NoData = styled.div`
  margin-top: 30%;
  p {
    line-height: 1.5rem;
  }
`;