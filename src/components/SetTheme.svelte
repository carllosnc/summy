<script lang="ts">
  import { onMount } from 'svelte'

  let theme: string | null

  onMount(() => {
    theme = localStorage.getItem('theme')
    console.log(theme)
  })

  function setDark() {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    theme = 'dark'
  }

  function setLight() {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
    theme = 'light'
  }
</script>

{#if theme === 'dark'}
  <button on:click={setLight} class="w-[28px] h-[28px] rounded-full bg-slate-700 flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="fill-sky-300"
      ><path fill="none" d="M0 0h24v24H0z" /><path
        d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"
      /></svg
    >
  </button>
{/if}

{#if theme === 'light'}
  <button on:click={setDark} class="w-[28px] h-[28px] rounded-full bg-slate-800 flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" class="fill-yellow-300"
      ><path fill="none" d="M0 0h24v24H0z" /><path
        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
      /></svg
    >
  </button>
{/if}
