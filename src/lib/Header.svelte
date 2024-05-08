<script lang="ts">
    import { fade } from "svelte/transition";
    import Ascii from "./Ascii.svelte";
    export let isVisible;
    console.log(isVisible)
</script>

<style>
    .header {
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    .visible {
        opacity: 1;
    }
</style>

<header class:header={!isVisible} transition:fade class="flex justify-center items-center border-solid border-b-[1px] border-black sticky top-0 bg-white bg-opacity-50 backdrop-blur">
    <Ascii/> <br/>
    <div>
        <h1 class="text-2xl">stuncs.space</h1>
        <span>Software engineer | Guitarist</span>
    </div>
</header>