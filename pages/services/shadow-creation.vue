<template>
  <section class="service_banner">
    <div class="container">
      <div class="row d_flex">
        <div class="col-md-6 align-self-center text-center">
          <div class="service_banner_image service_banner_image_shadow_creation">
          </div>
        </div>
        <div class="col-md-6">
          <div class="service_banner_text">
            <h1>Shadow Creation Services</h1>
            <p class="service_price">Starting at <span>85¢</span> per image</p>
            <p class="desc">Take advantage of the Shadow Creation service from Photo Edit Center, and give your images the extra dimension they need to stand out!</p>
          </div>
          <div class="service_ensure">
            <p>within 16-24 hrs delivery</p>
            <p> 1000 images per day</p>
            <p>satisfaction guaranteed</p>
          </div>
          <div class="link">
            <a href="/GetQuote" class="btn ">Get Quote</a>
            <a href="/FreeTrial" class="btn trial">Free Trial</a>
          </div>
        </div>

      </div>
    </div>
  </section>
  <section class="overview_section section_space">
    <div class="container">
      <div class="row">
        <div class="col-md-12 details_content">
          <h3 class="text-center page_subtitle">What is Shadow Services?</h3>
          <p>BIf you're looking for a way to add some extra depth and dimension to your images, then this is the perfect place for you. Our Photoshop Shadow or clipping with drop shadow service is designed to help you easily create realistic shadows for any image. With our easy-to-use tools and features, you can quickly and easily add shadows to your images, giving them a professional and polished look. We also offer customization options, so you can adjust the angle, color, and size of the shadow for the perfect effect. </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section_space">
    <div class="container">
      <div class="row">
        <div class="col-md-12 details_content">
          <h3 class="text-center page_subtitle">Why Photo Edit Center ?</h3>
          <ul class="advantages_list">
            <li><b>Use Advanced Technology:</b></li>
            <li>Photo Edit Center offers an extensive selection of professional tools to help you achieve the perfect look for your images. Their intuitive interface and comprehensive suite of editing tools make it easy to get the results you want. The software also offers an impressive selection of preset filters and effects, which can be customized to your needs.</li>
            <li><b>Experienced designers:</b></li>
            <li>Photo Edit Center is full of Experienced designers. They are well-versed in the use of image editing software and can take your image to the next level with their knowledge and skill. They can also help you achieve the desired result more quickly and efficiently, as well as suggest creative ideas for your project. Experienced designers are especially valuable if you are looking to make significant changes to your images.</li>
            <li><b>Cost-saving service:</b></li>
            <li>The Photo Edit Center offers a cost-saving image editing service that helps businesses reduce costs by enabling them to quickly and easily edit images. This service is ideal for businesses that require high-quality images to be edited quickly and efficiently, as it allows them to outsource the task to the Photo Edit Center.</li>
            <li><b>Quick Yet Quality Service</b></li>
            <li>The Photo Edit Center offers a quick yet quality image editing service for all your photo needs. Their experienced editors are able to provide a range of services from basic adjustments such as color, contrast, and brightness, to more complex tasks such as photo retouching and composition.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="service_example section_space">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3 class="page_subtitle">
            Sample Of the works
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="details">
            <p>If you're looking for a reliable and professional Shadow service, then look no further! Our drop Shadow service offers high-quality results at an affordable price. With our experienced team of designers, we guarantee that you will be satisfied with the results. We have worked with many satisfied customers in the past, so don't hesitate to check out our previous work. Visit our website today to see what we can do for you!</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="sample_box_image">
            <img :src="imgPreUrl + `shadow_creation/sample/` + `sample1.jpg`">
          </div>
        </div>
        <div class="col-md-3">
          <div class="sample_box_image">
            <img :src="imgPreUrl + `shadow_creation/sample/` + `sample2.jpg`">
          </div>
        </div>
        <div class="col-md-3">
          <div class="sample_box_image">
            <img :src="imgPreUrl + `shadow_creation/sample/` + `sample3.jpg`">
          </div>
        </div>
        <div class="col-md-3">
          <div class="sample_box_image">
            <img :src="imgPreUrl + `shadow_creation/sample/` + `sample4.jpg`">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center pt_20">
          <div class="link ">
            <a href="/GetQuote" class="btn">Get Quote</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="how_it_works">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3 class="page_subtitle">How It Works</h3>
        </div>
      </div>
      <div class="row how_it_works_box">
        <div class="col-md-6 align-self-center">
          <ul class="how_works">
            <li class="ribbon">Request a quote for the images.</li>
            <li>We’ll review and get back to you with the proposal.</li>
            <li>Request a quote for the images.</li>
            <li>Once approved and uploaded the images, we’ll start processing the job.</li>
            <li> Download the images once the job is done.</li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="image-box">
            <img src="assets/images/section-how-it-works-01.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="service_example section_space">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h3 class="page_subtitle">
            Some of our Shadow Creation samples
          </h3>
        </div>
        <div class="row">
          <div class="col-md-3">
            <div class="sample_box_image">
              <img :src="imgPreUrl + `shadow_creation/works/` + `works1.jpg`">
            </div>
          </div>
          <div class="col-md-3">
            <div class="sample_box_image">
              <img :src="imgPreUrl + `shadow_creation/works/` + `works2.jpg`">
            </div>
          </div>
          <div class="col-md-3">
            <div class="sample_box_image">
              <img :src="imgPreUrl + `shadow_creation/works/` + `works3.jpg`">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center pt_20">
          <div class="link">
            <a href="/GetQuote" class="btn ">Get Quote</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="service_cost section_space">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center page_subtitle">What is the cost of Shadow Creation services?</h3>
          <p>According to the type of shadow services you need, the price will vary. Because when the shadow type changes, the time and effort also change. The complexity level of an image also determines what the cost of the shadow service will be. One thing is for sure, we provide a huge discount on bulk orders. Here is our regular price list, well it's always negotiable. </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section_space advantages_section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 details_content">
          <h3 class="text-center page_subtitle">What are the Advantages?</h3>
          <ul class="advantages_list">
            <li><b>Natural Look: </b></li>
            <li> When it comes to selling products online, it is essential for the product's presentation to be realistic. Shadows can help to create a more natural look and add to the product's aesthetic appeal. Without shadows, the product may appear to be floating and can give off an unrealistic vibe.</li>
            <li><b>Improved Quality: </b></li>
            <li>Shadow creation services can help to improve the overall quality of the photos that businesses produce, creating a more professional and polished look. This can help to boost customer engagement and loyalty as they view the branded images as more professional. </li>
            <li><b>Enhanced Visual Appeal:  </b></li>
            <li>Photos with shadow looks both natural and more attractive to the eyes. Shadow creation services can help to create stunning visuals that capture the attention of a viewer. This can help to increase the engagement of a viewer and boost the overall appeal of a brand. To grab the attention of the buyers, you should takea  shadow creation service for your eCommerce product photos. </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const imgPreUrl = '';
</script>

<style scoped>

</style>