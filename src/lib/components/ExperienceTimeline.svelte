<script>
    import {
        Timeline,
        TimelineItem,
        TimelineSeparator,
        TimelineDot,
        TimelineConnector,
        TimelineContent,
        TimelineOppositeContent
    } from "svelte-vertical-timeline";
    import GamingIcon from "~icons/mdi/controller"
    import RacingCarIcon from "~icons/emojione-monotone/racing-car"
    import CameraIcon from "~icons/gg/camera"

    const experiences = [
        {
            title: "OmniDigital Technologies",
            description: "Undertook a traineeship at OmniDigital Technologies, gaining expertise in asset design, Unity programming, Unreal Engine rendering, and Blender utilization for game development.",
            startDate: "June 2021",
            endDate: "August 2021",
            role: "Traineeship",
            icon: GamingIcon
        },
        {
            title: "Racing League Tools",
            description: "Developed an engaging website for Racing League Tools, highlighting the features of their sim-racing league administration app, and driving downloads and Discord server participation.",
            startDate: "December 2022",
            endDate: "Present",
            role: "Web Developer",
            icon: RacingCarIcon
        },
        {
            title: "SilverBox Multimedia",
            description: "Designed and developed a visually compelling show-reel website for a filmmaker/producer at SilverBox Multimedia, showcasing their producing and filmmaking work.",
            startDate: "June 2023",
            endDate: "Present",
            role: "Freelance Web Developer",
            icon: CameraIcon
        }
    ]
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
