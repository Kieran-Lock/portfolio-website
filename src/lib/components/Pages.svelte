<script lang="ts">
    import createPageStore from "$lib/stores/scrollSnap";
    import type { ComponentType } from "svelte";
    import { onMount } from "svelte";

    export let pages: ComponentType[] = []
    export let pageStore = createPageStore(pages, () => containerElement)

    let containerElement: HTMLDivElement

    onMount(() => console.log(pageStore.heights()))
</script>

<div class="overflow-y-scroll h-full hide-scrollbar" bind:this={containerElement} on:scroll={pageStore._handleScroll}>
    {#each pages as page}
        <svelte:component this={page} />
    {/each}
</div>
