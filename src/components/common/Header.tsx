import styled from "styled-components";
import Navbar from "./Navbar";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function Header() {
    return (
        <HeaderLayout>
            <Top>
                <a href="/">
                    <img src="/cl.png" alt="logo" style={{width: '30px'}}/>
                </a>
                <div>
                    <button><SearchIcon /></button>
                    <button><ShoppingCartCheckoutIcon /></button>
                </div>
            </Top>
            <Navbar />
        </HeaderLayout>
    );
}

const HeaderLayout = styled.header`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: var(--ui-background);
  height: 50px;

  @media only screen and (max-width:768px) {
    position: fixed;
    top: 0;
    right: 0;
  }

`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;