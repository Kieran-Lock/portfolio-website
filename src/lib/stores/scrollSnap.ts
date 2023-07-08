import {get, writable} from "svelte/store";
import type {SvelteComponent} from "svelte";
import type {Writable} from "svelte/store";

const createIndexStore = (pagesInfo: {id: string, component: SvelteComponent}[]) => {
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

const createIdStore = (pagesInfo: {id: string, component: SvelteComponent}[], indexStore: Writable<number>) => {
    const idStore = writable(pagesInfo[0].id)
    ret
}

const createPagesStores = (pagesInfo: {id: string, component: SvelteComponent}[]) => {
    const indexStore = createIndexStore(pagesInfo)
    const idStore = createIdStore(pagesInfo, indexStore)

}



export default page
