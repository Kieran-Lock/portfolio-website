<script lang="ts">
    import Pages from "$lib/components/Pages.svelte";
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
        HomePage,
        ExperiencePage,
        ProjectsPage,
        SkillsPage
    ]
</script>

<AppShell class="font-leagueSpartan" slotPageContent="overflow-y-hidden">
    <svelte:fragment slot="header">
        <AppBar background="bg-transparent" gridColumns="grid-cols-3" slotDefault="place-self-center">
            <svelte:fragment slot="lead"><span></span></svelte:fragment>
            <ScrollUpArrows pageStore={pageStore} class="pt-10 {$pageStore > 0 ? 'visible' : 'invisible'}" href="#page-experience" />
        </AppBar>
    </svelte:fragment>

    <Pages pages={pages} bind:pageStore={pageStore} />

    <svelte:fragment slot="footer">
        <Footer pages={pages} pageStore={pageStore} />
    </svelte:fragment>
</AppShell>
