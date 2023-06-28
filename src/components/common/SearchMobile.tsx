import SearchIcon from '@mui/icons-material/Search';
import {SearchButton, HiddenText, theme} from '@assets/GlobalStyle';
import {MouseEvent, useState} from 'react';
import SearchModalMobile from '@components/common/SearchModalMobile';
import {ThemeProvider} from '@mui/material';

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
                <ThemeProvider theme={theme}>
                    <SearchIcon fontSize={`medium`} color={`primary`}/>
                </ThemeProvider>
                <HiddenText>검색</HiddenText>
            </SearchButton>
            {isModalOpen && <SearchModalMobile isModalOpen={isModalOpen} onRequestClose={onRequestClose}/>}
        </>
    );
}
