<script lang="ts">
    export let src: string;
    export let title: string;
    export let description: string;
    export let redirect: string;
</script>

<div on:click={() => window.location.href = redirect} class="flex flex-col p-[2rem] m-[2rem] text-center justify-items-center items-center border-solid border-[1px] max-w-[20rem] border-transparent transition hover:border-black rounded hover:cursor-pointer">
    <img class="max-w-[10rem] rounded-full" src={src} alt={title} />
    <h1 class="text-3xl">{title}</h1>
    <p>{description}</p>
</div>