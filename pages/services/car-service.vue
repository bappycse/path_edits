<template>
  <section class="service_banner">
    <div class="container">
      <div class="row d_flex">
        <div class="col-md-6 align-self-center text-center">
          <div class="service_banner_image service_banner_image_car_photo">
          </div>
        </div>
        <div class="col-md-6">
          <div class="service_banner_text">
            <h1>Car Photo Editing Services</h1>
            <p class="service_price">Starting at <span>85¢</span> per image</p>
            <p class="desc">Whether you need a single car photo or an entire album edited, our team of experienced graphic designers will take your photos to the next level. </p>
          </div>
          <div class="service_ensure">
            <p>within 16-24 hrs delivery</p>
            <p> 1000 images per day</p>
            <p>satisfaction guaranteed</p>
          </div>
          <div class="link">
            <a href="/GetQuote" class="btn">Get Quote</a>
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
          <h3 class="text-center page_subtitle">What is Car Photo Editing Services</h3>
          <p>Cars are luxury items that need to look elegant while displayed on the website. Even if not displayed on the website, the photos should be eye-catching. If you are a professional car photographer who does car photography or car seller you will need a car photo editing service to upgrade the look of the photos. Car photo editing service includes car photo retouching, sky retouching, window retouching, dust removal, polishing, dent removal, etc. We provide an extensive range of services to help you enhance your car photos to make them look their best. Our experienced team of photo editors has the skills and expertise to make your car photos look as if they have come straight off the showroom floor. </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section_space">
    <div class="container">
      <div class="row">
        <div class="col-md-12 details_content">
          <h3 class="text-center page_subtitle">Why Photo Edit Center?</h3>
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
          <h3 class="page_subtitle">Sample Of the works</h3>
        </div>
        <div class="details">
          <p>We have been in this sector for more than 7 years which suffice our experience. During this tenure, we have accomplished numerous projects which are testimonials of our good work. Our Background Removal Service has been a great success so far. We have been able to help our clients achieve their desired end products quickly and efficiently. You may have a look. </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="sample_box_image">
            <img :src="imgPreUrl + `car_photo/sample/` + `sample1.jpg`">
          </div>
        </div>
        <div class="col-md-3">
          <div class="sample_box_image">
            <img :src="imgPreUrl + `car_photo/sample/` + `sample2.jpg`">
          </div>
        </div>
        <div class="col-md-3">
          <div class="sample_box_image">
            <img :src="imgPreUrl + `car_photo/sample/` + `sample3.jpg`">
          </div>
        </div>
        <div class="col-md-3">
          <div class="sample_box_image">
            <img :src="imgPreUrl + `car_photo/sample/` + `sample4.jpg`">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center pt_20">
          <div class="link ">
            <a href="/GetQuote" class="btn ">Get Quote</a>
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
          <h3 class="page_subtitle">Car Photo Editing Services samples?</h3>
          <h4>Click the image to enlarge</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="sample_box_image">
            <img :src="imgPreUrl + `background_remove/works/` + `works1.jpg`">
          </div>
        </div>
        <div class="col-md-3">
          <div class="sample_box_image">
            <img :src="imgPreUrl + `background_remove/works/` + `works2.jpg`">
          </div>
        </div>
        <div class="col-md-3">
          <div class="sample_box_image">
            <img :src="imgPreUrl + `background_remove/works/` + `works3.jpg`">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center pt_20">
          <div class="link ">
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
          <h3 class="text-center page_subtitle">What is the Cost of Car Photo Editing?</h3>
          <p>The cost of car photo editing from Photo Edit Center will depend on the scope of the project and the complexity of the edits required. Photo Edit Center offers a variety of packages to meet the needs of all customers, so you are sure to find something to fit your budget. We have a dynamic and flexible pricing policy for bulk orders.</p>
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
            <li><b>Increase Sales: </b></li>
            <li>Car photo editing can be an incredibly powerful tool in increasing sales. By ensuring that the images of the car being advertised are of the highest quality, potential customers are more likely to click on the ad or visit the showroom, leading to increased sales.  </li>
            <li><b>Increase the value of the car: </b></li>
            <li>Car photo editing can help increase the value of the car by making it look more attractive and appealing. It can also help to enhance its color and features, making it look more expensive and sophisticated. Editing can also be used to hide flaws or scratches that may have been present on the car, making it appear more pristine and valuable.</li>
            <li><b>Create a professional impression: </b></li>
            <li>Car photo editing can help create a professional impression of the car, which can be beneficial for marketing and advertising purposes. Car photo editing can help make the car look its best, by removing scratches, dents, and other imperfections, and adding custom backgrounds.</li>
            <li><b>Showcase the car differently:</b></li>
            <li> Photo editing can help you showcase the car in different angles, backgrounds, and lighting, which can attract potential buyers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

const imgPreUrl = "";

</script>

<style scoped>

</style>