<script>
import { author } from '$lib/constants';

import Fa from 'svelte-fa'
import {
  faMapMarkerAlt,
  faEnvelope,
  faUserGraduate,
  faMobile,
  faGlobeAfrica
} from '@fortawesome/free-solid-svg-icons'

</script>

<svelte:head>
  <title>{author} - Contact Me</title>
</svelte:head>

<section class="container contact" id="contact">
  <div class="contact-container">
    <div class="main-title">
      <h2>Contact Me</h2>
    </div>

    <div class="contact-content-con">
      <div class="left-contact">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          In, laborum numquam? Quam excepturi perspiciatis quas quasi.
        </p>
        <div class="contact-info">
          <div class="contact-item">
            <div class="icon">
              <Fa icon={faMapMarkerAlt} size="1.2x" />
              <span>Location:</span>
            </div>
            <p>London, united Kingdom</p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <Fa icon={faEnvelope} size="1.2x" />
              <span>Email:</span>
            </div>
            <p>test@gmail.com</p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <Fa icon={faUserGraduate} size="1.2x" />
              <span>Education:</span>
            </div>
            <p>Sussex University, East Sussex</p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <Fa icon={faMobile} size="1.2x" />
              <span>Mobile Number:</span>
            </div>
            <p>07522670617</p>
          </div>
          <div class="contact-item">
            <div class="icon">
              <Fa icon={faGlobeAfrica} size="1.2x" />
              <span>Languages:</span>
            </div>
            <p>Afrikaans, English, Spanish</p>
          </div>
        </div>
      </div>
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

.contact-container {
  padding-top: 3.5rem;
}

.contact-content-con {
  display: flex;
  padding-top: 3.5rem;
}

.contact-content-con .left-contact {
  flex: 2;
}

.contact-content-con .left-contact p {
  margin: 1rem 0;
  line-height: 2rem;
}

.contact-content-con .left-contact .contact-info .contact-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact-content-con .left-contact .contact-info .contact-item p {
  margin: 0.3rem 0;
  padding: 0;
}

.contact-content-con .left-contact .contact-info .contact-item .icon {
  display: grid;
  grid-template-columns: 40px 1fr;
}

</style>
