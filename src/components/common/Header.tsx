import styled from "styled-components";
import Navbar from "./Navbar";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Header() {
    return (
        <HeaderLayout>
            <Top>
                <a href="/">
                    <img src="/cl.png" alt="logo" style={{width: '30px'}}/>
                </a>
                <div>
                    <SearchButton><SearchIcon /></SearchButton>
                    <a href='/cart' aria-label={`장바구니 바로가기`}><ShoppingCartOutlinedIcon /></a>
                </div>
            </Top>
            <Navbar />
        </HeaderLayout>
    );
}

const HeaderLayout = styled.header`
  position: sticky;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: var(--ui-background);

  @media only screen and (max-width:768px) {
    top: 0;
    right: 0;
  }

`;

const Top = styled.div`
  position: sticky;
  height: 50px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const SearchButton = styled.button.attrs({
    type: "button"
})`
  margin: 0 8px;
`;