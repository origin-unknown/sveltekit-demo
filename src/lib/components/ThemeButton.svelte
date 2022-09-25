<script>
import { theme } from '$lib/stores';

import Fa from 'svelte-fa'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

/*
 * This example uses svelte stores. Switch to sessionstorage to keep the
 * settings even after a reload.
 */
const handleThemeChange = evt => {
    let mode = $theme;
    if (mode === 'system') {
      const query = '(prefers-color-scheme: dark)';
      const match = (window.matchMedia && window.matchMedia(query).matches);
      mode = match ? 'light' : 'dark';
    } else {
      document.body.classList.remove(`${mode}-mode`);
      mode = mode === 'dark' ? 'light' : 'dark';
    }
    document.body.classList.add(`${mode}-mode`);
    theme.set(mode);
};

</script>

<button
  class="btn-round"
  id="theme-btn"
  on:click={handleThemeChange}
><Fa icon={faAdjust} size="1.2x" /></button>
