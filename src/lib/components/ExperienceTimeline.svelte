<script lang="ts">
    import {
        Timeline,
        TimelineItem,
        TimelineSeparator,
        TimelineDot,
        TimelineConnector,
        TimelineContent,
        TimelineOppositeContent
    } from "svelte-vertical-timeline";
    import type { ComponentType } from "svelte";

    interface Experience {
        title: string,
        description: string,
        startDate: string,
        endDate: string,
        role: string,
        icon: ComponentType
    }

    export let experiences: Experience[]
</script>

<div class="container lg:max-w-[75%]">
    <Timeline position="left">
        {#each experiences as experience}
            <TimelineItem>
                <TimelineOppositeContent slot="opposite-content">
                    <h4>{experience.startDate} - {experience.endDate}</h4>
                    <p>{experience.role}</p>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style="background-color:rgba(0, 0, 0, 0); border-width: 0">
                        <svelte:component this={experience.icon} height="4em" width="4em" class="p-1" />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={'height: 150px;'}>
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                </TimelineContent>
            </TimelineItem>
        {/each}
    </Timeline>
</div>
