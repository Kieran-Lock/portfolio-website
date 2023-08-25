import { get, type Writable, writable } from "svelte/store";
import type { ComponentType } from "svelte";

export interface PageStore extends Writable<number> {
    heights: () => number[]
    nextPage: () => void
    prevPage: () => void
    toPage: (pageIndex: number, b: boolean) => void
    _handleScroll: () => void
}

const createPageStore = (pages: ComponentType[], lazyContainerElement: () => HTMLDivElement): PageStore => {
    const indexStore = writable(0)
    const pageHeights = () => [window.scrollY + lazyContainerElement().getBoundingClientRect().top, ...pages.map((_, i) => (lazyContainerElement().children[i] as HTMLDivElement).offsetHeight).map((sum => value => sum += value)( window.scrollY + lazyContainerElement().getBoundingClientRect().top))]
    const scroll = (pageIndex: number) => {
			  lazyContainerElement().scroll({ top: pageHeights()[pageIndex], behavior: 'smooth' });
		}
    return {
        heights: pageHeights,
        ...indexStore,
        nextPage: () => {
            const currentIndex = get(indexStore)
            if (currentIndex < pages.length - 1) {
                scroll(currentIndex + 1)
            }
        },
        prevPage: () => {
            const currentIndex = get(indexStore)
            if (get(indexStore) > 0) {
                scroll(currentIndex - 1)
            }
        },
        toPage: (pageIndex: number) => {
            if (pageIndex >= 0 && pageIndex < pages.length && pageIndex !== get(indexStore)) {
                scroll(pageIndex)
            }
        },
        _handleScroll: () => {
            indexStore.set(
                pageHeights().findLastIndex(
                    (height) => lazyContainerElement().scrollTop + window.scrollY + lazyContainerElement().getBoundingClientRect().top + window.innerHeight / 3 >= height
                )
            )
				}
    }
}

export default createPageStore
