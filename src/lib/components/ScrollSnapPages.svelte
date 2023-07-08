<script lang="ts">
    import type Component from "svelte/types/compiler/compile/Component";
    import createPagesStore from "$lib/stores/scrollSnap";

    export let pages: { id: string, component: Component }[] = []
    export let scrollbar = false
    export let pageStore = createPagesStore(pages)
    const toPage = (pageId: string, pages: { id: string, component: Component }[]) => {
        if (pageId === pages[0].id) return
        window.location.replace(`#page-${toHash(pageId)}`)
    }
    pageStore.subscribe((newPage) => {
        toPage(pages[newPage].id, pages)
    })
    const toHash = (str: string): number => {
        let hash = 0
        for (let i = 0, len = str.length; i < len; i++) {
            let chr = str.charCodeAt(i)
            hash = (hash << 5) - hash + chr
            hash |= 0
        }
        return hash
    }
</script>

<div class="h-full w-full snap-y snap-mandatory overflow-y-scroll {scrollbar ? '' : 'hide-scrollbar'}">
    {#each pages as page}
        <div id="page-{toHash(page.id)}" class="min-h-full max-h-full snap-start overflow-hidden {$$props.class}">
            <svelte:component this={page.component} />
        </div>
    {/each}
</div>
