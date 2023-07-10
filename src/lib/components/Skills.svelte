<script>
    import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
    import SkillSection from "$lib/components/SkillSection.svelte";

    export let skillsSections = []
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
