// функция для сохранения объектов в память браузера
// (данные в этом хранилище сохраняться даже при перезагрузке компа):
export function saveState<T>(key: string, state: number) {
    const stateAsNumber = JSON.stringify(state);
    localStorage.setItem(key, stateAsNumber)
}

// функция для получения сохранённого объекта в памяти браузера:
export function restoreState<T>(key: string, defaultState: T) {
    const stateAsNumber = localStorage.getItem(key);
    if (stateAsNumber !== null) defaultState = JSON.parse(stateAsNumber) as T;
    return defaultState;
}