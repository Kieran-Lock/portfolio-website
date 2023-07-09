<script lang="ts">
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import PythonIcon from "~icons/logos/python"
    import SQLiteIcon from "~icons/skill-icons/sqlite"
    import PyPIIcon from "~icons/logos/pypi"
    import AsciiIcon from "~icons/file-icons/asciidoc"
    import LinuxIcon from "~icons/skill-icons/linux-light"
    import SvelteIcon from "~icons/logos/svelte-icon"
    import ASPNetCoreIcon from "~icons/vscode-icons/file-type-asp"
    import PostgresqlIcon from "~icons/logos/postgresql"
    import ReactIcon from "~icons/logos/react"
    import NextJSIcon from "~icons/logos/nextjs-icon"
    import FirebaseIcon from "~icons/logos/firebase"
    import RestAPIIcon from "~icons/material-symbols/api"
    import JavascriptIcon from "~icons/logos/javascript"

    const projects = [
        {
            name: "Racing League Tools",
            summary: "A website designed to showcase the features of a sim-racing league administration app.",
            description: "I designed and implemented a website for Racing League Tools, utilizing Svelte, ASP.NET Core, and PostgreSQL. In this project, I demonstrated my expertise in front-end and back-end development, creating a seamless user experience and facilitating app adoption. The website provides an overview of the app's capabilities and encourages visitors to download the app and join the associated Discord server.",
            href: "https://racingleaguetools.com/",
            technologies: [SvelteIcon, ASPNetCoreIcon, PostgresqlIcon]
        },
        {
            name: "Filmmaker / Producer Portfolio",
            summary: "A captivating personal showreel website created for a filmmaker/producer.",
            description: "I crafted an engaging and visually appealing platform to showcase the impressive producing and filmmaking work of the client. Leveraging Svelte, I created a user-friendly experience that highlights the client's talents and storytelling abilities. The Filmmaker / Producer Portfolio website presents a curated selection of the client's portfolio, offering visitors a glimpse into captivating film projects and captivating storytelling.",
            href: "/",
            technologies: [SvelteIcon]
        },
        {
            name: "Sort-It",
            summary: "A sorting visualizer application that demonstrates various sorting algorithms.",
            description: "I developed Sort-It, a dynamic web application using React, Next.js, and Firebase. This project involved implementing different sorting algorithms and providing customizable features such as speed control, array generation methods, and playback control. By showcasing my proficiency in front-end development and algorithm visualization, Sort-It offers users a hands-on experience to gain insights into the efficiency and behavior of popular sorting techniques.",
            href: "/",
            technologies: [ReactIcon, NextJSIcon, FirebaseIcon]
        },
        {
            name: "SQLiteFrame",
            summary: "A lightweight SQLite Object-Relational Mapping (ORM) library created in Python.",
            description: "I created and maintain SQLiteFrame, a Python library that simplifies interaction with SQLite databases. By leveraging object-oriented programming and SQL queries, I developed an intuitive and efficient ORM framework. SQLiteFrame demonstrates my expertise in Python development and database management, providing developers with a seamless way to perform CRUD operations and leverage the power of SQLite in their applications.",
            href: "https://github.com/Kieran-Lock/SQLiteFrame",
            technologies: [PythonIcon, SQLiteIcon, PyPIIcon]
        },
        {
            name: "Graphnix",
            summary: "A powerful graphics and input framework for creating interactive GUIs in NIX consoles using Python.",
            description: "I developed and maintain Graphnix, a Python framework for creating interactive GUIs in NIX consoles. By utilizing advanced ASCII processing and mouse/keyboard input handling, I designed visually appealing interfaces. Graphnix showcases my expertise in Python programming, ASCII manipulation, and console-based application development. It offers developers a highly customizable solution for building engaging user interfaces in NIX console environments.",
            href: "https://github.com/Kieran-Lock/graphnix",
            technologies: [PythonIcon, AsciiIcon, LinuxIcon]
        },
        {
            name: "KahootIt",
            summary: "A versatile quiz bot designed for Kahoot games with customizable features.",
            description: "I created KahootIt, a powerful quiz bot capable of achieving a perfect score in Kahoot games. This project involved implementing customizable features such as random response delays and simulating player browser client behavior. By showcasing my expertise in Python programming, RESTful APIs, and network packet manipulation, KahootIt offers users flexibility and customization options to enhance their Kahoot gaming experience.",
            href: "/",
            technologies: [PythonIcon, RestAPIIcon, JavascriptIcon]
        }
    ]
</script>

<div class="flex flex-col h-full items-center justify-center gap-12">
    <h1 class="font-extrabold text-6xl">Projects</h1>
    <div class="grid grid-cols-3 gap-4">
        {#each projects as project}
            <ProjectCard name={project.name} summary={project.summary} description={project.description} href={project.href} technologyIcons={project.technologies} />
        {/each}
    </div>
</div>
