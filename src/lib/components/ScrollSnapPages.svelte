<script lang="ts">
    import type Component from "svelte/types/compiler/compile/Component";
    import createPagesStore from "$lib/stores/scrollSnap";
    import { onMount } from "svelte";

    export let pages: { id: string, component: Component }[] = []
    export let scrollbar = false
    export let pageStore = createPagesStore(pages)
    let scrollDiv
    let pageComponent
    const toPage = (pageIndex: number) => {
        console.log(pageIndex)
        scrollDiv.scroll({ top: pageIndex * pageComponent.offsetHeight, behavior: "smooth" })
    }
    const handleScrolling = () => {
        pageStore.set(Math.floor(scrollDiv.scrollTop / pageComponent.offsetHeight))
    }
    onMount(() => {
        pageStore.subscribe((newPage) => {
            toPage(newPage)
        })
    })

</script>

<div class="h-full w-full snap-y snap-mandatory overflow-y-scroll {scrollbar ? '' : 'hide-scrollbar'}" bind:this={scrollDiv} on:scroll={handleScrolling}>
    {#each pages as page}
        <div class="min-h-full max-h-full snap-start overflow-hidden {$$props.class}" bind:this={pageComponent}>
            <svelte:component this={page.component} />
        </div>
    {/each}
</div>
