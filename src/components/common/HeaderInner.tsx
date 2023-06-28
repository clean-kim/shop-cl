import {Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';
import {useMediaQuery} from 'react-responsive';
import SearchPC from '@components/common/SearchPC';
import {PC, M} from '@components/common/MediaQuery';
import SearchMobile from '@components/common/SearchMobile';

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
                <PC elem={<SearchPC />} />
                <M elem={<SearchMobile />} />
                <CartIconBlock>
                    <Link to='/cart' aria-label={`장바구니 바로가기`}><ShoppingCartOutlinedIcon fontSize={isMobile ? `medium` : `large`}/></Link>
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
    height: 50px;
    min-height: 50px;
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