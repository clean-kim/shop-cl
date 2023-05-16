export default function Storage() {
    const {localStorage} = window;
    const prefix = 'cl';

    const get = (key: string) => {
        localStorage.getItem(`${prefix+key}`);
    }
    const set = (key: string, value: any) => {
        localStorage.setItem(`${prefix+key}`, value);
    }
    const remove = (key: string) => {
        localStorage.removeItem(`${prefix+key}`);
    }

    return {
        get,
        set,
        remove
    };
}