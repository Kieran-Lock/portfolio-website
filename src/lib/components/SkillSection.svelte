<script lang="ts">
    import { ProgressBar, popup, type PopupSettings } from '@skeletonlabs/skeleton';
    import type { ComponentType } from "svelte";

    export let name = ""
    export let description = ""
    export let icon: ComponentType
    export let abilityLevel = 0

    const toHash = (str: string): number => {
        let hash = 0
        for (let i = 0, len = str.length; i < len; i++) {
            let chr = str.charCodeAt(i)
            hash = (hash << 5) - hash + chr
            hash |= 0
        }
        return hash
    }
    const skillPopupSettings: PopupSettings = {
        event: "hover",
        target: `skillPopup-${toHash(name)}`,
        placement: "right",
        middleware: {
            offset: 48
        }
    }
</script>

<div>
    <div class="w-fit rounded-sm [&>*]:pointer-events-none" use:popup={skillPopupSettings}>
        <div class="flex flex-col w-80 gap-6">
            <div class="flex flex-row gap-4 items-end">
                <svelte:component this={icon} height="3em" width="3em" />
                <div class="flex flex-col container">
                    <h1>{name}</h1>
                </div>
            </div>
            <ProgressBar label={name} value={abilityLevel} max={10} />
        </div>
    </div>
    <div class="card p-4 w-72 shadow-xl" data-popup="skillPopup-{toHash(name)}">
        <div>
            <p>{name}</p>
            <p>{description}</p>
        </div>
    </div>
</div>
