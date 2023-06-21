import styled from "styled-components";
import Navbar from "./Navbar";
import HeaderInner from '@components/common/HeaderInner';

export default function Header() {
    return (
        <HeaderLayout>
            <HeaderInner />
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
  width: 100%;
  margin: 0 auto;

  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: 0px 1px 1px var(--border400);

  @media only screen and (max-width:768px) {
    top: 0;
    right: 0;

    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

`;

