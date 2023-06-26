import {ChangeEvent, MouseEvent, useEffect, useRef, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';
import SearchModal from '@components/common/SearchModal';
import Storage from '@utils/Storage';

export default function Search() {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

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

    useEffect(() => {
        controlClearButton();
    }, [searchValue]);

    const onInputClick = (e: MouseEvent<HTMLDivElement>) => {
        if(modalRef.current) modalRef.current.style.visibility = 'visible';
        if(modalRef.current) modalRef.current.style.opacity = '1';
    }
    const onCloseModal = (e: MouseEvent<HTMLDivElement>) => {
        if(modalRef.current) modalRef.current.style.visibility = 'hidden';
        if(modalRef.current) modalRef.current.style.opacity = '0';
    }

    const onSearchButtonClick = () => {
        Storage().arrayAdd(`search`, searchValue);
    }
    return (
        <SearchLayout>
            <SearchInputBlock>
                <SearchModalPosition>
                    <SearchInput ref={inputRef} value={searchValue} onClick={onInputClick} onChange={onInputChange}/>
                    {isShow && <SearchClearButton onClick={onClear}/>}
                    <SearchModalBlock ref={modalRef}>
                        <SearchModal onMouseLeave={onCloseModal}/>
                    </SearchModalBlock>
                </SearchModalPosition>
                <SearchButton onClick={onSearchButtonClick}><SearchIcon fontSize={isMobile ? `medium` : `large`}/></SearchButton>
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

const SearchButton = styled.button.attrs({
    type: "button"
})`
  width: 3.125rem;
  cursor: pointer;
  
  @media only screen and (max-width: 768px) {
    margin: 0 8px;
  }
`;