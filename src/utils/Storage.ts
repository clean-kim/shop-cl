export default function Storage() {
    const {localStorage} = window;
    const prefix = 'cl_';
    const ArrDefaultMaxSize = 10;

    const get = (key: string) => {
        return localStorage.getItem(`${prefix+key}`);
    }
    const set = (key: string, value: any) => {
        localStorage.setItem(`${prefix+key}`, value);
    }
    const remove = (key: string) => {
        localStorage.removeItem(`${prefix+key}`);
    }

    const arrayAdd = (key: string, value: any) => {
        const arr = JSON.parse(localStorage.getItem(`${prefix+key}`) ?? '[]');
        if(arr.length > 0 && arrayContains(arr, value)) {
            arr.push(value);
            set(key, JSON.stringify(arr));
        } else {
            set(key, JSON.stringify([value]));
        }
    }

    const getArray = (key: string) => {
        return JSON.parse(localStorage.getItem(`${prefix+key}`) ?? '[]');
    }

    const arrayContains = (arr: [], target: string): boolean => {
        arr.forEach(item => {
            return item !== target;
        });
        return true;
    }

    return {
        get,
        set,
        remove,
        arrayAdd,
        getArray
    };
}