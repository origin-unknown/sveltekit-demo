<script>
import { author } from '$lib/constants';
import projects from '$lib/data/projects.json';
</script>

<svelte:head>
    <title>{author} - My Portfolio</title>
</svelte:head>

<div class="main-title">
  <h2>My Portfolio</h2>
</div>

<section id="projects">
  <div class="portfolio-items">
    {#each projects as {title,description,image}, i}
      <div class="wrapper">
        <div class="parent">
          <div
            class="child"
            style="background-image: url({image})"
          ></div>
        </div>
        <div class="portfolio-text">
          <h4>{ title }</h4>
          <p>{ description }</p>
        </div>
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

section#projects {
  padding: 0 1.2rem;
}

.portfolio-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 2rem;
  margin-bottom: 7rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: auto;
  margin-top: 4rem;
  border-radius: 6px;
  background-color: var(--color-grey-5);
  overflow: hidden;
  will-change: transform;
}

.parent {
  aspect-ratio : 1 / 1;
  overflow: hidden;
  border-bottom: 8px solid var(--color-secondary);
}

.child {
  width: 100%;
  height: 100%;
  filter: grayscale(1.0);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
   -webkit-transition: all .5s;
   -moz-transition: all .5s;
   -o-transition: all .5s;
   transition: all .5s;
}

.wrapper:hover .child, .wrapper:focus .child {
  -ms-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  filter: grayscale(0);
}

.portfolio-text {
  padding: 0 1.2rem 1rem;
}

.portfolio-text h4 {
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;
}

.wrapper:hover .portfolio-text h4,
.wrapper:focus .portfolio-text h4 {
  color: var(--color-secondary);
}



@media screen and (max-width: 1400px) {
}
@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 992px) {
  .portfolio-items {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 576px) {
  .portfolio-items {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 320px) {
}


</style>
