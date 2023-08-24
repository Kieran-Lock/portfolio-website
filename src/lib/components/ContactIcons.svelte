<script lang="ts">
    import GithubIcon from "~icons/ri/github-fill"
    import DiscordIcon from "~icons/ri/discord-fill"
    import EmailIcon from "~icons/fluent/mail-28-filled"
    import AnchorIconButton from "$lib/components/AnchorIconButton.svelte";

    export let width = "2em"
    export let height = "2em"

    const icons = [
        {
            name: "Github",
            icon: GithubIcon,
            href: "https://github.com/Kieran-Lock"
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
        }
    ]
</script>

<div class="flex flex-row gap-12 {$$props.class ?? ''}">
    {#each icons as icon}
        <AnchorIconButton icon={icon.icon} href={icon.href} name={icon.name} width={width} height={height} />
    {/each}
</div>
