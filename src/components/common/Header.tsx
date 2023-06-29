import styled from "styled-components";
import Navbar from "./Navbar";
import HeaderInner from '@components/common/HeaderInner';
import {useRef} from 'react';
import {useMediaQuery} from 'react-responsive';

export default function Header() {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    const navRef = useRef<HTMLElement>(null);

    // 메뉴바 스크롤 이벤트
    let prevScrollPos = window.scrollY;
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if(navRef.current) {
            if (prevScrollPos > currentScrollPos) {
                navRef.current.style.top = '0';
            }
            else {
                if (isMobile) {
                    navRef.current.style.top = '-50px';
                } else {
                    navRef.current.style.top = '-75px';
                }
            }
            navRef.current.style.transition = 'all 300ms';
        }
        prevScrollPos = currentScrollPos;
    }

    return (
        <HeaderLayout ref={navRef}>
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

