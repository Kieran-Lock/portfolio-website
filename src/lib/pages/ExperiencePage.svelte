<script lang="ts">
    import GamingIcon from "~icons/mdi/controller"
    import RacingCarIcon from "~icons/emojione-monotone/racing-car"
    import GitHubIcon from "~icons/mdi/github"
    import SchoolIcon from "~icons/fluent-emoji-high-contrast/school"
    import BookStackIcon from "~icons/simple-icons/bookstack"
    import MortarBoardIcon from "~icons/game-icons/graduate-cap"
    import ProfileCard from "$lib/components/ProfileCard.svelte";

    const workExperience = [
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
    const educationHistory = [
        {
            title: "Brighton College",
            description: "I was accepted into Brighton College after passing the 11+ entrance exam, and awarded an academic scholarship. I later passed 11 GCSEs, receiving a 7 (A) in french, an 8 (A*) in further maths, and a 9 (A**) in the nine remaining subjects.",
            startDate: "September 2016",
            endDate: "June 2021",
            role: "11+ Admission & GCSEs",
            icon: SchoolIcon
        },
        {
            title: "Brighton College Sixth Form",
            description: "I sat 4 A Levels throughout sixth form, and wrote an A* EPQ dissertation on the future of Augmented Reality technology. For my A Levels, I received an A in Further Maths and Physics, and an A* in both Maths and Computer Science.",
            startDate: "September 2021",
            endDate: "June 2023",
            role: "A Levels + EPQ",
            icon: BookStackIcon
        },
        {
            title: "Bath University",
            description: "Starting in 2024, I will begin a BSc course in Computer Science at Bath University. Bath University currently places 6th in the UK league tables for Computer Science, and has consistently ranked in the top 10 for several years.",
            startDate: "October 2024",
            endDate: "June 2027",
            role: "Computer Science BSc",
            icon: MortarBoardIcon
        }
    ]
</script>

<div class="flex flex-col items-center justify-center gap-12 h-fit min-h-full py-8">
    <h1 class="font-extrabold text-6xl">Experience</h1>
    <div class="flex flex-row justify-center">
        <ProfileCard workExperience={workExperience} educationHistory={educationHistory} />
    </div>
</div>
