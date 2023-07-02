import {useAppSelector} from "@modules/store";
import {Link} from "react-router-dom";
import {Badge, BadgeProps, IconButton, ThemeProvider} from "@mui/material";
import {theme} from "@assets/GlobalStyle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {useMediaQuery} from "react-responsive";

export default function ShoppingCart() {
    const [cartLength, setCartLength] = useState(0);
    const cartSelector = useAppSelector(state => state.cartSlice);
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });
    useEffect(() => {
        setCartLength(cartSelector.length);
    }, [cartSelector]);
    return (
        <Link to='/cart' aria-label={`장바구니 바로가기`}>
            <ThemeProvider theme={theme}>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cartLength} color="info">
                        <ShoppingCartOutlinedIcon fontSize={isMobile ? `medium` : `large`} color={`primary`}/>
                    </StyledBadge>
                </IconButton>
            </ThemeProvider>
        </Link>
    )
}

const StyledBadge = styled(Badge)<BadgeProps>({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid #fff`,
        padding: '0 4px',
    },
});
