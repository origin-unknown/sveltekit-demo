<script>
import { base } from '$app/paths';
import { page } from '$app/stores';
import { goto } from '$app/navigation';
import { t, locales, locale } from '$lib/translations';

import Fa from 'svelte-fa'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

let isActive = false;

function clickOutside(elem, cb) {
  function handleClick(event) {
    if (!elem.contains(event.target)) {
      cb();
    }
  }
  document.body.addEventListener('click', handleClick);
  return {
    update(newCb) {
      cb = newCb;
    },
    destroy() {
      document.body.removeListener('click', handleClick);
    }
  }
}

function fadeSlide(node, { delay = 0, duration = 400 }) {
  const match = window.matchMedia('(max-width: 576px)').matches;
  const style = getComputedStyle(node);
  const height = parseFloat(style.height);
  const width = parseFloat(style.width);
	return {
		delay,
		duration,
		css: t =>
      `opacity: ${t};` +
      `overflow: hidden;` +
      (match
        ? `width: ${t * width}px;`
        : `height: ${t * height}px;`
      )
	};
}

$: ({ route } = $page.data.stuff);
</script>

<div class="dropdown">
  <button
    class="btn-round drop-btn"
    data-target="#lang-dropdown"
    on:click={() => isActive = !isActive }
    use:clickOutside={() => isActive = false }
  >
    <Fa icon={faLanguage} size="1.2x" />
  </button>
  {#key isActive}
  <div
    id="lang-dropdown"
    class="dropdown-content"
    class:active={isActive}
    in:fadeSlide="{{ duration: 250 }}"
    out:fadeSlide="{{ duration: 250 }}"
  >
    {#each $locales as lc}
      <button
        class="btn-round"
        on:click|preventDefault={() => goto($page.url.origin + `${base}/${lc}${route}`) }
      >{lc}</button>
    {/each}
  </div>
  {/key}
</div>

<style>

.drop-btn, .drop-btn:focus {
  outline: none;
}

.dropdown {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  border-radius: 33px;
  background-color: var(--color-grey-3);
  color: var(--color-white);
  box-shadow: var(--box-shadow-1);
}

.dropdown-content {
  display: none;
}

.dropdown-content button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  min-width: 55px;
  height: 55px;
  text-decoration: none;
  border-radius: 50%;
  background-color: var(--color-grey-4);
  color: var(--color-grey-2);
  margin-top: 0.35rem;
}

.active {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 576px) {
  .dropdown,
  .dropdown-content.active
  {
    flex-direction: row;
  }
  .dropdown-content button {
    margin-top: 0;
    margin-left: 0.2rem;
  }
}

</style>
