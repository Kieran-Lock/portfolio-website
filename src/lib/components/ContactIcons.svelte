<script lang="ts">
    import GithubIcon from "~icons/ri/github-fill"
    import DiscordIcon from "~icons/ri/discord-fill"
    import EmailIcon from "~icons/ri/mail-open-fill"
    import AnchorIconButton from "$lib/components/AnchorIconButton.svelte";

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

<div class="flex flex-row gap-12 {$$props.class}">
    {#each icons as icon}
        <AnchorIconButton icon={icon.icon} href={icon.href} name={icon.name} width="3em" height="3em" />
    {/each}
</div>
