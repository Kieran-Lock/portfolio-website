<script lang="ts">
    import ScrollDownArrows from "$lib/components/ScrollDownArrows.svelte";
    import { AppBar } from "@skeletonlabs/skeleton";
    import type { Page, PageStore } from "$lib/stores/scrollSnap";
    import ContactIcons from "$lib/components/ContactIcons.svelte";
    import { fade } from "svelte/transition";

    export let pages: Page[]
    export let pageStore: PageStore
</script>

<AppBar background="" gridColumns="grid-cols-3" slotDefault="place-self-center" slotLead="h-full">
    <svelte:fragment slot="lead">
        <div class="flex h-full items-end  px-1.5 py-1">
            <span class="font-extralight text-sm italic">© 2023 Kieran Lock. All rights reserved.</span>
        </div>
    </svelte:fragment>
    <ScrollDownArrows pageStore={pageStore} class="pb-10 {$pageStore < pages.length - 1 ? 'visible' : 'invisible'}" />
    <svelte:fragment slot="trail">
        {#if $pageStore}
            <div class="flex flex-row justify-end w-full pr-20" in:fade={{ delay: 100, duration: 300 }} out:fade={{ duration: 250 }}>
                <ContactIcons />
            </div>
        {/if}
    </svelte:fragment>
</AppBar>
