<script lang="ts">
    import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
    import SkillSection from "$lib/components/SkillSection.svelte";
    import type { ComponentType } from "svelte";

    interface Skill {
        name: string
        description: string
        icon: ComponentType
        abilityLevel: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    }
    interface SkillSection {
        name: string
        skills: Skill[]
    }

    export let skillsSections: SkillSection[] = []

    let skillsGroupIndex = 0
</script>

<div class="flex flex-row justify-between">
    <div class="container grid grid-rows-5 gap-8">
        {#each skillsSections[skillsGroupIndex].skills as skill}
            <SkillSection name={skill.name} description={skill.description} icon={skill.icon} abilityLevel={skill.abilityLevel} />
        {/each}
    </div>
    <div class="w-full max-w-[25%] card p-4 text-token h-fit">
        <ListBox>
            {#each skillsSections as section, i}
                <ListBoxItem bind:group={skillsGroupIndex} name={section.name} value={i}>{section.name}</ListBoxItem>
            {/each}
        </ListBox>
    </div>
</div>
