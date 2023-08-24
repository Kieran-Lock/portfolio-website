<script lang="ts">
    import ScrollSnapPages from "$lib/components/ScrollSnapPages.svelte";
    import HomePage from "$lib/pages/HomePage.svelte";
    import ExperiencePage from "$lib/pages/ExperiencePage.svelte";
    import ProjectsPage from "$lib/pages/ProjectsPage.svelte";
    import SkillsPage from "$lib/pages/SkillsPage.svelte";
    import { AppBar, AppShell } from "@skeletonlabs/skeleton";
    import ScrollUpArrows from "$lib/components/ScrollUpArrows.svelte";
    import type { PageStore } from "$lib/stores/scrollSnap";
    import Footer from "$lib/components/Footer.svelte";

    let pageStore: PageStore
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
    <svelte:fragment slot="header">
        <AppBar background="" class gridColumns="grid-cols-3" slotDefault="place-self-center">
            <svelte:fragment slot="lead"><span></span></svelte:fragment>
            <ScrollUpArrows pageStore={pageStore} class="pt-10 {$pageStore > 0 ? 'visible' : 'invisible'}" href="#page-experience" />
        </AppBar>
    </svelte:fragment>

    <ScrollSnapPages pages={pages} class="container flex flex-col mx-auto" bind:pageStore={pageStore} />

    <svelte:fragment slot="footer">
        <Footer pages={pages} pageStore={pageStore} />
    </svelte:fragment>
</AppShell>
