import {ChangeEvent, useEffect, useRef, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';
import Modal, {Styles} from 'react-modal';
import ReactDom from 'react-dom';
import ModalPortal from '@components/common/ModalPortal';
import ReactModal from 'react-modal';

export default function Search() {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    const [isShow, setIsShow] = useState(false);
    const [searchValue, setSearchValue] = useState<string | number | readonly string[]>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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

    const [modalIsOpen, setIsOpen] = useState(false);
    const onInputClick = () => {
        setIsOpen(true);
    }
    const onCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <SearchInputBlock id="modal-root">
                <SearchInput ref={inputRef} value={searchValue} onChange={onChange} onClick={onInputClick}/>
                {isShow && <SearchClearButton onClick={onClear}/>}
                {modalIsOpen &&
                    <ReactModal
                        isOpen={modalIsOpen}
                        ariaHideApp={false}
                        onRequestClose={onCloseModal}
                        contentLabel="Modal"
                        // style={ModalStyle}
                        overlayClassName={`SearchModal__Overlay`}
                        className={`SearchModal`}
                    >
                    </ReactModal>
                }
            </SearchInputBlock>
            <SearchButton><SearchIcon fontSize={isMobile ? `medium` : `large`}/></SearchButton>
        </>
    );
}

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
  position: relative;
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
  
  @media only screen and (max-width: 768px) {
    margin: 0 8px;
  }
`;

const ModalStyle: Styles = {
    content: {
        position: 'absolute',
        background: '#61dafb',
        top: 0,
        left: 0,
        zIndex: 100,
        width: '35.1563vw'
    },
    overlay: {
        background: 'transparent'
    }
}