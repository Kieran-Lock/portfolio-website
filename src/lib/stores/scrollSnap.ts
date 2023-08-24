import { get, type Writable, writable } from "svelte/store";
import type { ComponentType } from "svelte";

export interface PageStore extends Writable<number> {
    nextPage: () => void
    prevPage: () => void
    toPage: (newPage: number) => void
}
export interface Page {
    id: string
    component: ComponentType
}

const createPageStore = (pagesInfo: {id: string, component: ComponentType}[]): PageStore => {
    const indexStore = writable(0)
    return {
        ...indexStore,
        nextPage: () => {
            if (get(indexStore) < pagesInfo.length - 1) {
                indexStore.set(get(indexStore) + 1)
            }
        },
        prevPage: () => {
            if (get(indexStore) > 0) {
                indexStore.set(get(indexStore) - 1)
            }
        },
        toPage: (newPage: number) => {
            const storeValue = get(indexStore)
            if (storeValue > 0 && storeValue < pagesInfo.length - 1) {
                indexStore.set(newPage)
            }
        }
    }
}

export default createPageStore
