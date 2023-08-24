<script lang="ts">
    import type { ComponentType } from "svelte";

    export let icon: ComponentType
    export let href = "/"
    export let name = ""
    export let width: string
    export let height: string

</script>

<a class="btn p-2 {$$props.class ?? ''}" href={href} aria-label={name} target="_blank">
    <svelte:component this={icon} width={width} height={height} />
</a>
