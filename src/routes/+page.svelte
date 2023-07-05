<script>
    import ScrollSnapPages from "$lib/components/ScrollSnapPages.svelte";
    import HomePage from "$lib/pages/HomePage.svelte";
    import ExperiencePage from "$lib/pages/ExperiencePage.svelte";
    import ProjectsPage from "$lib/pages/ProjectsPage.svelte";
    import SkillsPage from "$lib/pages/SkillsPage.svelte";

    const pages = [
        {
            id: "home",
            component: HomePage
        },
        {
            id: "experience",
            component: ExperiencePage
        },
        {
            id: "projects",
            component: ProjectsPage
        },
        {
            id: "skills",
            component: SkillsPage
        }
    ]
</script>

<ScrollSnapPages pages={pages} class="container flex flex-col mx-auto justify-center" />
