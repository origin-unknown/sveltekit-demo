<script>
import { author } from '$lib/constants';
import timeline from '$lib/data/timeline.json';

import Fa from 'svelte-fa'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

</script>

<svelte:head>
    <title>{author} - About Me</title>
</svelte:head>

<div class="main-title">
  <h2>About Me</h2>
</div>

<section class="container">

  <div class="about-container">
    <div class="left-about">
      <h4>Information About me</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eveniet labore nihil obcaecati consequatur. Debitis error doloremque,
        vero eos vel nemo eius voluptatem dicta tenetur modi. <br />
        <br />
        La musica delectus dolore fugiat exercitationem a,
        ipsum quidem quo enim natus accusamus labore dolores nam. Unde.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Harum non necessitatibus deleniti eum soluta.
      </p>
    </div>
  </div>

  <h4 class="stat-title">My Timeline</h4>
  <div class="timeline">
    {#each timeline as {duration, position, organisation, description}, i}
      <div class="timeline-item">
        <div class="tl-icon">
          <Fa icon={faBriefcase} size="1.2x" />
        </div>
        <p class="tl-duration">{ duration }</p>
        <h5>{ position }<span> - { organisation }</span></h5>
        <p>{ description }</p>
      </div>
    {/each}
  </div>
</section>

<style>

.main-title {
  text-align: center;
}

.main-title h2 {
  position: relative;
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 700;
}

</style>
