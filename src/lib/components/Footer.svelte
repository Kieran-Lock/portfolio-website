<script lang="ts">
    import ScrollDownArrows from "$lib/components/ScrollDownArrows.svelte";
    import { AppBar } from "@skeletonlabs/skeleton";
    import type { Page, PageStore } from "$lib/stores/scrollSnap";
    import ContactIcons from "$lib/components/ContactIcons.svelte";
    import { fade } from "svelte/transition";

    export let pages: Page[]
    export let pageStore: PageStore
</script>

<AppBar background="bg-transparent" gridColumns="grid-cols-3" slotDefault="place-self-center" slotLead="h-full" slotTrail="h-full" class="flex">
    <svelte:fragment slot="lead">
        <div class="flex h-full items-end px-1.5 py-1 invisible md:visible">
            <span class="font-extralight text-sm italic">© 2023 Kieran Lock. All rights reserved.</span>
        </div>
    </svelte:fragment>
    <ScrollDownArrows pageStore={pageStore} class="pb-2 {$pageStore < pages.length - 1 ? 'visible' : 'invisible'}" />
    <svelte:fragment slot="trail">
        {#if $pageStore > 1}
            <div class="flex flex-row justify-end w-full h-full pr-16 items-end invisible md:visible" in:fade={{ delay: 100, duration: 300 }} out:fade={{ duration: 250 }} >
                <ContactIcons class="h-full items-end" />
            </div>
        {/if}
    </svelte:fragment>
</AppBar>
