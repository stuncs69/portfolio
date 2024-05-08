<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import Socials from "./lib/Socials.svelte";
    import Header from "./lib/Header.svelte";
    import Ascii from "./lib/Ascii.svelte";
    
    let showHeader = false;

    const handleScroll = () => {
        const topDiv = document.querySelector('#main');
        if (topDiv) {
            const topDivRect = topDiv.getBoundingClientRect();
            showHeader = topDivRect.bottom <= 0;
        }
    };

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onDestroy(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>

<main>
    <div id="main" class="h-screen flex items-center justify-center">
        <Ascii/> <br/>
        <div>
            <h1 class="text-2xl">stuncs.space</h1>
            <span>Software engineer | Guitarist</span>
            <p>↓ Scroll down ↓</p>
        </div>
    </div>
    {#if showHeader}
    <Header isVisible={showHeader} />
    {/if}
    <Socials/>
    <Socials/>
    <Socials/>
    <Socials/>
    <Socials/>
    <Socials/>
</main>