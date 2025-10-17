<script setup lang="ts">

</script>

<template>
  <section class="service_banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6 box-left">
          <h1>Keep in touch with <br> Pix Fax</h1>
          <h3 class="contact-quote">“Quality is never an accident. It is always the result of an intelligent effort.”</h3>
          <p class="heading-desc">Our friendly team of experts are ready to talk! ,<br>
            You can expect to hear from us within 24 hours, but we will get back to you asap.</p>
        </div>
        <div class="col-md-5">
          <img src="~/assets/images/contact.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
  <section class="contact-area">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-50">
            <h3 class="contact-heading">Contact us</h3>
            <h4 class="email">Email us</h4>
            <p>Support and general inquiry: <br><b><a href="mailto:info@pixfax.com">info@pixfax.com</a></b></p>
          </div>

          <h4 class="email">Call Us</h4>
          <p>US:  <a href="">+1 (347) 612‑6179</a></p>
          <p>Bangladesh: <a href="">+880 1303355740</a></p>
        </div>
        <div class="col-md-5">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">WHAT’S YOUR FIRST NAME?</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your First Name">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">WHAT’S YOUR LAST NAME?</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Last Name">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">WHAT’S YOUR EMAIL?</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your email">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">WHAT’S YOUR PHONE NUMBER?</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter PHONE NUMBER">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">WHAT’S YOUR MESSAGE?</label>
              <textarea name="" class="form-control" id="" cols="30" rows="10"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 contact-box-area text-center">
          <div class="contact-box">
            <img src="~/assets/images/home.png" width="80px" alt="">
            <p class="label-contact"> USA Office</p>
            <p class="label-contact"> Address:139-25 88 Road Jamaica, NY 11435</p>
            <p class="label-contact">Email: info@pixfax.com</p>
            <p class="label-contact">Phone: <a href="">+1 (347) 612‑6179</a></p>
          </div>
        </div>
        <div class="col-md-6 contact-box-area text-center">
          <div class="contact-box">
            <img src="~/assets/images/home.png" width="80px" alt="">
            <p class="label-contact">Bangladesh Office</p>
            <p class="label-contact">Address: Dhaka Cantonment</p>
            <p class="label-contact">Email: info@pixfax.com</p>
            <p class="label-contact">Phone: 880 1303355740</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
h1 {
  color: #291c97;
  font-weight: 700;
  font-size: 60px;
  line-height: 60px;
}
.service_banner {
  padding: 120px 0 30px;
}
.box-left {
  padding-right: 100px;
}
.contact-heading {
  font-size: 35px;
}
.contact-area {
  padding: 80px 0;
  background: #d5ddec;
}
.contact-area input, .contact-area textarea {
  padding: 12px;
  border-radius: 1px;
  background: #f3f3f3;
}


.form-group {
  margin-bottom: 25px;
}
.contact-quote {
  font-size: 18px;
  color: #291c97;
  font-weight: 600;
}
.heading-desc{
  font-size: 20px;
  color: #291c97;
}
.contact-heading, .email {
  font-size: 25px;
  color: #291c97;
  font-weight: 900;
}
.email {
  font-size: 21px;
}
.contact-box-area {
  padding: 60px 20px;
}
.contact-box {
  border: 1px solid #ededed;
  box-sizing: border-box;
  background: #f2f2f2;
  padding: 50px 0;
  box-shadow: 0 1px 18px -10px #0000004d;
}
.contact-box img {
    margin-bottom: 20px;
}
.label-contact {
  font-weight: 700;
  line-height: 20px;
}
</style>