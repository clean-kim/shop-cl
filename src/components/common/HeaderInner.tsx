import {Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';
import Search from '@components/common/Search';

export default function HeaderInner() {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    return (
        <Top>
            <Link to="/">
                <Logo src="/cl.png" alt="logo" />
            </Link>
            <InheritBlock>
                <Search />
                <CartIconBlock>
                    <Circle>
                        <Link to='/cart' aria-label={`장바구니 바로가기`}><ShoppingCartOutlinedIcon fontSize={isMobile ? `medium` : `large`}/></Link>
                    </Circle>
                </CartIconBlock>
            </InheritBlock>
        </Top>
    );
}

const Top = styled.div`
  position: sticky;
  height: 75px;
  min-height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 10vw 0;
  
  @media only screen and (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const Logo = styled.img`
  width: 3.125em;
  height: 3.125em;
  
  @media only screen and (max-width: 768px) {
    width: 1.875em;
    height: 1.875em;
  }
`;

const InheritBlock = styled.div`
  display: inherit;
`;

const CartIconBlock = styled.div`
  display: inherit;
  align-items: center;
  margin-left: 5px;
`;

const Circle = styled.div`
  background: transparent;
  
  &:hover {
    background: var(--ui-01);
  }
  
  border: 2px solid var(--primary);
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3.5px;
  padding-left: 3.5px;

  @media only screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;