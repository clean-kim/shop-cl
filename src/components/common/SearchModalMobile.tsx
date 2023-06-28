import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {MouseEvent, KeyboardEvent, useEffect, useRef, useState, ChangeEvent} from 'react';
import instance from '@api/axios';
import Storage from '@utils/Storage';
import ReactModal, {Styles} from 'react-modal';
import {useNavigate} from 'react-router';
import {useAppDispatch, useAppSelector} from '@modules/store';
import {setCurrentSearchValue} from '@modules/searchSlice';

interface SearchModalMobileProps {
    isModalOpen: boolean;
    onRequestClose(): void;
}

interface SearchRank {
    rank: number;
    value: string;
}

export default function SearchModalMobile({isModalOpen, onRequestClose}: SearchModalMobileProps) {
    // const searchSelector = useAppSelector(state => state.searchSlice);
    const [isShow, setIsShow] = useState(false);
    const [searchValue, setSearchValue] = useState<string | number | readonly string[]>('');
    const [rankList, setRankList] = useState<SearchRank[]>([]);

    const getSearchRank = () => {
        instance.get('/searchRank').then(res => {
            setRankList(
                res.data.map((item: any) => { return {rank: item.rank, value: item.value}})
            );
        });
    }
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const getRecentSearch = () => {
        setSearchHistory(Storage().getArray('search').reverse());
    }
    useEffect(() => {
        getSearchRank();
        getRecentSearch();
    }, []);

    // 검색 내역 개별 삭제
    const onClickRemoveHistory = (e: MouseEvent<HTMLButtonElement>) => {
        removeHistory(e.currentTarget.value);
    }
    const removeHistory = (value: string) => {
        Storage().removeArray('search', value);
    }
    // 검색 내역 전체 삭제
    const onClickRemoveAllHistory = (e: MouseEvent<HTMLButtonElement>) => {
        Storage().remove('search');
    }

    const onClick = () => {
        onRequestClose();
    }
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = (e.target as HTMLInputElement);
        return setSearchValue(value);
    }

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onSearchButtonClick = () => {
        Storage().arrayAdd(`search`, searchValue);
        navigate(`/search`);
        dispatch(setCurrentSearchValue(searchValue.toString()));
        onRequestClose();
    }

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            onSearchButtonClick();
        }
    }
    return (
        <ReactModal
            isOpen={isModalOpen}
            onRequestClose={onRequestClose}
            contentLabel={'Search Mobile Modal'}
            ariaHideApp={false}
            style={ModalStyle}
            >
            <ModalLayout>
                <SearchInputForm>
                    <div>
                        <input type='text' placeholder={`Search`} value={searchValue} onKeyPress={onKeyPress} onChange={onInputChange} />
                    </div>
                    <button onClick={onClick}>취소</button>
                </SearchInputForm>
                <Latest>
                    <Title>최근 검색어</Title>
                    <HistoryList>
                        {
                            searchHistory.length > 0
                            ?
                                searchHistory.map((item, i) => {
                                    return (
                                        <HistoryItem key={i}>
                                            <HistoryBlock>
                                                <Link to={`/search/${item}`}>
                                                    <p>{item}</p>
                                                </Link>
                                                <RemoveButton value={item} onClick={onClickRemoveHistory} />
                                            </HistoryBlock>
                                        </HistoryItem>
                                    );
                                })
                            :
                                <Item>최근 검색어 내역이 없습니다.</Item>
                        }
                    </HistoryList>
                </Latest>
                <Latest>
                    <Title>인기 검색어</Title>
                    <List>
                        {
                            rankList.length > 0 && rankList.map((item: SearchRank) => {
                                return (
                                    <Item key={item.rank}>
                                        <Link to={``}>
                                            <em>{item.rank}</em>
                                            <p>{item.value}</p>
                                        </Link>
                                    </Item>
                                )
                            })
                        }
                    </List>
                </Latest>
            </ModalLayout>
        </ReactModal>
    );
}

const ModalLayout = styled.div`
    padding: 0 12px;
`;

const SearchInputForm = styled.form`
  height: 50px;
  width: 100%;
  padding: 8px 0;
  position: relative;
  
  div {
      position: relative;
      margin-right: 43px;
  }
  
  input {
    width: 100%;
    height: 34px;
    background: var(--ui-03);
    border-radius: 15px;
    margin-right: 32px;
    text-indent: 0.9375rem;
    color: var(--primary);
  }
  input::placeholder {
    color: var(--text-04);
    font-weight: 600;
  }
  
  button {
    position: absolute;
    top: 8px;
    right: 0;
    width: 32px;
    height: 34px;
    color: var(--primary);
    cursor: pointer;
  }
`;

const Latest = styled.div`
  margin-top: 0.875rem;
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

const HistoryList = styled(List)`
  margin-top: 10px;
  display: flex;
  flex-wrap: nowrap;
  gap: 0.625rem;
`;

const HistoryItem = styled.li`
  font-size: 14px;
  font-weight: 300;
  border-radius: 15px;
  background: var(--ui-03);
  height: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RemoveButton = styled.button.attrs({type: 'button'})`
  width: 14px;
  height: 14px;
  background: url(https://img.icons8.com/pastel-glyph/2x/cancel.png) center center no-repeat;
  background-size: 14px;
  background-color: var(--border100);
  border-radius: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  
  @media only screen and (max-width: 768px) {
    margin-left: 7px;
  }
`;

const ModalStyle: Styles = {
    overlay: {
        height: '100%',
        width: '100%',
        background: 'var(--ui-background)',
        zIndex: 99,
        touchAction: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    content: {
        height: '100%',
        width: '100%',
        inset: 0,
        padding: 0,
        borderTop: '1px solid var(--border100)'
    }
};