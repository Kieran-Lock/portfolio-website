<script lang="ts">
    import ExperienceTimeline from "$lib/components/ExperienceTimeline.svelte"
    import GamingIcon from "~icons/mdi/controller"
    import RacingCarIcon from "~icons/emojione-monotone/racing-car"
    import GitHubIcon from "~icons/mdi/github"

    const experiences = [
        {
            title: "Omni Digital Technologies",
            description: "I undertook a traineeship at OmniDigital Technologies, gaining significant experience using Unreal Engine, Blender, and Unity for asset design, games programming, scene rendering, and 3D modelling.",
            startDate: "June 2021",
            endDate: "August 2021",
            role: "Assistant Studio Technician",
            icon: GamingIcon
        },
        {
            title: "Open Source Developer",
            description: "I have been an active member of the open source community on GitHub for several years, building various Python packages and contributing to other larger projects regularly, alongside other like-minded engineers.",
            startDate: "September 2019",
            endDate: "Present",
            role: "Open Source Contributor",
            icon: GitHubIcon
        },
        {
            title: "Racing League Tools",
            description: "I revised the website for Racing League Tools, in order to better highlight the features of their sim-racing league administration app, and help to drive further downloads and Discord server participation.",
            startDate: "December 2022",
            endDate: "Present",
            role: "Full-Stack Web Developer",
            icon: RacingCarIcon
        }
    ]
</script>

<div class="flex flex-col items-center justify-center gap-12 h-fit min-h-full py-8">
    <h1 class="font-extrabold text-6xl">Experience</h1>
    <ExperienceTimeline experiences={experiences} />
</div>
