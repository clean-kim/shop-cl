import styled from "styled-components";
import {Margin} from "@assets/GlobalStyle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function EmptyCart() {

    return (
        <EmptyCartLayout>
            <div>
                <ShoppingCartOutlinedIcon style={{fontSize: "80px"}}/>
            </div>
            <EmptyText>장바구니가 비었습니다.</EmptyText>
            <Margin mt={35}>
                <GoShop href="/">쇼핑하러 가기</GoShop>
            </Margin>
        </EmptyCartLayout>
    );
}

const EmptyCartLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc((var(--vh, 100vh) * 100) - 160px);
  
  @media only screen and (max-width: 768px) {
    height: calc((var(--vh, 100vh) * 100) - 90px);
  }
`;

const EmptyText = styled.p`
  font-weight: 600;  
  font-size: 20px;
  margin-top: 20px;
`;

const GoShop = styled.a`
  padding: 15px 20px;
  border-radius: 25px;
  background: var(--primary);
  color: var(--text-06);
`;