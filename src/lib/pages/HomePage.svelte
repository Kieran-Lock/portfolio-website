<script lang="ts">
    import Typed from "$lib/components/Typed.svelte";
    import ContactIcons from "$lib/components/ContactIcons.svelte";

    const typedTextStrings = [
        "Software / Web Developer.",
        "Proficient with Svelte + React.",
        "Located in England, UK."
    ]
    const typingSpeed = 20
    const readTime = 1_000
</script>

<div class="flex flex-col items-center justify-center gap-8 h-fit min-h-full p-8">
    <div class="flex flex-col gap-4 items-center text-center">
        <h1 class="font-extrabold text-5xl sm:text-6xl">Kieran Lock</h1>
        <Typed class="text-2xl sm:text-4xl" strings={typedTextStrings} forwardInterval={typingSpeed} backInterval={typingSpeed} readTime={readTime} />
    </div>
    <hr class="!border-t-4" />
    <ContactIcons width="3em" height="3em" allowWrap class="gap-8" />
</div>
