import {useParams} from 'react-router';
import styled from 'styled-components';
import {Simulate} from 'react-dom/test-utils';
import {useEffect, useState} from 'react';
import Product, {GetProductInterface, ProductList} from '@interface/Product';
import instance from '@api/axios';
import {useAppDispatch, useAppSelector} from '@modules/store';
import searchSlice, {setCurrentSearchValue} from '@modules/searchSlice';

export default function SearchResult() {
    const searchValue = useAppSelector(state => state.searchSlice);
    console.log('result searchValue >> ', searchValue);

    const [searchResultList, setSearchResultList] = useState<ProductList>({list: [], totalCount: 0});
    const getSearchList = (title: string) => {
        instance.get(`/products?title_like=${title}`).then(res => {
            setSearchResultList({
                list: GetProductInterface(res.data),
                totalCount: res.data.length
            });
        });
    }
    const dispatch = useAppDispatch();
    useEffect(() => {
        getSearchList(searchValue.toString() ?? '');
        return () => {
            dispatch(setCurrentSearchValue(''));
        }
    }, [searchValue]);


    return (
        <SearchResultLayout>
            <p>{`${searchValue}에 대한 검색 결과입니다.`}</p>
            <div>
                {searchResultList.list.map((item: Product, i) => {
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