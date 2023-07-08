<script lang="ts">
    import DownChevronIcon from "~icons/tabler/chevron-down"
    export let pageStore
    export let arrows = 1
    export let text = ""

    const icons = Array.from({ length: arrows - 1 } , () => (DownChevronIcon))
</script>

<button type="button" class="flex flex-col items-center {$$props.class}" on:click={pageStore.nextPage}>
    <DownChevronIcon class="animate-bounce" width="3em" height="3em" />
    {#each icons as arrow}
        <svelte:component this={arrow} class="animate-bounce -mt-8" width="3em" height="3em" />
    {/each}
    <span class="animate-pulse font-light">{text}</span>
</button>
