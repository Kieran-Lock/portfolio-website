<script lang="ts">
    import Typed from "typed.js";
    import { onMount } from "svelte";

    export let strings: string[] = []
    export let forwardInterval = 50
    export let backInterval = 50
    export let loop = true
    export let showCursor = true
    export let cursorCharacter = "|"
    export let container = ""
    export let readTime = 700
    export let startDelay = 0

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let typed: Typed | null = null
    onMount(() => {
        typed = new Typed(".typed-js", {
            strings: strings,
            typeSpeed: forwardInterval,
            backSpeed: backInterval,
            loop: loop,
            showCursor: showCursor,
            cursorChar: cursorCharacter,
            backDelay: readTime,
            startDelay: startDelay
        })

        const { class: classProp } = $$props;
        for (const element of document.getElementsByClassName("typed-cursor"))
            element.classList.add(classProp)
    })
</script>

<div class={container}>
    <span class="typed-js {$$props.class}"></span>
</div>
