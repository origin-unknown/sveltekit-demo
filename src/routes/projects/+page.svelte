<script>
import { author } from '$lib/constants';
import projects from '$lib/data/projects.json';
</script>

<svelte:head>
    <title>{author} - My Portfolio</title>
</svelte:head>

<section class="container portfolio" id="portfolio"><!-- remove classes -->
  <div class="portfolio-content">
    <div class="main-title">
      <h2>My Portfolio</h2>
    </div>

    <div class="portfolio-items">
      {#each projects as {title,description,image}, i}
        <div class="portfolio-item">
          <div class="portfolio-image-wrapper">
            <div
              class="portfolio-image"
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

.portfolio-content {
  padding-top: 3.5rem;
}

.portfolio-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 7rem;
}

.portfolio-items .portfolio-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: auto;
  margin-top: 4rem;
  border-radius: 6px;
  background-color: var(--color-grey-5);
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  will-change: transform;
}

.portfolio-image-wrapper {
  aspect-ratio : 1 / 1;
  overflow: hidden;
  border-bottom: 8px solid var(--color-secondary);
}

.portfolio-image {
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

.portfolio-item:hover .portfolio-image,
.portfolio-item:focus .portfolio-image
{
  -ms-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  filter: grayscale(0);
}

.portfolio-text {
  padding: 0 1.2rem 1rem;

  margin-top: -7px;
  padding: 1.1rem;
  border-top: 8px solid var(--color-secondary);
}

.portfolio-text h4 {
  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;

  font-size: 1.5rem;
  margin-bottom: 0.7rem;
  transition: all 0.4s ease-in-out;
}

.portfolio-item .portfolio-text p {
  color: var(--color-grey-2);
  line-height: 2rem;
  padding-bottom: 1rem;
}

.portfolio-item:hover {
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
}

.portfolio-item:hover .portfolio-text h4,
.portfolio-item:focus .portfolio-text h4 {
  color: var(--color-secondary);
}

@media screen and (max-width: 1400px) {
  .main-title h2 .bg-text {
    font-size: 5.5rem;
  }
}
@media screen and (max-width: 1200px) {
  .main-title h2 {
    font-size: 4rem;
  }
  .main-title h2 span {
    font-size: 4rem;
  }
  .main-title h2 .bg-text {
    font-size: 4.5rem;
  }
}
@media screen and (max-width: 992px) {
  .portfolio-items {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 768px) {
  .main-title h2 {
    font-size: 3rem;
  }
  .main-title h2 span {
    font-size: 3rem;
  }
  .main-title h2 .bg-text {
    font-size: 4rem;
  }
}
@media screen and (max-width: 576px) {
  .portfolio-items {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 320px) {
  .main-title h2 {
    font-size: 2rem;
  }
  .main-title h2 span {
    font-size: 2.3rem;
  }
}


</style>
