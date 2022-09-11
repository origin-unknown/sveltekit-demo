<script>
import { page } from '$app/stores';
import { author } from '$lib/constants';

</script>

<svelte:head>
    <title>{author}</title>
</svelte:head>

<section class="header-content">
  <div class="left-header">
    <div class="h-shape"></div>
  </div>
  <div class="right-header">
    <h1 class="name">Hello, I am <span>{author}</span></h1>
  </div>
</section>

<style>

.header-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
  overflow: hidden;
  margin-left: 0;
}

.left-header {
  display: flex;
  align-items: center;
  position: relative;
}

.right-header {
  display: flex;
  flex-direction: column;
  padding-top: 3.5rem;
  margin-left: -8.5rem;
  margin-right: 4rem;
}

.name {
  font-size: 3rem;
}

.name span {
  color: var(--color-secondary);
}

.h-shape {
  transition: all .4s ease-in-out;
  width: 65%;
  height: 180%;
  background-color: var(--color-secondary);
  position: absolute;
  left: 0;
  top: 0;
  /* z-index: -1; */
  clip-path: polygon(0 0, 65% 0, 100% 100%, 0% 100%);
}

@media screen and (max-width: 992px) {
  .header-content {
    grid-template-columns: repeat(1, 1fr);
  }

  .left-header .h-shape {
    display: none;
  }

  .right-header {
    grid-row: 1;
    padding-right: 0;
    margin: 0;
  }

  .right-header .name {
    font-size: 2.5rem;
    text-align: center;
    padding-top: 3rem;
  }
}

@media screen and (max-width: 576px) {
  main section#home {
    margin: 0 3rem 0 3rem;
  }
}

</style>
