import {ChangeEvent, useEffect, useRef, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';
import {flushSync} from 'react-dom';
import {Flex} from '@assets/GlobalStyle';
import {Link} from 'react-router-dom';

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

    const [modalIsOpen, setIsOpen] = useState(false);
    const onInputClick = () => {
        flushSync(() => {
            // setIsOpen(true);
            // if(inputRef.current) inputRef.current.focus();
            if(modalRef.current) modalRef.current.style.display = 'block';
        });
    }
    const onCloseModal = () => {
        // setIsOpen(false);
        if(modalRef.current) modalRef.current.style.display = 'none';
    }
    return (
        <SearchLayout>
            <SearchInputBlock>
                <div>
                    <SearchInput ref={inputRef} value={searchValue} onChange={onInputChange} onFocus={onInputClick}/>
                    {isShow && <SearchClearButton onClick={onClear}/>}
                </div>
                <SearchButton><SearchIcon fontSize={isMobile ? `medium` : `large`}/></SearchButton>
            </SearchInputBlock>
            <Modal ref={modalRef} onBlur={onCloseModal}>
                <Flex justifyContent={`normal`}>
                    <Latest>
                        <Title>최근 검색어</Title>
                        <List>
                            <Item>
                                <Link to={``}>
                                    <em>1</em>
                                    <p>dfsasdfasdfsadfasjkhdfkjasdhfkljashfkljashfkjlahlkdfsafd</p>
                                </Link>
                            </Item>
                        </List>
                    </Latest>
                    <Latest>
                        <Title>인기 검색어</Title>
                        <List>
                            <Item>
                                <Link to={``}>
                                    <em>1</em>
                                    <p>dfsasdfasdfsadfasjkhdfkjasdhfkljashfkljashfkjlahlkdfsafd</p>
                                </Link>
                            </Item>
                        </List>
                    </Latest>
                </Flex>
            </Modal>
        </SearchLayout>
    );
}

const SearchLayout = styled.div`
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

const Modal = styled.div`
  position: absolute;
  width: 35.1563vw;
  height: 500px;
  border: 1px solid var(--border400);
  border-radius: 0;
  margin-top: 5px;
  padding: 25px 0.9375rem 0;
  top: 50px;
  left: 0;
  background: var(--ui-background);
  display: none;
  gap: 12px;
  color: var(--primary);
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
  margin-bottom: 5px;
  padding-left: 5px;
  
  a {
    display: flex;
    font-size: 14px;
    font-weight: 300;
    em {
      font-style: italic;
      width: 20px;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

// const ModalStyle: Styles = {
//     overlay: {
//         // position: 'relative',
//         background: 'transparent',
//         width: '100%',
//         height: '100%',
//         minHeight: '100%',
//     },
//     content: {
//         position: 'absolute',
//         background: 'var(--ui-background)',
//         top: '50px',
//         left: 0,
//         marginTop: '5px',
//         width: '35.1563vw',
//         height: '500px',
//         borderRadius: '0',
//         border: '1px solid var(--border400)'
//     }
// }