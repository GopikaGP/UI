// Import necessary libraries
// import React from 'react';
import Layout from '../../components/Layout/Layout';
import '../../styles/EditProfile.css'
import React from 'react';

const ContactDetails = () => (
    
  <div className="col-xxl-8 mb-5 mb-xxl-0">
    <div className="bg-secondary-soft px-4 py-5 rounded">
      <div className="row g-3">
        <h4 className="mb-4 mt-0">Contact detail</h4>
        <div className="col-md-6">
          <label className="form-label">First Name *</label>
          <input type="text" className="form-control" placeholder="" aria-label="First name" value="David" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Last Name *</label>
          <input type="text" className="form-control" placeholder="" aria-label="Last name" value="Doe" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone number *</label>
          <input type="text" className="form-control" placeholder="" aria-label="Phone number" value="(333) 000 555" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Mobile number *</label>
          <input type="text" className="form-control" placeholder="" aria-label="Phone number" value="+91 9852 8855 252" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email *</label>
          <input type="email" className="form-control" id="inputEmail4" value="daviddeo@123.com" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Skype *</label>
          <input type="text" className="form-control" placeholder="" aria-label="Phone number" value="Scaralet D" />
        </div>
      </div>
    </div>
  </div>
);

const UploadProfilePhoto = () => (
  <div className="col-xxl-4">
    <div className="bg-secondary-soft px-4 py-5 rounded">
      <div className="row g-3">
        <h4 className="mb-4 mt-0">Upload your profile photo</h4>
        <div className="text-center">
          <div className="square position-relative display-2 mb-3">
            <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
          </div>
          <input type="file" id="customFile" name="file" hidden />
          <div className='btn_Upload_image'>
          <label className="btn btn-success-soft btn-block" htmlFor="customFile">Upload</label>
          <button type="button" className="btn btn-danger-soft">Remove</button>
          </div>
          <p className="text-muted mt-3 mb-0"><span className="me-1">Note:</span>Minimum size 300px x 300px</p>
        </div>
      </div>
    </div>
  </div>
);

const SocialMediaDetails = () => (
  <div className="col-xxl-6 mb-5 mb-xxl-0">
    <div className="bg-secondary-soft px-4 py-5 rounded">
      <div className="row g-3">
        <h4 className="mb-4 mt-0">Address details</h4>
       
        {/* ... other social media input fields ... */}
        <form>
      <div>
        <label className='form-label' for="name">Name</label>
        <input className='form-control' required type="text" id="name" name="name" autocomplete="name" enterkeyhint="next"/>
      </div>
      <div>
        <label className='form-label' for="street-address">Street address</label>
        <input className='form-control' type="text" id="street-address" name="street-address" autocomplete="street-address" required enterkeyhint="next"></input>
      
      </div>
      <div>
        <label className='form-label' for="postal-code">ZIP or postal code (optional)</label>
        <input className='form-control' id="postal-code" name="postal-code" autocomplete="postal-code" enterkeyhint="next"/>
      </div>
      <div>
        <label className='form-label' for="city">City</label>
        <input className='form-control' required type="text" id="city" name="city" autocomplete="address-level2" enterkeyhint="next"/>
      </div>
      <div>
        <label className='form-label' for="country">Country or region</label>
        <select className='form-control' id="country" name="country" autocomplete="country" enterkeyhint="done" required>
            <option></option>
            <option value="AF">Afghanistan</option>
            <option value="AX">Åland Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua &amp; Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AC">Ascension Island</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BT">Bhutan</option>
            <option value="BO">Bolivia</option>
            <option value="BA">Bosnia &amp; Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BV">Bouvet Island</option>
            <option value="BR">Brazil</option>
            <option value="IO">British Indian Ocean Territory</option>
            <option value="VG">British Virgin Islands</option>
            <option value="BN">Brunei</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="KH">Cambodia</option>
            <option value="CM">Cameroon</option>
            <option value="CA">Canada</option>
            <option value="CV">Cape Verde</option>
            <option value="BQ">Caribbean Netherlands</option>
            <option value="KY">Cayman Islands</option>
            <option value="CF">Central African Republic</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CX">Christmas Island</option>
            <option value="CC">Cocos (Keeling) Islands</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoros</option>
            <option value="CG">Congo - Brazzaville</option>
            <option value="CD">Congo - Kinshasa</option>
            <option value="CK">Cook Islands</option>
            <option value="CR">Costa Rica</option>
            <option value="CI">Côte d’Ivoire</option>
            <option value="HR">Croatia</option>
            <option value="CW">Curaçao</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czechia</option>
            <option value="DK">Denmark</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="GQ">Equatorial Guinea</option>
            <option value="ER">Eritrea</option>
            <option value="EE">Estonia</option>
            <option value="SZ">Eswatini</option>
            <option value="ET">Ethiopia</option>
            <option value="FK">Falkland Islands (Islas Malvinas)</option>
            <option value="FO">Faroe Islands</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
            <option value="PF">French Polynesia</option>
            <option value="TF">French Southern Territories</option>
            <option value="GA">Gabon</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Greece</option>
            <option value="GL">Greenland</option>
            <option value="GD">Grenada</option>
            <option value="GP">Guadeloupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GG">Guernsey</option>
            <option value="GN">Guinea</option>
            <option value="GW">Guinea-Bissau</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="HM">Heard &amp; McDonald Islands</option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IM">Isle of Man</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="JE">Jersey</option>
            <option value="JO">Jordan</option>
            <option value="KZ">Kazakhstan</option>
            <option value="KE">Kenya</option>
            <option value="KI">Kiribati</option>
            <option value="XK">Kosovo</option>
            <option value="KW">Kuwait</option>
            <option value="KG">Kyrgyzstan</option>
            <option value="LA">Laos</option>
            <option value="LV">Latvia</option>
            <option value="LB">Lebanon</option>
            <option value="LS">Lesotho</option>
            <option value="LR">Liberia</option>
            <option value="LY">Libya</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MO">Macao</option>
            <option value="MG">Madagascar</option>
            <option value="MW">Malawi</option>
            <option value="MY">Malaysia</option>
            <option value="MV">Maldives</option>
            <option value="ML">Mali</option>
            <option value="MT">Malta</option>
            <option value="MH">Marshall Islands</option>
            <option value="MQ">Martinique</option>
            <option value="MR">Mauritania</option>
            <option value="MU">Mauritius</option>
            <option value="YT">Mayotte</option>
            <option value="MX">Mexico</option>
            <option value="FM">Micronesia</option>
            <option value="MD">Moldova</option>
            <option value="MC">Monaco</option>
            <option value="MN">Mongolia</option>
            <option value="ME">Montenegro</option>
            <option value="MS">Montserrat</option>
            <option value="MA">Morocco</option>
            <option value="MZ">Mozambique</option>
            <option value="MM">Myanmar (Burma)</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NL">Netherlands</option>
            <option value="NC">New Caledonia</option>
            <option value="NZ">New Zealand</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Niger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NF">Norfolk Island</option>
            <option value="KP">North Korea</option>
            <option value="MK">North Macedonia</option>
            <option value="MP">Northern Mariana Islands</option>
            <option value="NO">Norway</option>
            <option value="OM">Oman</option>
            <option value="PK">Pakistan</option>
            <option value="PW">Palau</option>
            <option value="PS">Palestine</option>
            <option value="PA">Panama</option>
            <option value="PG">Papua New Guinea</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Peru</option>
            <option value="PH">Philippines</option>
            <option value="PN">Pitcairn Islands</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Qatar</option>
            <option value="RE">Réunion</option>
            <option value="RO">Romania</option>
            <option value="RU">Russia</option>
            <option value="RW">Rwanda</option>
            <option value="WS">Samoa</option>
            <option value="SM">San Marino</option>
            <option value="ST">São Tomé &amp; Príncipe</option>
            <option value="SA">Saudi Arabia</option>
            <option value="SN">Senegal</option>
            <option value="RS">Serbia</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leone</option>
            <option value="SG">Singapore</option>
            <option value="SX">Sint Maarten</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="SB">Solomon Islands</option>
            <option value="SO">Somalia</option>
            <option value="ZA">South Africa</option>
            <option value="GS">South Georgia &amp; South Sandwich Islands</option>
            <option value="KR">South Korea</option>
            <option value="SS">South Sudan</option>
            <option value="ES">Spain</option>
            <option value="LK">Sri Lanka</option>
            <option value="BL">St Barthélemy</option>
            <option value="SH">St Helena</option>
            <option value="KN">St Kitts &amp; Nevis</option>
            <option value="LC">St Lucia</option>
            <option value="MF">St Martin</option>
            <option value="PM">St Pierre &amp; Miquelon</option>
            <option value="VC">St Vincent &amp; Grenadines</option>
            <option value="SR">Suriname</option>
            <option value="SJ">Svalbard &amp; Jan Mayen</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="TW">Taiwan</option>
            <option value="TJ">Tajikistan</option>
            <option value="TZ">Tanzania</option>
            <option value="TH">Thailand</option>
            <option value="TL">Timor-Leste</option>
            <option value="TG">Togo</option>
            <option value="TK">Tokelau</option>
            <option value="TO">Tonga</option>
            <option value="TT">Trinidad &amp; Tobago</option>
            <option value="TA">Tristan da Cunha</option>
            <option value="TN">Tunisia</option>
            <option value="TR">Turkey</option>
            <option value="TM">Turkmenistan</option>
            <option value="TC">Turks &amp; Caicos Islands</option>
            <option value="TV">Tuvalu</option>
            <option value="UG">Uganda</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
            <option value="UY">Uruguay</option>
            <option value="UM">US Outlying Islands</option>
            <option value="VI">US Virgin Islands</option>
            <option value="UZ">Uzbekistan</option>
            <option value="VU">Vanuatu</option>
            <option value="VA">Vatican City</option>
            <option value="VE">Venezuela</option>
            <option value="VN">Vietnam</option>
            <option value="WF">Wallis &amp; Futuna</option>
            <option value="EH">Western Sahara</option>
            <option value="YE">Yemen</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabwe</option>
        </select> 
      </div>
      <button className='adress_btn'>Save address</button>
    </form>

        {/*  */}

      </div>
    </div>
  </div>
);

const ChangePassword = () => (
  <div className="col-xxl-6">
    <div className="bg-secondary-soft px-4 py-5 rounded">
      <div className="row g-3">
        <h4 className="my-4">Change Password</h4>
      
								<div class="col-md-6">
									<label for="exampleInputPassword1" class="form-label">Old password *</label>
									<input type="password" class="form-control" id="exampleInputPassword1"/>
								</div>
								
								<div class="col-md-6">
									<label for="exampleInputPassword2" class="form-label">New password *</label>
									<input type="password" class="form-control" id="exampleInputPassword2"/>
								</div>
							
								<div class="col-md-12">
									<label for="exampleInputPassword3" class="form-label">Confirm Password *</label>
									<input type="password" class="form-control" id="exampleInputPassword3"/>
								</div>
      </div>
    </div>
  </div>
);

const ProfileForm = () => (
    <Layout>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="my-5">
          <h3>My Profile</h3>
          <hr />
        </div>
        <form className="file-upload">
          <div className="row mb-5 gx-5">
            <ContactDetails />
            <UploadProfilePhoto />
          </div>
          <div className="row mb-5 gx-5">
            <SocialMediaDetails />
            <ChangePassword />
          </div>
          <div className="gap-3 d-md-flex justify-content-md-end text-center">
            <button type="button" className="btn btn-danger btn-lg">Delete profile</button>
            <button type="button" className="btn btn-primary btn-lg">Update profile</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </Layout>
  
);

export default ProfileForm;
