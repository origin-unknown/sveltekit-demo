<script>
import { page } from '$app/stores';
import { base } from '$app/paths';

import Fa from 'svelte-fa'
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons'

const menuItems = [
  { path: base + '/', text: 'Home', icon: faHome },
  { path: base + '/about/', text: 'About', icon: faUser },
  { path: base + '/projects/', text: 'Projects', icon: faBriefcase },
  { path: base + '/contact/', text: 'Contact', icon: faEnvelopeOpen }
];
</script>

<nav class="navbar">
  <ul>
    {#each menuItems as { path, text, icon }, i}
      <li>
        <a
          href="{path}"
          class="btn-round"
          class:active={$page.url.pathname == path}
        ><Fa icon={icon} size="1.2x" /></a>
      </li>
    {/each}
  </ul>
</nav>

<style>

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

/* maybe in other file */
.btn-round {
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
    margin: 0 0.184rem;
  }
}


</style>
