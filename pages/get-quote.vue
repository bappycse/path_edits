<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
  </Head>
  <section class="contact" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="heading text-center wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
            <h2>Get A Quote</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="main wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
            <div class="row">
              <div class="col-lg-8 left">
                <h3>Get A Quote</h3>
                <form @submit.prevent="freeTrial" enctype="multipart/form-data">
                  <div class="row">
                    <div class="col-sm-6">
                      <input type="text" v-model="allInfo.name" class="form-control" placeholder="Name" required>
                    </div>
                    <div class="col-sm-6">
                      <input type="email" v-model="allInfo.email" class="form-control" placeholder="Email" required>
                    </div>
                    <div class="col-sm-6">
                      <input type="number" v-model="allInfo.phone" class="form-control" placeholder="Phone" required>
                    </div>
                    <div class="col-sm-6 from-group">
                      <select v-model="allInfo.country">
                        <option value="US" selected="selected">Us</option>
                        <option v-for="country in countryList" :key="country">{{ country }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="service-box col-md-12">
                    <div class="row">
                      <div v-for="services in allServices" class="col-md-4">
                        <label for="services.name">
                          {{services.name}}
                          <input type="checkbox" id="{{services.name}}" v-model="services.selected">
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" v-model="allInfo.message" rows="5" id="comment" placeholder="Message" required></textarea>
                  </div>
                  <div class="col-sm-12 form-group">
                    <input type="file" @change="onChange" multiple>
                  </div>
                  <div class="col-sm-12 form-group">
                    <table class="table">
                      <tr v-for="imageFile in uploadFiles" key="imageFile.name">
                        <td>{{imageFile.name}}</td> <td>File Size {{ formatBytes(imageFile.size) }}</td>
                      </tr>
                    </table>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-block" :class="{ 'in-active': status }" type="submit" >Send Now!</button>
                    <img src="~/assets/images/mail_send.gif" class="in-active" :class="{ 'active': sendStatus }"   alt="Send Mail Image" >
                    <p class="text-center in-active " :class="{ 'send-message': sendStatusDone}" >Quotation Send Successfully</p>
                  </div>
                </form>
              </div>
              <div class="col-lg-4">
                <div class="right">
                  <h4>Contact Information</h4>
                  <div class="info d-flex align-items-center">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Dhaka Cantonment,<br>Dhaka 1206</span>
                  </div>
                  <div class="info d-flex align-items-center">
                    <i class="fa fa-chrome" aria-hidden="true"></i>
                    <span><b>Phone: </b>+880 1303355740</span>
                  </div>
                  <div class="info d-flex align-items-center">
                    <span><b>Email: </b> <a href="mailto:info@photoeditscenter.com">info@photoeditscenter.com</a></span>
                  </div>
                  <div class="info d-flex align-items-center social-link">
                    <a href="https://www.facebook.com/PhotoEditsCenter" target="_blank"><Icon name="bxl:facebook-square" color="black" /></a>
                    <a href="https://twitter.com/photoeditscenter" target="_blank"><Icon name="bxl:twitter" color="black" /></a>
                    <a href="https://www.linkedin.com/in/photo-edits-center-b5591524a" target="_blank"><Icon name="bxl:linkedin-square" color="black" /></a>
                    <a href="https://www.tumblr.com/settings/blog/photoediscenter" target="_blank"><Icon name="bxl:tumblr" color="black" /></a>
                    <a href="https://www.pinterest.com/photoeditscenter" target="_blank"><Icon name="bxl:pinterest" color="black" /></a>
                    <a href="https://www.instagram.com/photoeditscenter/" target="_blank"><Icon name="bxl:instagram" color="black" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const axios = useNuxtApp().$axios
const { $axios } = useNuxtApp();
const title = ref('Photo Edits  Center | Get Quote');
const description = ref('Photo Edits Center provided clipping path related services');
const allServices = [
  { id: 1, name: "Clipping Path", selected: false },
  { id: 2, name: "Background Remove", selected: false },
  { id: 3, name: "Image Masking", selected: false },
  { id: 4, name: "Shadow Creation", selected: false },
  { id: 5, name: "Ghost Mannequin", selected: false },
  { id: 6, name: "Photo Retouching", selected: false },
  { id: 7, name: "Color Change", selected: false },
  { id: 8, name: "Car Photo Editing", selected: false },
  { id: 9, name: "Multi Clipping path", selected: false },
  { id: 10, name: "Jewelry Photo Editing", selected: false },
  { id: 11, name: "E-Commerce Service", selected: false },
  { id: 12, name: "Vector Services", selected: false },
];

const serviceData = ref([]);

const selectedNames = () => {
  for (let i = 0; i < allServices.length; i++) {
    if (allServices[i].selected === true) {
      serviceData.value.push(allServices[i].name);
    }
  }
  return serviceData;
};

const allInfo = ref({
  name: null,
  email: null,
  country: null,
  phone: null,
  message: null,
  files: null,
  serviceName: serviceData,
  serviceType: "Commercial",
});

const resetData = () => {
  allInfo.value.name = null;
  allInfo.value.email = null;
  allInfo.value.country = null;
  allInfo.value.phone = null;
  allInfo.value.message = null;
  allInfo.value.files = null;
}

const status = ref(false);
const sendStatus = ref(false);
const sendStatusDone = ref(false);

const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas (the)",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory (the)",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands (the)",
  "Central African Republic (the)",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands (the)",
  "Colombia",
  "Comoros (the)",
  "Congo (the Democratic Republic of the)",
  "Congo (the)",
  "Cook Islands (the)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic (the)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
  "Faroe Islands (the)",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern Territories (the)",
  "Gabon",
  "Gambia (the)",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Holy See (the)",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic (the)",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands (the)",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands (the)",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger (the)",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands (the)",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines (the)",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten (Dutch part)",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan (the)",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania, United Republic of",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands (the)",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates (the)",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands"
];

const imageFile = ref("");
const uploadFiles = ref([]);

const onChange = (e) => {
  uploadFiles.value = [];
  if (e.target.files.length === 0) {
    imageFile.value = "";
  }
  console.log(e.target.files);
  imageFile.value = e.target.files;

  for (let i = 0; i < imageFile.value.length; i++) {
    uploadFiles.value.push(imageFile.value[i]);
  }
  console.log(uploadFiles.value);
}


function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

function freeTrial() {
  $axios.post('http://api.photoedits.com/api/free-trial-info',  allInfo.value )
      .then((response) => {
        console.log(response);
      });

  sendStatus.value = true;
  status.value = true
  const fd = new FormData();
  for(let i= 0; i < imageFile.value.length; i++){
    fd.append('image[]', imageFile.value[i]);
  }

  console.log('fd',fd);
  $axios.post('http://api.photoedits.com/api/free-trial', fd)
      .then((response) => {
        if(response.status == 200){
          sendStatus.value = false;
          sendStatusDone.value = true;
          uploadFiles.value = '';
          resetData();
        }
      })
}
</script>

<style  scoped>
select{
  line-height: 1.2;
  width: 100%;
  padding: 10px;
  background: #f8f8f9;
  border: none;
}
.contact {
  padding-bottom: 85px;
}

.contact .heading {
  visibility: visible;
  animation-name: fadeInUp;
  background: #6371a287;
  padding: 50px;
  color: #fff;
}

.contact .heading h2 {
  font-size: 45px;
  font-weight: 700;
  color: #fff;
}

.contact .heading h2 span {
  color: #7035cf;
  font-weight: 700;
}

.contact .heading p {
  font-size: 30px;
  font-weight: 600;
  color: #fff;
  line-height: 26px;
  margin: 0;
}

.contact .main {
  background: #ffffff;
  box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.08);
  padding: 0 0 0 15px;
}

.contact .main h3 {
  font-size: 20px;
  font-weight: 500;
  color: #4a545e;
  margin-bottom: 20px;
}

.contact .form-control {
  padding: 25px;
  font-size: 13px;
  margin-bottom: 10px;
  background: #f8f8f9;
  border: 0;
  border-radius: 5px;
}

.contact button.btn {
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  background: linear-gradient(to right, rgba(114, 96, 206, 1) 0%, rgba(70, 96, 241, 1) 100%);
  color: #ffffff;
}

.contact .main .left {
  padding: 40px 60px;
  background: #fff;
}

.contact .main .right {
  background: #6371a287;
  background-size: cover;
  padding: 40px;
  color: #ffffff;
  height: 100%;
}

.contact .main .right h4 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
}

.contact .main .right .info {
  margin-bottom: 10px;
}

.contact .main .right .info i {
  font-size: 25px;
  color: #ffffff;
}

.contact .main .right .info span {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-left: 15px;
}
.contact .info a:hover {
  color: #ccc;
}

.contact .info a {
  color: #ffff;
}

.contact .main .right .social a {
  text-decoration: none;
  font-size: 30px;
  color: #ffffff;
  margin-right: 20px;
}

.service-box {
  margin-bottom: 20px;
}

.service-box .col-md-4 {
  padding: 0;
}

.service-box label {
  font-size: 14px;
  margin: 10px 0;
  background: #f8f8f9;
  padding: 5px 7px;
  border-radius: 5px;
  width: 90%;
  text-align: center;
}

.service-box input {
  margin: 4px 5px 0;
}

.form-control {
  font-family: system-ui, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
}

.social-link {
  padding: 8px;
}

.social-link a {
  margin: 0 8px;
  color: #007bff;
}

.in-active {
  display: none;
}

.active {
  display: block;
}

</style>