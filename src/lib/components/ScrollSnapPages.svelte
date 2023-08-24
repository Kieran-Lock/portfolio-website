<script lang="ts">
    import createPageStore, { type Page } from "$lib/stores/scrollSnap";
    import { onMount } from "svelte";

    export let pages: Page[] = []
    export let scrollbar = false
    export let pageStore = createPageStore(pages)

    let scrollDiv: HTMLDivElement
    let pageComponent: HTMLDivElement

    const toPage = (pageIndex: number) => {
        scrollDiv.scroll({ top: pageIndex * pageComponent.offsetHeight, behavior: "smooth" })
    }
    const handleScrolling = () => {
        if (scrollDiv.scrollTop % pageComponent.offsetHeight !== 0) {
            return
        }
        pageStore.set(Math.floor(scrollDiv.scrollTop / pageComponent.offsetHeight))
    }

    onMount(() => {
        pageStore.subscribe(toPage)
    })

</script>

<div class="flex flex-col h-full w-full snap-y snap-mandatory overflow-y-scroll {scrollbar ? '' : 'hide-scrollbar'}" bind:this={scrollDiv} on:scroll={handleScrolling}>
    {#each pages as page}
        <div class="min-h-full max-h-full snap-start overflow-hidden {$$props.class}" bind:this={pageComponent}>
            <svelte:component this={page.component} />
        </div>
    {/each}
</div>
