<script>
import { page } from '$app/stores';
import Nav from '$lib/components/Nav.svelte';
import '../app.css';

</script>

<Nav />
{#key $page}
  <main>
    <slot />
  </main>
{/key}

<style>

@keyframes slideIn {
  0% {
    transform: translateY(-100%) scaleY(0);
    opacity: 0.75;
  }
  100% {
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
}

main {
  margin-right: 90px;

  animation: .75s slideIn;
}

@media screen and (max-width: 576px) {
  main {
    margin-right: 0;
  }
}

</style>
