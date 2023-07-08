<script>
    import ScrollSnapPages from "$lib/components/ScrollSnapPages.svelte";
    import HomePage from "$lib/pages/HomePage.svelte";
    import ExperiencePage from "$lib/pages/ExperiencePage.svelte";
    import ProjectsPage from "$lib/pages/ProjectsPage.svelte";
    import SkillsPage from "$lib/pages/SkillsPage.svelte";
    import { AppBar, AppShell } from "@skeletonlabs/skeleton";
    import ScrollDownArrows from "$lib/components/ScrollDownArrows.svelte";

    let pageStore
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

<AppShell class="font-leagueSpartan" slotPageContent="overflow-y-hidden">
    <ScrollSnapPages pages={pages} class="container flex flex-col mx-auto justify-center" bind:pageStore={pageStore} />

    <svelte:fragment slot="footer">
        <AppBar background="" gridColumns="grid-cols-3" slotDefault="place-self-center" slotLead="h-full">
            <svelte:fragment slot="lead">
                <div class="flex h-full items-end  px-1.5 py-1">
                    <span class="font-extralight text-sm italic">© 2023 Kieran Lock. All rights reserved.</span>
                </div>
            </svelte:fragment>
            <ScrollDownArrows pageStore={pageStore} class="pb-10" href="#page-experience" />
        </AppBar>
    </svelte:fragment>
</AppShell>
