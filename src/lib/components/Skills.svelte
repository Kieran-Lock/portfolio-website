<script lang="ts">
    import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
    import SkillSection from "$lib/components/SkillSection.svelte";
    import type { ComponentType } from "svelte";

    interface Skill {
        name: string
        description: string
        icon: ComponentType
        abilityLevel: number
    }
    interface SkillSection {
        name: string
        skills: Skill[]
    }

    export let skillsSections: SkillSection[] = []

    let skillsGroupIndex = 0
</script>

<div class="flex flex-col-reverse md:flex-row justify-evenly container">
    <div class="grid grid-rows-5 gap-8 md:max-w-[50%]">
        {#each skillsSections[skillsGroupIndex].skills as skill}
            <SkillSection name={skill.name} description={skill.description} icon={skill.icon} abilityLevel={skill.abilityLevel} />
        {/each}
    </div>
    <span class="p-8 md:p4"></span>
    <div class="w-full md:max-w-[25%] card p-4 text-token h-fit">
        <ListBox>
            {#each skillsSections as section, i}
                <ListBoxItem bind:group={skillsGroupIndex} name={section.name} value={i}>{section.name}</ListBoxItem>
            {/each}
        </ListBox>
    </div>
</div>
