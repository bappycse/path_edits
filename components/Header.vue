<template>
  <header>
    <Head>
      <Title>{{ title }}</Title>
      <Style type="text/css" children="body { background-color: green; }" />
    </Head>
    <!-- header inner -->
    <div class="header" v-on="handleScroll">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
            <div class="full">
              <div class="center-desk">
                <Nuxt-link  to="/"><img src="~assets/images/logo.png" alt="Photo Edits Logo"></Nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
            <nav class="navigation navbar navbar-expand-md navbar-dark ">
              <button class="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="">
                <nav>
                  <div class="menu-item">
                    <Nuxt-link  to="/">Home</Nuxt-link>
                  </div>
                  <div class="menu-item">
                    <Nuxt-link  to="/how-it-works">How It Works</Nuxt-link>
                  </div>
                  <div class="menu-item"  @mouseover="isOpen = true" @mouseleave="isOpen = false">
                    <Nuxt-link to="/services/clipping-path">Services</Nuxt-link>
                    <div class="sub_item" v-if="isOpen">
                      <div class="menu-item">
                        <Nuxt-link to="/services/clipping-path">Clipping Path </Nuxt-link>
                      </div>
                      <div class="menu-item">
                        <Nuxt-link to="/services/background-removal">Background Removal</Nuxt-link>
                      </div>
                      <div class="menu-item">
                        <Nuxt-link to="/services/image-masking">Image Masking</Nuxt-link>
                      </div>
                      <div class="menu-item">
                        <Nuxt-link to="/services/shadow-creation">Shadow Creation</Nuxt-link>
                      </div>

                      <div class="menu-item">
                        <Nuxt-link to="/services/ghost-mannequin">Ghost Mannequin</Nuxt-link>
                      </div>
                      <div class="menu-item">
                        <Nuxt-link to="/services/photo-retouch">Photo Retouching</Nuxt-link>
                      </div>
                      <div class="menu-item">
                        <Nuxt-link to="/services/color-change">Color Change</Nuxt-link>
                      </div>
                      <div class="menu-item">
                        <Nuxt-link to="/services/car-service">Car Photo Edit Service</Nuxt-link>
                      </div>
                      <div class="menu-item">
                        <Nuxt-link to="/services/multi-clipping-path">Multi Clipping Path</Nuxt-link>
                      </div>
                      <div class="menu-item">
                        <Nuxt-link to="/services/jewellery-service">Jewellery Photo Editing</Nuxt-link>
                      </div>
                      <div class="menu-item">
                        <Nuxt-link to="/services/ecommerce-service">E-Commerce Service</Nuxt-link>
                      </div>
                      <div class="menu-item">
                        <Nuxt-link to="/services/vector-services">Vector Services</Nuxt-link>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item">
                    <Nuxt-link to="/about">About Us</Nuxt-link>
                  </div>
                  <div class="menu-item">
                    <Nuxt-link to="/prices">Prices</Nuxt-link>
                  </div>
                  <div class="menu-item get_quote">
                    <Nuxt-link class="md:hidden nav-link" to="/get-quote">Get Quote</Nuxt-link>
                  </div>
                  <div class="menu-item free_trial">
                    <Nuxt-link class="md:hidden nav-link" to="/free-trial">Free Trial</Nuxt-link>
                  </div>
                </nav>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const isOpen = ref(false);
useSeoMeta({
  title: 'Photo Edits Center',
  description: 'This is my amazing site, let me tell you all about it.',
})
</script>

<style scoped>
  .navbar {
    padding: 0;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav .menu-item {
    display: flex;
    padding: 10px 15px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    transition: 0.4s;
  }

  nav .menu-item a {
    font-weight: 500;
    font-size: 18px;
  }

  nav .menu-item.active {
    background: #444;
    border-bottom-color: #FF5858;
  }

  nav .menu-item .sub_item {
    position: absolute;
    background: #e9f5ff;
    top: calc(100% + 5px);
    left: 55%;
    width: max-content;
    transform: translateX(-50%);
    border-radius: 12px;
    padding-bottom: 20px;
  }

  nav .menu-item .sub_item .menu-item {
    padding: 10px 20px 0;
  }

  nav .menu-item .sub_item .menu-item a {
    font-size: 16px;
    font-weight: 500;
  }

  .get_quote a{
    background: #0056b3;
    border-radius: 4px;
    color: #fff;
  }

  .free_trial a{
    padding-left: 0;
  }
</style>