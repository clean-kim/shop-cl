import {useMediaQuery} from "react-responsive";

interface ElementProps {
    elem: JSX.Element;
}

export const M = ({elem}: ElementProps) => {
    const isMobile = useMediaQuery({
        query: '(max-width:768px)'
    });
    return <>{isMobile && elem}</>
}

export const PC = ({elem}: ElementProps) => {
    const isPC = useMediaQuery({
        query: '(min-width:1024px)'
    });
    return <>{isPC && elem}</>
}


