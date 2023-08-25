<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte"
    import PythonIcon from "~icons/logos/python"
    import SQLiteIcon from "~icons/skill-icons/sqlite"
    import PyPIIcon from "~icons/devicon/pypi"
    import LinuxIcon from "~icons/skill-icons/linux-light"
    import SvelteIcon from "~icons/logos/svelte-icon"
    import DotNetIcon from "~icons/skill-icons/dotnet"
    import PostgreSQLIcon from "~icons/logos/postgresql"
    import WebsocketIcon from "~icons/logos/websocket"
    import JavascriptIcon from "~icons/logos/javascript"
    import TailwindIcon from "~icons/skill-icons/tailwindcss-dark"
    import RedditIcon from "~icons/logos/reddit-icon"
    import YouTubeIcon from "~icons/logos/youtube-icon"

    const projects = [
        {
            name: "Racing League Tools",
            summary: "The website for a sim-racing league administration app.",
            description: "I designed and implemented a website for Racing League Tools, which prompts visitors to download the app, join the associated Discord server, and support the project. The website showcases the application's features, and provides an intuitive interface for sharing rendering themes for the application with other users online.",
            href: "https://racingleaguetools.com/",
            technologies: [SvelteIcon, DotNetIcon, PostgreSQLIcon]
        },
        {
            name: "ScanDocs",
            summary: "An automatic documentation tool for Python projects.",
            description: "I published a Python library capable of creating comprehensive documentation for Python projects of any complexity. ScanDocs uses Python's dynamic nature to efficiently index a Python package, and build a fully-featured documentation website, complete with customizable themes and content, and complex searching functionality.",
            href: "https://github.com/Kieran-Lock/ScanDocs",
            technologies: [SvelteIcon, TailwindIcon, PyPIIcon]
        },
        {
            name: "SQLiteFrame",
            summary: "A lightweight SQLite ORM library developed for Python.",
            description: "I created and maintain SQLiteFrame, a Python ORM for SQLite which uses advanced Python techniques to provide the most simple and intuitive API possible. Developers can connect to local databases, build and execute complex CRUD queries, and build schemas from existing databases for easy ORM migration.",
            href: "https://github.com/Kieran-Lock/SQLiteFrame",
            technologies: [PythonIcon, SQLiteIcon, PyPIIcon]
        },
        {
            name: "Reddit GOD",
            summary: "An automatic YouTube Shorts video generator.",
            description: "I developed a fully-featured YouTube Shorts video generator, which uses the Reddit API to find topical discussion threads to narrate. Reddit GOD has customizable video subjects, lengths, and background footage, and has the capability to automatically upload batches of videos to the YouTube platform, with zero human intervention.",
            href: "https://github.com/Kieran-Lock/Reddit-GOD",
            technologies: [PythonIcon, RedditIcon, YouTubeIcon]
        },
        {
            name: "XtermGUI",
            summary: "An expressive GUI framework for xterm terminals.",
            description: "I developed and maintain XtermGUI, a Python framework for creating interactive GUIs in xterm terminals. By decoding streams of ANSI escape codes, XtermGUI provides the tools to build complex and aesthetic applications in the terminal with a Python API, including an input system (with mouse events), and layered GUI support.",
            href: "https://github.com/Kieran-Lock/XtermGUI",
            technologies: [PythonIcon, LinuxIcon, PyPIIcon]
        },
        {
            name: "AutoKahoot",
            summary: "A Kahoot quiz bot with customizable features.",
            description: "I created AutoKahoot, a powerful quiz bot, by reverse engineering the Kahoot.it website, which is capable of achieving a perfect score in live Kahoot quiz games. By using CometD, AutoKahoot uses websockets to pose as a legitimate player, whilst factoring in customizable response times to emulate convincing human-like behaviour.",
            href: "https://github.com/Kieran-Lock/AutoKahoot",
            technologies: [PythonIcon, WebsocketIcon, JavascriptIcon]
        }
    ]
</script>

<div class="flex flex-col h-fit items-center justify-center gap-12 min-h-full p-8">
    <h1 class="font-extrabold text-6xl">Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
        {#each projects as project}
            <ProjectCard name={project.name} summary={project.summary} description={project.description} href={project.href} technologyIcons={project.technologies} />
        {/each}
    </div>
</div>
