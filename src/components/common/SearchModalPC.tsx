import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {MouseEvent, useCallback, useEffect, useState} from 'react';
import instance from '@api/axios';
import Storage from '@utils/Storage';
import {Flex} from '@assets/GlobalStyle';

interface SearchModalProps {
    onMouseLeave: (e: MouseEvent<HTMLDivElement>) => void;
}

interface SearchRank {
    rank: number;
    value: string;
}

export default function SearchModalPC({onMouseLeave}: SearchModalProps) {

    const [rankList, setRankList] = useState<SearchRank[]>([]);
    const getSearchRank = () => {
        instance.get('/searchRank').then(res => {
            setRankList(
                res.data.map((item: any) => { return {rank: item.rank, value: item.value}})
            );
        });
    }
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const getRecentSearch = useCallback(() => {
        setSearchHistory([...Storage().getArray('search').reverse()]);
    }, []);

    useEffect(() => {
        getSearchRank();    // 인기 검색어 리스트
        getRecentSearch();  // 최근 검색어 리스트
    }, []);

    const removeHistory = (value: string) => {
        Storage().removeArray('search', value);
        getRecentSearch();
    }

    // 검색 내역 전체 삭제
    const onClickRemoveAllHistory = (e: MouseEvent<HTMLButtonElement>) => {
        Storage().remove('search');
        getRecentSearch();
    }
    // 검색 내역 개별 삭제
    const onClickRemoveHistory = (e: MouseEvent<HTMLButtonElement>) => {
        removeHistory(e.currentTarget.value);
    }

    const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
        const {lastChild} = e.currentTarget;
        if(lastChild && lastChild.textContent) {
            Storage().arrayAdd(`search`, lastChild.textContent);
            getRecentSearch();
        }
    }

    return (
        <Modal onMouseLeave={onMouseLeave}>
            <Latest>
                <Flex justifyContent={`space-between`}>
                    <Title>최근 검색어</Title>
                    {searchHistory.length > 0 && <RemoveAllButton onClick={onClickRemoveAllHistory}>전체삭제</RemoveAllButton>}
                </Flex>
                <List>
                    {
                        searchHistory.length > 0
                        ?
                            searchHistory.map((item, i) => {
                                return (
                                    <Item key={i}>
                                        <HistoryBlock>
                                            <Link to={`/search?keyword=${item}`} onClick={onClick}>
                                                <p>{item}</p>
                                            </Link>
                                            <RemoveButton value={item} onClick={onClickRemoveHistory} />
                                        </HistoryBlock>
                                    </Item>
                                );
                            })
                        :
                            <Item>최근 검색어 내역이 없습니다.</Item>
                    }
                </List>
            </Latest>
            <Latest>
                <Title>인기 검색어</Title>
                <List>
                    {
                        rankList.length > 0 && rankList.map((item: SearchRank) => {
                            return (
                                <Item key={item.rank}>
                                    <Link to={`/search?keyword=${item.value}`} onClick={onClick}>
                                        <em>{item.rank}</em>
                                        <p>{item.value}</p>
                                    </Link>
                                </Item>
                            )
                        })
                    }
                </List>
            </Latest>
        </Modal>
    );
}

const Modal = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  border: 1px solid var(--border400);
  border-radius: 0;
  margin-top: 5px;
  padding: 25px 0.9375rem 0;
  top: 50px;
  left: 0;
  background: var(--ui-background);
  color: var(--primary);
  display: flex;
`;

const Latest = styled.div`
  width: 50%;
  &:first-child {
    padding-right: 0.9375rem;
  }
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
`;

const List = styled.ul`
  margin-top: 10px;
`;

const Item = styled.li`
  margin-bottom: 10px;
  padding-left: 8px;
  font-size: 14px;
  font-weight: 300;
  word-break: break-word;

  a {
    display: flex;

    em {
      font-style: italic;
      width: 20px;
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const HistoryBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const RemoveAllButton = styled.button.attrs({type: 'button'})`
  font-size: 12px;
  font-weight: 300;
  border: none;
  outline: none;
  color: var(--primary);
  cursor: pointer;
`;

const RemoveButton = styled.button.attrs({type: 'button'})`
  width: 30px;
  height: 14px;
  background: url(https://img.icons8.com/pastel-glyph/2x/cancel.png) center center no-repeat;
  background-size: 50%;
  border: none;
  outline: none;
  cursor: pointer;
`;