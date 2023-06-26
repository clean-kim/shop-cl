import {useParams} from 'react-router';

export default function SearchResult() {

    const {title} = useParams();
    console.log('title: ', title);
    return <></>;
}