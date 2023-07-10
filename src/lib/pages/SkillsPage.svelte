<script lang="ts">
    import SvelteIcon from "~icons/logos/svelte-icon"
    import ReactIcon from "~icons/logos/react"
    import TailwindIcon from "~icons/skill-icons/tailwindcss-dark"
    import DotNetIcon from "~icons/skill-icons/dotnet"
    import FlaskIcon from "~icons/skill-icons/flask-dark"
    import Skills from "$lib/components/Skills.svelte";
    import TypeScriptIcon from "~icons/skill-icons/typescript"
    import PythonIcon from "~icons/logos/python"
    import CSSIcon from "~icons/skill-icons/css"
    import CSharpIcon from "~icons/devicon/csharp"
    import RustIcon from "~icons/vscode-icons/file-type-rust"
    import FirebaseIcon from "~icons/logos/firebase"
    import SQLiteIcon from "~icons/skill-icons/sqlite"
    import PostgreSQLIcon from "~icons/logos/postgresql"
    import SQLAlchemyIcon from "~icons/devicon-plain/sqlalchemy"
    import GitHubIcon from "~icons/mdi/github"
    import GitIcon from "~icons/skill-icons/git"
    import JetBrainsIcon from "~icons/logos/jetbrains"
    import VSCodeIcon from "~icons/devicon/vscode"
    import GCPIcon from "~icons/skill-icons/gcp-light"
    import IconifyIcon from "~icons/simple-icons/iconify"
    import VercelIcon from "~icons/devicon/vercel"
    import TauriIcon from "~icons/skill-icons/tauri-dark"
    import ArduinoIcon from "~icons/skill-icons/arduino"

    const skillsSections = [
        {
            name: "Web Development",
            skills: [
                {
                    name: "Svelte / SvelteKit",
                    description: "A modern JavaScript framework for building efficient and reactive user interfaces with a focus on simplicity and performance.",
                    icon: SvelteIcon,
                    abilityLevel: 10
                },
                {
                    name: "React / Next.js",
                    description: "A powerful JavaScript library and framework for building scalable and performant web applications with an emphasis on component-based architecture.",
                    icon: ReactIcon,
                    abilityLevel: 9
                },
                {
                    name: "Tailwind CSS",
                    description: "A utility-first CSS framework that allows rapid building of custom and responsive user interfaces, providing a highly efficient workflow.",
                    icon: TailwindIcon,
                    abilityLevel: 10
                },
                {
                    name: "ASP.NET (MVC)",
                    description: "A server-side web application framework for building dynamic and data-driven websites using .NET, providing a robust and scalable solution for enterprise-level applications.",
                    icon: DotNetIcon,
                    abilityLevel: 8
                },
                {
                    name: "Flask",
                    description: "A lightweight web framework for building Python-based applications with simplicity and flexibility, allowing rapid development and easy integration with other libraries.",
                    icon: FlaskIcon,
                    abilityLevel: 9
                }
            ]
        },
        {
            name: "Languages",
            skills: [
                {
                    name: "TypeScript",
                    description: "A statically-typed superset of JavaScript that enables enhanced software development with strong type checking and improved tooling support.",
                    icon: TypeScriptIcon,
                    abilityLevel: 9
                },
                {
                    name: "Python",
                    description: "A versatile and readable programming language known for its simplicity, extensive libraries, and wide range of applications from web development to data analysis and artificial intelligence.",
                    icon: PythonIcon,
                    abilityLevel: 10
                },
                {
                    name: "CSS & HTML",
                    description: "The foundational languages that shape web development, providing structure and visual appeal to web pages by defining the content, structure, and style of a website.",
                    icon: CSSIcon,
                    abilityLevel: 9
                },
                {
                    name: "Rust",
                    description: "A systems programming language focused on memory safety, performance, and concurrency, ideal for building efficient and reliable applications in resource-constrained environments.",
                    icon: RustIcon,
                    abilityLevel: 6
                },
                {
                    name: "C Sharp",
                    description: "An object-oriented language developed by Microsoft, widely used for building Windows applications, web services, and game development with Unity.",
                    icon: CSharpIcon,
                    abilityLevel: 8
                }
            ]
        },
        {
            name: "Databases",
            skills: [
                {
                    name: "Firebase",
                    description: "A comprehensive platform for building web and mobile applications, providing scalable and real-time database solutions, user authentication, and cloud hosting.",
                    icon: FirebaseIcon,
                    abilityLevel: 10
                },
                {
                    name: "SQLite",
                    description: "A lightweight and embedded relational database management system ideal for local storage and small-scale applications with a focus on simplicity and portability.",
                    icon: SQLiteIcon,
                    abilityLevel: 10
                },
                {
                    name: "PostgreSQL",
                    description: "A powerful and open-source relational database management system known for its scalability, extensibility, and adherence to SQL standards.",
                    icon: PostgreSQLIcon,
                    abilityLevel: 9
                },
                {
                    name: "SQLAlchemy",
                    description: "A popular Python SQL toolkit and Object-Relational Mapping (ORM) library, providing a flexible and efficient way to interact with databases.",
                    icon: SQLAlchemyIcon,
                    abilityLevel: 8
                }
            ]
        },
        {
            name: "Development Tools",
            skills: [
                {
                    name: "GitHub",
                    description: "A web-based version control platform that enables collaborative software development, allowing teams to manage code repositories, track changes, and facilitate seamless collaboration.",
                    icon: GitHubIcon,
                    abilityLevel: 10
                },
                {
                    name: "Git",
                    description: "A distributed version control system used for tracking changes in source code during software development, providing an efficient and reliable way to manage codebases.",
                    icon: GitIcon,
                    abilityLevel: 8
                },
                {
                    name: "JetBrains IDEs",
                    description: "A suite of powerful integrated development environments (IDEs) such as IntelliJ IDEA and WebStorm, offering extensive tooling and features to streamline software development.",
                    icon: JetBrainsIcon,
                    abilityLevel: 9
                },
                {
                    name: "VS Code",
                    description: "A lightweight and highly extensible source code editor developed by Microsoft, widely used for web and software development with a vast ecosystem of extensions and plugins.",
                    icon: VSCodeIcon,
                    abilityLevel: 9
                }
            ]
        },
        {
            name: "Web Services",
            skills: [
                {
                    name:"Google Cloud Platform",
                    description: "A comprehensive suite of cloud computing services offered by Google, providing scalable and flexible solutions for building and deploying web applications and services.",
                    icon: GCPIcon,
                    abilityLevel: 8
                },
                {
                    name: "Iconify",
                    description: "A versatile icon framework that offers a vast collection of high-quality icons for web development, allowing developers to easily integrate and customize icons in their projects.",
                    icon: IconifyIcon,
                    abilityLevel: 9
                },
                {
                    name: "Vercel",
                    description: "A cloud platform for static and serverless deployment of web applications, providing an intuitive and seamless experience for deploying and scaling projects.",
                    icon: VercelIcon,
                    abilityLevel: 9
                }
            ]
        },
        {
            name: "Other Frameworks",
            skills: [
                {
                    name: "Tauri",
                    description: "A framework for building lightweight, cross-platform desktop applications using web technologies such as HTML, CSS, and JavaScript, enabling the development of native-like apps.",
                    icon: TauriIcon,
                    abilityLevel: 8
                },
                {
                    name: "Arduino",
                    description: "An open-source electronics platform that allows for the creation of interactive projects and prototypes, providing a versatile and accessible platform for hardware development.",
                    icon: ArduinoIcon,
                    abilityLevel: 7
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
