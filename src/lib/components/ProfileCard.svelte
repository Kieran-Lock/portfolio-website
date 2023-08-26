<script lang="ts">
    import { Avatar, RadioGroup, RadioItem } from "@skeletonlabs/skeleton";
    import ContactIcons from "$lib/components/ContactIcons.svelte";
    import ExperienceTimeline from "$lib/components/ExperienceTimeline.svelte";
    import type { ComponentType } from "svelte";

    interface Experience {
        title: string,
        description: string,
        startDate: string,
        endDate: string,
        role: string,
        icon: ComponentType
    }

    export let workExperience: Experience[]
    export let educationHistory: Experience[]

    let activeTimeline = workExperience
</script>

<div class="flex flex-col card container h-fit p-4 gap-4">
    <header class="flex justify-between">
        <div class="flex flex-col pl-8 sm:pl-0">
            <h3 class="text-xl">Kieran Lock</h3>
            <p class="text-lg">Software Developer</p>
            <p class="text-sm font-light mt-auto whitespace-nowrap">Studying Computer Science @ Bath University</p>
        </div>
        <Avatar class="invisible sm:visible" width="w-24" rounded="rounded-full" src="https://i.imgur.com/X3N3Akp.png" />
    </header>
    <section class="flex flex-col justify-end h-fit gap-6">
        <hr class="!border-t-2" />
        <div class="flex flex-col-reverse md:flex-row">
            <ExperienceTimeline experiences={activeTimeline} />
            <div class="whitespace-nowrap pr-6 flex md:block justify-center">
                <RadioGroup class="md:ml-auto mb-4" active="variant-filled-primary" hover="hover:variant-soft-primary">
                    <RadioItem bind:group={activeTimeline} name="timeline" value={workExperience}>Work Experience</RadioItem>
                    <RadioItem bind:group={activeTimeline} name="timeline" value={educationHistory}>Education</RadioItem>
                </RadioGroup>
            </div>
        </div>
    </section>
    <footer class="flex mt-auto justify-center">
        <ContactIcons class="gap-4 sm:gap-8" />
    </footer>
</div>
