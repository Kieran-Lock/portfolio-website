<script lang='ts'>
	import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
	import "@skeletonlabs/skeleton/styles/skeleton.css";
	import "../app.pcss";
  import { AppBar, AppShell } from "@skeletonlabs/skeleton";
  import ScrollDownArrows from "$lib/components/ScrollDownArrows.svelte";
</script>

<AppShell class="font-leagueSpartan">
    <slot />
    <svelte:fragment slot="pageFooter">
        <AppBar background="" gridColumns="grid-cols-3" slotDefault="place-self-center" slotLead="h-full">
            <svelte:fragment slot="lead">
                <div class="flex h-full items-end  px-1.5 py-1">
                    <span class="font-extralight text-sm italic">© 2023 Kieran Lock. All rights reserved.</span>
                </div>
            </svelte:fragment>
            <ScrollDownArrows class="pb-10" href="#page-experience" />
        </AppBar>
    </svelte:fragment>
</AppShell>
