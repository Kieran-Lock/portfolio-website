<script lang="ts">
    import OpenIcon from "~icons/ion/open-outline"
    import type { ComponentType } from "svelte";

    export let name = ""
    export let summary = ""
    export let description = ""
    export let href = ""
    export let technologyIcons: ComponentType[] = []
</script>


<a class="card bg-initial card-hover overflow-hidden" href={href} target="_blank">
    <div class="p-4 space-y-4">
        <header class="flex justify-between">
            <h3 class="h3 capitalize" data-toc-ignore >{name}</h3>
            <OpenIcon />
        </header>

        <h6 class="h6">{summary}</h6>
        <article>
            <p>{description}</p>
        </article>
        <footer class="flex flex-row gap-12 justify-center">
            {#each technologyIcons as icon}
                <svelte:component this={icon} height="2.5em" width="2.5em" />
            {/each}
        </footer>
    </div>
</a>
