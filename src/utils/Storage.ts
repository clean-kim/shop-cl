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
        if(arr.length > 0) {
            if (!arrayContains(arr, value)) {
                const idx = arr.indexOf(value);
                arr.splice(idx, 1);
            }
        }
        arr.push(value);
        set(key, JSON.stringify(arr));
    }

    const getArray = (key: string) => {
        return JSON.parse(localStorage.getItem(`${prefix+key}`) ?? '[]');
    }

    const arrayContains = (arr: [], target: string): boolean => {
        let result = true;
        arr.forEach(item => {
            if(item === target) result = false;
        });
        return result;
    }

    const removeArray = (key: string, value: string) => {
        const arr = JSON.parse(localStorage.getItem(`${prefix+key}`) ?? '[]');
        set(key, JSON.stringify(arr.filter((item: any) => item !== value)));
    }

    return {
        get,
        set,
        remove,
        arrayAdd,
        getArray,
        removeArray
    };
}