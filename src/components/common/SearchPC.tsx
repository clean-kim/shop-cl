import {ChangeEvent, MouseEvent, KeyboardEvent, useEffect, useRef, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import SearchModalPC from '@components/common/SearchModalPC';
import Storage from '@utils/Storage';
import {useNavigate} from 'react-router';
import {useAppDispatch, useAppSelector} from '@modules/store';
import {setCurrentSearchValue} from '@modules/searchSlice';
import {SearchButton, HiddenText} from '@assets/GlobalStyle';

export default function SearchPC() {
    const searchSelector = useAppSelector(state => state.searchSlice);
    const [isShow, setIsShow] = useState(false);
    const [searchValue, setSearchValue] = useState<string | number | readonly string[]>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = (e.target as HTMLInputElement);
        return setSearchValue(value);
    }
    const onClear = () => {
        setSearchValue('');
        if(inputRef.current) inputRef.current.focus();
    }
    const controlClearButton = () => {
        if(searchValue) {
            setIsShow(true);
        } else {
            setIsShow(false);
        }
    }

    const selectorValue = (value: string) => {
        setSearchValue(value);
    }
    useEffect(() => {
        selectorValue(searchSelector);
        controlClearButton();
    }, [searchSelector]);

    const onInputClick = (e: MouseEvent<HTMLDivElement>) => {
        if(modalRef.current) modalRef.current.style.visibility = 'visible';
        if(modalRef.current) modalRef.current.style.opacity = '1';
    }
    const onCloseModal = (e: MouseEvent<HTMLDivElement>) => {
        if(modalRef.current) modalRef.current.style.visibility = 'hidden';
        if(modalRef.current) modalRef.current.style.opacity = '0';
    }

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onSearchButtonClick = () => {
        Storage().arrayAdd(`search`, searchValue);
        navigate(`/search`);
        dispatch(setCurrentSearchValue(searchValue.toString()));
    }

    const searchBtnRef = useRef<HTMLButtonElement>(null);
    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchBtnRef.current?.click();
        }
    }
    return (
        <SearchLayout>
            <SearchInputBlock>
                <SearchModalPosition>
                    <SearchInput ref={inputRef} value={searchValue} onKeyPress={onKeyPress} onClick={onInputClick} onChange={onInputChange}/>
                    {isShow && <SearchClearButton onClick={onClear}/>}
                    <SearchModalBlock ref={modalRef}>
                        <SearchModalPC onMouseLeave={onCloseModal}/>
                    </SearchModalBlock>
                </SearchModalPosition>
                <SearchButton ref={searchBtnRef} onClick={onSearchButtonClick}>
                    <SearchIcon fontSize={`large`}/>
                    <HiddenText>검색</HiddenText>
                </SearchButton>
            </SearchInputBlock>
        </SearchLayout>
    );
}

const SearchLayout = styled.div`
  position: relative;
  height: 50px;
  top: 0;
`;

const SearchModalPosition = styled.div`
  position: relative;
`;

const SearchClearButton = styled.button.attrs({type: 'button'})`
  position: absolute;
  top: 0;
  right: 0;
  width: 35px;
  height: 50px;
  background: url(https://img.icons8.com/pastel-glyph/2x/cancel.png) center center no-repeat;
  background-size: 50%;
  border: none;
  outline: none;
  cursor: pointer;
`;

const SearchInputBlock = styled.div`
  display: flex;
`;

const SearchModalBlock = styled.div`
  visibility: hidden;
  opacity: 0;
`;

const SearchInput = styled.input.attrs({
    type: 'search',
    placeholder: 'Search',
    name: 'search'
})`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid var(--primary);
  border-radius: 15px;
  width: 35.1563vw;
  height: 50px;
  text-indent: 0.9375rem;
  padding-right: 35px;
  
  &:hover {
    background: var(--ui-01);
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;
