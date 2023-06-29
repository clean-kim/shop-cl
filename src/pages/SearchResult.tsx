import styled from 'styled-components';
import {useEffect, useLayoutEffect, useState} from 'react';
import Product, {GetProductInterface, ProductList} from '@interface/Product';
import instance from '@api/axios';
import {useSearchParams} from 'react-router-dom';

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
            <p>{`${keyword}에 대한 검색 결과입니다.`}</p>
            <div>
                {keywordList.list.map((item: Product, i) => {
                    return <div key={i}>{item.title}</div>;
                })}
            </div>
        </SearchResultLayout>
    );
}

const SearchResultLayout = styled.div`
  height: 100vh;
  margin-top: 30px;
`;