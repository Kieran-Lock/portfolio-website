<script lang="ts">
    export let icon
    export let href = "/"
    export let name = ""
    export let width = "1em"
    export let height = "1em"

</script>

<a class="icon-btn p-2 {$$props.class}" href={href} aria-label={name}>
    <svelte:component this={icon} width={width} height={height} />
</a>
