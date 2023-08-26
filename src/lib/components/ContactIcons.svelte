<script lang="ts">
    import GithubIcon from "~icons/ri/github-fill"
    import LinkedInIcon from "~icons/mdi/linkedin"
    import DiscordIcon from "~icons/ri/discord-fill"
    import EmailIcon from "~icons/fluent/mail-28-filled"
    import DownloadIcon from "~icons/material-symbols/download"
    import AnchorIconButton from "$lib/components/AnchorIconButton.svelte";

    export let width = "2em"
    export let height = "2em"
    export let allowWrap = false

    const icons = [
        {
            name: "Github",
            icon: GithubIcon,
            href: "https://github.com/Kieran-Lock"
        },
        {
            name: "LinkedIn",
            icon: LinkedInIcon,
            href: "https://linkedin.com/in/kieran-lock-43746528a/"
        },
        {
            name: "Discord",
            icon: DiscordIcon,
            href: "https://discordapp.com/users/380798738295422978"
        },
        {
            name: "Email",
            icon: EmailIcon,
            href: "mailto:kieran.lock@outlook.com"
        },
        {
            name: "CV",
            icon: DownloadIcon,
            href: "/cv.pdf",
            downloadName: "Kieran Lock CV"
        }
    ]
</script>

<div class="flex flex-row justify-center {allowWrap ? 'flex-wrap' : ''} {$$props.class ?? ''}">
    {#each icons as icon}
        <AnchorIconButton icon={icon.icon} href={icon.href} name={icon.name} width={width} height={height} downloadName={icon.downloadName} />
    {/each}
</div>
