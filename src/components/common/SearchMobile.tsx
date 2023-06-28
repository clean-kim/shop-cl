import SearchIcon from '@mui/icons-material/Search';
import {SearchButton, HiddenText} from '@assets/GlobalStyle';
import {MouseEvent, useState} from 'react';
import SearchModalMobile from '@components/common/SearchModalMobile';

export default function SearchMobile() {

    const [isModalOpen, setModalOpen] = useState(false);
    const onRequestClose = () => {
        setModalOpen(false);
    }
    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        setModalOpen(true);
    }

    return (
        <>
            <SearchButton onClick={onClick}>
                <SearchIcon fontSize={`medium`}/>
                <HiddenText>검색</HiddenText>
            </SearchButton>
            {isModalOpen && <SearchModalMobile isModalOpen={isModalOpen} onRequestClose={onRequestClose}/>}
        </>
    );
}
