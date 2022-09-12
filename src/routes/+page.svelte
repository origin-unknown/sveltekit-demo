<script>
import { page } from '$app/stores';
import { author } from '$lib/constants';

</script>

<svelte:head>
  <title>{author}</title>
</svelte:head>

<section class="container home" id="home">
  <div class="header-content">
    <div class="left-header">
      <div class="h-shape"></div>
    </div>
    <div class="right-header">
      <h1 class="name">Hello, I am <span>{author}</span></h1>
    </div>
  </div>
</section>

<style>

.header-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
}

.header-content .left-header {
  display: flex;
  align-items: center;
  position: relative;
}

.header-content .left-header .h-shape {
  transition: all .4s ease-in-out;
  width: 65%;
  height: 100%;
  background-color: var(--color-secondary);
  position: absolute;
  left: 0;
  top: 0;
  /* z-index: -1; */
  clip-path: polygon(0 0, 65% 0, 100% 100%, 0% 100%);
}

.header-content .right-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-top: 3.5rem; */
  margin-left: -8.5rem;
  margin-right: 4rem;
}

.header-content .right-header .name {
  font-size: 3rem;
}

.header-content .right-header .name span {
  color: var(--color-secondary);
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
    margin: 0 !important;
  }

  .right-header .name {
    font-size: 2.5rem;
    text-align: center;
    padding-top: 3rem;
  }
}

@media screen and (max-width: 576px) {
  section#home {
    margin: 0 3rem 0 3rem;
  }
}

</style>
