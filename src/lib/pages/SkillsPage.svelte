<script lang="ts">
    import SvelteIcon from "~icons/logos/svelte-icon"
    import ReactIcon from "~icons/logos/react"
    import TailwindIcon from "~icons/skill-icons/tailwindcss-dark"
    import DotNetIcon from "~icons/skill-icons/dotnet"
    import FlaskIcon from "~icons/skill-icons/flask-dark"
    import Skills from "$lib/components/Skills.svelte";

    const skillsSections = [
        {
            name: "Web Development",
            skills: [
                {
                    name: "Svelte / SvelteKit",
                    description: "A modern JavaScript framework for building efficient and reactive user interfaces",
                    icon: SvelteIcon,
                    abilityLevel: 10
                },
                {
                    name: "React / Next.js",
                    description: "A powerful JavaScript library and framework for building scalable and performant web applications",
                    icon: ReactIcon,
                    abilityLevel: 9
                },
                {
                    name: "Tailwind CSS",
                    description: "A utility-first CSS framework for rapidly building custom and responsive user interfaces",
                    icon: TailwindIcon,
                    abilityLevel: 10
                },
                {
                    name: "ASP.NET (MVC)",
                    description: "A server-side web application framework for building dynamic and data-driven websites using .NET",
                    icon: DotNetIcon,
                    abilityLevel: 8
                },
                {
                    name: "Flask",
                    description: "A lightweight web framework for building Python-based applications with simplicity and flexibility",
                    icon: FlaskIcon,
                    abilityLevel: 9
                }
            ]
        },
        {
            name: "Languages",
            skills: [
                {

                }
            ]
        }
    ]
</script>

<div class="flex flex-col h-full items-center gap-12 mt-28">
    <h1 class="font-extrabold text-6xl">Skills</h1>
    <div class="container">
        <Skills skillsSections={skillsSections} />
    </div>
</div>
