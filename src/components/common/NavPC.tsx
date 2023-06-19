import {NavItem, NavItemList} from "@components/common/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from 'react';

export default function NavPC(props: NavItemList & { pathname: string }) {
    const [nav, setNav] = useState<NavItemList>({list: []});
    const [pathname, setPathname] = useState<string>('');
    useEffect(() => {
        setNav({list: props.list});
        setPathname(props.pathname);
    }, [props]);

    return (
        <NavList>
            {
                nav.list.map((item: NavItem, index) => {
                    return (<Item key={index} pathname={pathname} value={item.value}>
                        <Anchor to={item.link}>{item.value}</Anchor>
                    </Item>);
                })
            }
        </NavList>
    )
}

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

const Item = styled.li<Partial<NavItem> & { pathname: string }>`
  border-left: 4px solid ${({pathname, value}) => value && pathname === value.toLowerCase() ? `var(--primary)` : `transparent`};
  border-right: 4px solid ${({pathname, value}) => value && pathname === value.toLowerCase() ? `var(--primary)` : `transparent`};
  padding: 0 5px;

  &:hover {
    border-left-color: var(--primary);
    border-right-color: var(--primary);
  }
`;

const Anchor = styled(Link)`
  font-size: 24px;
  font-weight: 700;
`;