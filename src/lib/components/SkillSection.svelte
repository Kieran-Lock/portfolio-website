<script>
    import { ProgressBar } from "@skeletonlabs/skeleton";

    export let name = ""
    export let description = ""
    export let icon
    export let abilityLevel = 0
</script>

<div class="flex flex-col w-80 gap-8">
    <div class="flex flex-row gap-4 items-center">
        <svelte:component this={icon} height="3em" width="3em" />
        <div class="flex flex-col container">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </div>
    <ProgressBar label={name} value={abilityLevel} max={10} />
</div>
