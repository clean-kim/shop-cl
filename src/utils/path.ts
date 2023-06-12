export const GetPathInfo = (pathname: string) => {
    return pathname.split('/')[2];
}