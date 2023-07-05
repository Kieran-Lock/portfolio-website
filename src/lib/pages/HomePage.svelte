<script lang="ts">
    import Typed from "$lib/components/Typed.svelte";
    import ContactIcons from "$lib/components/ContactIcons.svelte";

    const typedTextStrings = [
        "Software / Web Developer.",
        "Proficient with React and Svelte.",
        "Located in England, UK."
    ]
    const typingSpeed = 20
    const readTime = 1_000
</script>

<div class="flex flex-col h-full items-center justify-center gap-8">
    <div class="flex flex-col gap-4 items-center">
        <h1 class="font-extrabold text-6xl">Kieran Lock</h1>
        <Typed class="text-4xl" strings={typedTextStrings} forwardInterval={typingSpeed} backInterval={typingSpeed} readTime={readTime} />
    </div>
    <hr class="!border-t-4" />
    <ContactIcons />
</div>
