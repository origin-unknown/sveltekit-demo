<script>
import { page } from '$app/stores';
import { base } from '$app/paths';
import LocaleSwitch from '$lib/components/LocaleSwitch.svelte';
import ThemeButton from '$lib/components/ThemeButton.svelte';
import { locale } from '$lib/translations';

import Fa from 'svelte-fa'
export let sections = [];

</script>

<nav class="navbar">
  <ul>
    {#each sections as { slug, title, icon }, i}
      <li>
        <a
          href="{base}/{$locale}/{slug}"
          class="btn-round"
          class:active={$page.url.pathname === `${base}/${$locale}/${slug}`}
        ><Fa icon={icon} size="1.2x" /></a>
      </li>
    {/each}
  </ul>
  <hr class="divider" />
  <ul>
    <li><ThemeButton /></li>
    <li><LocaleSwitch /></li>
  </ul>

</nav>

<style>

:global(.btn-round) {
  width: 55px;
  max-width: 55px;
  min-width: 55px;
  aspect-ratio: 1/1;
  border: none;
  border-radius: 50%;
  font-size: 12pt;
  cursor: pointer;

  background-color: var(--color-grey-4);
  color: var(--color-grey-2);
  box-shadow: var(--box-shadow-1);

  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar {
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0rem;
  height: 100vh;
  overflow: hidden auto;

  display: flex;
  flex-direction: column;
  justify-content: center save;
}

.navbar ul {
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center save;
  align-items: center;
  position: relative;

  margin-top: 0.35rem;
  margin-bottom: 0.35rem;

  padding: 0 0.64rem;
}

.navbar ul:first-child {
  margin-top: 3.2rem;
}
.navbar ul:last-child {
  margin-bottom: 3.2rem;
}
.navbar ul li {
  padding: .47rem;
}
.navbar ul > * li {
  margin: 0.7rem 0.84rem;
}
.navbar .divider {
  border: none;
  margin: 0.35rem 0;
}

a.active {
  background-color: var(--color-secondary);
}

@media screen and (max-width: 576px) {
  .navbar {
    background-color: var(--color-grey-5);

    position: fixed;
    top: auto;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: auto;
    overflow: auto hidden;
    flex-direction: row;
  }
  .navbar ul {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    flex-direction: row;
  }
  .navbar ul:first-child {
    margin-top: 0;
    margin-left: auto;
  }
  .navbar ul:last-child {
    margin-bottom: 0;
    margin-right: auto;
  }
  .navbar ul > * li {
    margin: .7rem 0.2rem;
  }
  .navbar .divider {
    margin: 0 0;
  }
}

</style>
