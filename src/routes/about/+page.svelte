<script>
import { author } from '$lib/constants';
import timeline from '$lib/data/timeline.json';

import Fa from 'svelte-fa'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

</script>

<svelte:head>
    <title>{author} - About Me</title>
</svelte:head>

<section class="container about" id="about">

  <div class="about-container">
    <div class="main-title">
      <h2>About Me</h2>
    </div>

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

.container {
  padding: 2rem 2.5rem;
}

.main-title {
  text-align: center;
}

.main-title h2 {
  position: relative;
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 700;
}

.about-container {
  padding-top: 3.5rem;
  padding-bottom: 5rem;
}

.about-container .left-about {
  padding-top: 3.5rem;
  padding-right: 5rem;
}

.about-container .left-about h4 {
  font-size: 2rem;
  text-transform: uppercase;
}

.about-container .left-about p {
  line-height: 2rem;
  padding: 1rem 0;
  color: var(--color-grey-1);
}

.stat-title {
  text-transform: uppercase;
  font-size: 1.4rem;
  text-align: center;
  padding: 3.5rem 0;
  position: relative;
}

.stat-title::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  width: 40%;
  height: 1px;
  background-color: var(--color-grey-5);
  transform: translateX(-50%);
}

/*Timeline*/
.timeline {
  padding-bottom: 3rem;
  padding-left: 1.5rem;
}

.timeline .timeline-item {
  position: relative;
  padding-left: 3rem;
  border-left: 2px solid var(--color-grey-5);
}

.timeline .timeline-item .tl-icon {
  position: absolute;
  left: -27px;
  top: 0;
  background-color: var(--color-secondary);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline .timeline-item .tl-duration {
  padding: 0.2rem 0.6rem;
  background-color: var(--color-grey-5);
  border-radius: 15px;
  display: inline-block;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 500;
}

.timeline .timeline-item h5 {
  padding: 1rem 0;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
}

.timeline .timeline-item h5 span {
  color: var(--color-grey-2);
  font-weight: 500;
  font-size: 1.2rem;
}

.timeline .timeline-item p {
  color: var(--color-grey-2);
  padding-bottom: 3rem;
}

@media screen and (max-width: 1400px) {
}
@media screen and (max-width: 1200px) {
  .main-title h2 {
    font-size: 4rem;
  }
  .about-container {
    grid-template-columns: repeat(1, 1fr);
  }
  .about-container .left-about {
    padding-right: 0rem;
  }
}
@media screen and (max-width: 992px) {
}
@media screen and (max-width: 768px) {
  .main-title h2 {
    font-size: 3rem;
  }
}
@media screen and (max-width: 576px) {
}
@media screen and (max-width: 320px) {
  .main-title h2 {
    font-size: 2rem;
  }
}

</style>
