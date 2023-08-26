<script lang="ts">
    import type { ComponentType } from "svelte";

    export let icon: ComponentType
    export let href = "/"
    export let name = ""
    export let width: string
    export let height: string
    export let downloadName = false
</script>

<a class="btn p-2 {$$props.class ?? ''}" href={href} aria-label={name} target="_blank" download={downloadName}>
    <svelte:component this={icon} width={width} height={height} />
</a>
