import {get, writable} from "svelte/store";
import type {SvelteComponent} from "svelte";

const createPagesStore = (pagesInfo: {id: string, component: SvelteComponent}[]) => {
    const indexStore = writable(0)
    return {
        subscribe: indexStore.subscribe,
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

export default createPagesStore
