"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [plans, setPlans] = React.useState([]);
  const [selectedPackage, setSelectedPackage] = React.useState();
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
    fetch('/api/pricing-plan').then(res => res.json()).then(data => {setPlans(data); console.log(data)});
  }, []);
  if (!hasMounted) {
    return null;
  }

  const handleSubscribe = async (priceId) => {
    const stripe = await stripePromise;
    const { sessionId } = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId }),
    }).then(res => res.json());

    const result = await stripe?.redirectToCheckout({ sessionId });
    if (result && result.error) {
      console.error(result.error);
    }

  }

  const handleChange = (event) => {
    setSelectedPackage(event.target.value);
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target.package.value);
    handleSubscribe(event.target.package.value);
  };

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="py-20 lg:py-25 xl:py-30">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-linear-to-t from-transparent to-[#dee7ff47] dark:bg-linear-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form onSubmit={handleSubmit}
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="Organization"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="text"
                    placeholder="State"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <select
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  >
                    <option value="0" label="Select a country ... " defaultValue="US">Select a country ... </option>
                    <optgroup id="country-optgroup-Africa" label="Africa">
                      <option value="DZ" label="Algeria">Algeria</option>
                      <option value="AO" label="Angola">Angola</option>
                      <option value="BJ" label="Benin">Benin</option>
                      <option value="BW" label="Botswana">Botswana</option>
                      <option value="BF" label="Burkina Faso">Burkina Faso</option>
                      <option value="BI" label="Burundi">Burundi</option>
                      <option value="CM" label="Cameroon">Cameroon</option>
                      <option value="CV" label="Cape Verde">Cape Verde</option>
                      <option value="CF" label="Central African Republic">Central African Republic</option>
                      <option value="TD" label="Chad">Chad</option>
                      <option value="KM" label="Comoros">Comoros</option>
                      <option value="CG" label="Congo - Brazzaville">Congo - Brazzaville</option>
                      <option value="CD" label="Congo - Kinshasa">Congo - Kinshasa</option>
                      <option value="CI" label="Côte d’Ivoire">Côte d’Ivoire</option>
                      <option value="DJ" label="Djibouti">Djibouti</option>
                      <option value="EG" label="Egypt">Egypt</option>
                      <option value="GQ" label="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="ER" label="Eritrea">Eritrea</option>
                      <option value="ET" label="Ethiopia">Ethiopia</option>
                      <option value="GA" label="Gabon">Gabon</option>
                      <option value="GM" label="Gambia">Gambia</option>
                      <option value="GH" label="Ghana">Ghana</option>
                      <option value="GN" label="Guinea">Guinea</option>
                      <option value="GW" label="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="KE" label="Kenya">Kenya</option>
                      <option value="LS" label="Lesotho">Lesotho</option>
                      <option value="LR" label="Liberia">Liberia</option>
                      <option value="LY" label="Libya">Libya</option>
                      <option value="MG" label="Madagascar">Madagascar</option>
                      <option value="MW" label="Malawi">Malawi</option>
                      <option value="ML" label="Mali">Mali</option>
                      <option value="MR" label="Mauritania">Mauritania</option>
                      <option value="MU" label="Mauritius">Mauritius</option>
                      <option value="YT" label="Mayotte">Mayotte</option>
                      <option value="MA" label="Morocco">Morocco</option>
                      <option value="MZ" label="Mozambique">Mozambique</option>
                      <option value="NA" label="Namibia">Namibia</option>
                      <option value="NE" label="Niger">Niger</option>
                      <option value="NG" label="Nigeria">Nigeria</option>
                      <option value="RW" label="Rwanda">Rwanda</option>
                      <option value="RE" label="Réunion">Réunion</option>
                      <option value="SH" label="Saint Helena">Saint Helena</option>
                      <option value="SN" label="Senegal">Senegal</option>
                      <option value="SC" label="Seychelles">Seychelles</option>
                      <option value="SL" label="Sierra Leone">Sierra Leone</option>
                      <option value="SO" label="Somalia">Somalia</option>
                      <option value="ZA" label="South Africa">South Africa</option>
                      <option value="SD" label="Sudan">Sudan</option>
                      <option value="SZ" label="Swaziland">Swaziland</option>
                      <option value="ST" label="São Tomé and Príncipe">São Tomé and Príncipe</option>
                      <option value="TZ" label="Tanzania">Tanzania</option>
                      <option value="TG" label="Togo">Togo</option>
                      <option value="TN" label="Tunisia">Tunisia</option>
                      <option value="UG" label="Uganda">Uganda</option>
                      <option value="EH" label="Western Sahara">Western Sahara</option>
                      <option value="ZM" label="Zambia">Zambia</option>
                      <option value="ZW" label="Zimbabwe">Zimbabwe</option>
                    </optgroup>
                    <optgroup id="country-optgroup-Americas" label="Americas">
                      <option value="AI" label="Anguilla">Anguilla</option>
                      <option value="AG" label="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="AR" label="Argentina">Argentina</option>
                      <option value="AW" label="Aruba">Aruba</option>
                      <option value="BS" label="Bahamas">Bahamas</option>
                      <option value="BB" label="Barbados">Barbados</option>
                      <option value="BZ" label="Belize">Belize</option>
                      <option value="BM" label="Bermuda">Bermuda</option>
                      <option value="BO" label="Bolivia">Bolivia</option>
                      <option value="BR" label="Brazil">Brazil</option>
                      <option value="VG" label="British Virgin Islands">British Virgin Islands</option>
                      <option value="CA" label="Canada">Canada</option>
                      <option value="KY" label="Cayman Islands">Cayman Islands</option>
                      <option value="CL" label="Chile">Chile</option>
                      <option value="CO" label="Colombia">Colombia</option>
                      <option value="CR" label="Costa Rica">Costa Rica</option>
                      <option value="CU" label="Cuba">Cuba</option>
                      <option value="DM" label="Dominica">Dominica</option>
                      <option value="DO" label="Dominican Republic">Dominican Republic</option>
                      <option value="EC" label="Ecuador">Ecuador</option>
                      <option value="SV" label="El Salvador">El Salvador</option>
                      <option value="FK" label="Falkland Islands">Falkland Islands</option>
                      <option value="GF" label="French Guiana">French Guiana</option>
                      <option value="GL" label="Greenland">Greenland</option>
                      <option value="GD" label="Grenada">Grenada</option>
                      <option value="GP" label="Guadeloupe">Guadeloupe</option>
                      <option value="GT" label="Guatemala">Guatemala</option>
                      <option value="GY" label="Guyana">Guyana</option>
                      <option value="HT" label="Haiti">Haiti</option>
                      <option value="HN" label="Honduras">Honduras</option>
                      <option value="JM" label="Jamaica">Jamaica</option>
                      <option value="MQ" label="Martinique">Martinique</option>
                      <option value="MX" label="Mexico">Mexico</option>
                      <option value="MS" label="Montserrat">Montserrat</option>
                      <option value="AN" label="Netherlands Antilles">Netherlands Antilles</option>
                      <option value="NI" label="Nicaragua">Nicaragua</option>
                      <option value="PA" label="Panama">Panama</option>
                      <option value="PY" label="Paraguay">Paraguay</option>
                      <option value="PE" label="Peru">Peru</option>
                      <option value="PR" label="Puerto Rico">Puerto Rico</option>
                      <option value="BL" label="Saint Barthélemy">Saint Barthélemy</option>
                      <option value="KN" label="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="LC" label="Saint Lucia">Saint Lucia</option>
                      <option value="MF" label="Saint Martin">Saint Martin</option>
                      <option value="PM" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                      <option value="VC" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                      <option value="SR" label="Suriname">Suriname</option>
                      <option value="TT" label="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="TC" label="Turks and Caicos Islands">Turks and Caicos Islands</option>
                      <option value="VI" label="U.S. Virgin Islands">U.S. Virgin Islands</option>
                      <option value="US" label="United States">United States</option>
                      <option value="UY" label="Uruguay">Uruguay</option>
                      <option value="VE" label="Venezuela">Venezuela</option>
                    </optgroup>
                    <optgroup id="country-optgroup-Asia" label="Asia">
                      <option value="AF" label="Afghanistan">Afghanistan</option>
                      <option value="AM" label="Armenia">Armenia</option>
                      <option value="AZ" label="Azerbaijan">Azerbaijan</option>
                      <option value="BH" label="Bahrain">Bahrain</option>
                      <option value="BD" label="Bangladesh">Bangladesh</option>
                      <option value="BT" label="Bhutan">Bhutan</option>
                      <option value="BN" label="Brunei">Brunei</option>
                      <option value="KH" label="Cambodia">Cambodia</option>
                      <option value="CN" label="China">China</option>
                      <option value="GE" label="Georgia">Georgia</option>
                      <option value="HK" label="Hong Kong SAR China">Hong Kong SAR China</option>
                      <option value="IN" label="India">India</option>
                      <option value="ID" label="Indonesia">Indonesia</option>
                      <option value="IR" label="Iran">Iran</option>
                      <option value="IQ" label="Iraq">Iraq</option>
                      <option value="IL" label="Israel">Israel</option>
                      <option value="JP" label="Japan">Japan</option>
                      <option value="JO" label="Jordan">Jordan</option>
                      <option value="KZ" label="Kazakhstan">Kazakhstan</option>
                      <option value="KW" label="Kuwait">Kuwait</option>
                      <option value="KG" label="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="LA" label="Laos">Laos</option>
                      <option value="LB" label="Lebanon">Lebanon</option>
                      <option value="MO" label="Macau SAR China">Macau SAR China</option>
                      <option value="MY" label="Malaysia">Malaysia</option>
                      <option value="MV" label="Maldives">Maldives</option>
                      <option value="MN" label="Mongolia">Mongolia</option>
                      <option value="MM" label="Myanmar [Burma]">Myanmar [Burma]</option>
                      <option value="NP" label="Nepal">Nepal</option>
                      <option value="NT" label="Neutral Zone">Neutral Zone</option>
                      <option value="KP" label="North Korea">North Korea</option>
                      <option value="OM" label="Oman">Oman</option>
                      <option value="PK" label="Pakistan">Pakistan</option>
                      <option value="PS" label="Palestinian Territories">Palestinian Territories</option>
                      <option value="YD" label="People's Democratic Republic of Yemen">People's Democratic Republic of Yemen</option>
                      <option value="PH" label="Philippines">Philippines</option>
                      <option value="QA" label="Qatar">Qatar</option>
                      <option value="SA" label="Saudi Arabia">Saudi Arabia</option>
                      <option value="SG" label="Singapore">Singapore</option>
                      <option value="KR" label="South Korea">South Korea</option>
                      <option value="LK" label="Sri Lanka">Sri Lanka</option>
                      <option value="SY" label="Syria">Syria</option>
                      <option value="TW" label="Taiwan">Taiwan</option>
                      <option value="TJ" label="Tajikistan">Tajikistan</option>
                      <option value="TH" label="Thailand">Thailand</option>
                      <option value="TL" label="Timor-Leste">Timor-Leste</option>
                      <option value="TR" label="Turkey">Turkey</option>
                      <option value="TM" label="Turkmenistan">Turkmenistan</option>
                      <option value="AE" label="United Arab Emirates">United Arab Emirates</option>
                      <option value="UZ" label="Uzbekistan">Uzbekistan</option>
                      <option value="VN" label="Vietnam">Vietnam</option>
                      <option value="YE" label="Yemen">Yemen</option>
                    </optgroup>
                    <optgroup id="country-optgroup-Europe" label="Europe">
                      <option value="AL" label="Albania">Albania</option>
                      <option value="AD" label="Andorra">Andorra</option>
                      <option value="AT" label="Austria">Austria</option>
                      <option value="BY" label="Belarus">Belarus</option>
                      <option value="BE" label="Belgium">Belgium</option>
                      <option value="BA" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="BG" label="Bulgaria">Bulgaria</option>
                      <option value="HR" label="Croatia">Croatia</option>
                      <option value="CY" label="Cyprus">Cyprus</option>
                      <option value="CZ" label="Czech Republic">Czech Republic</option>
                      <option value="DK" label="Denmark">Denmark</option>
                      <option value="DD" label="East Germany">East Germany</option>
                      <option value="EE" label="Estonia">Estonia</option>
                      <option value="FO" label="Faroe Islands">Faroe Islands</option>
                      <option value="FI" label="Finland">Finland</option>
                      <option value="FR" label="France">France</option>
                      <option value="DE" label="Germany">Germany</option>
                      <option value="GI" label="Gibraltar">Gibraltar</option>
                      <option value="GR" label="Greece">Greece</option>
                      <option value="GG" label="Guernsey">Guernsey</option>
                      <option value="HU" label="Hungary">Hungary</option>
                      <option value="IS" label="Iceland">Iceland</option>
                      <option value="IE" label="Ireland">Ireland</option>
                      <option value="IM" label="Isle of Man">Isle of Man</option>
                      <option value="IT" label="Italy">Italy</option>
                      <option value="JE" label="Jersey">Jersey</option>
                      <option value="LV" label="Latvia">Latvia</option>
                      <option value="LI" label="Liechtenstein">Liechtenstein</option>
                      <option value="LT" label="Lithuania">Lithuania</option>
                      <option value="LU" label="Luxembourg">Luxembourg</option>
                      <option value="MK" label="Macedonia">Macedonia</option>
                      <option value="MT" label="Malta">Malta</option>
                      <option value="FX" label="Metropolitan France">Metropolitan France</option>
                      <option value="MD" label="Moldova">Moldova</option>
                      <option value="MC" label="Monaco">Monaco</option>
                      <option value="ME" label="Montenegro">Montenegro</option>
                      <option value="NL" label="Netherlands">Netherlands</option>
                      <option value="NO" label="Norway">Norway</option>
                      <option value="PL" label="Poland">Poland</option>
                      <option value="PT" label="Portugal">Portugal</option>
                      <option value="RO" label="Romania">Romania</option>
                      <option value="RU" label="Russia">Russia</option>
                      <option value="SM" label="San Marino">San Marino</option>
                      <option value="RS" label="Serbia">Serbia</option>
                      <option value="CS" label="Serbia and Montenegro">Serbia and Montenegro</option>
                      <option value="SK" label="Slovakia">Slovakia</option>
                      <option value="SI" label="Slovenia">Slovenia</option>
                      <option value="ES" label="Spain">Spain</option>
                      <option value="SJ" label="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                      <option value="SE" label="Sweden">Sweden</option>
                      <option value="CH" label="Switzerland">Switzerland</option>
                      <option value="UA" label="Ukraine">Ukraine</option>
                      <option value="SU" label="Union of Soviet Socialist Republics">Union of Soviet Socialist Republics</option>
                      <option value="GB" label="United Kingdom">United Kingdom</option>
                      <option value="VA" label="Vatican City">Vatican City</option>
                      <option value="AX" label="Åland Islands">Åland Islands</option>
                    </optgroup>
                    <optgroup id="country-optgroup-Oceania" label="Oceania">
                      <option value="AS" label="American Samoa">American Samoa</option>
                      <option value="AQ" label="Antarctica">Antarctica</option>
                      <option value="AU" label="Australia">Australia</option>
                      <option value="BV" label="Bouvet Island">Bouvet Island</option>
                      <option value="IO" label="British Indian Ocean Territory">British Indian Ocean Territory</option>
                      <option value="CX" label="Christmas Island">Christmas Island</option>
                      <option value="CC" label="Cocos [Keeling] Islands">Cocos [Keeling] Islands</option>
                      <option value="CK" label="Cook Islands">Cook Islands</option>
                      <option value="FJ" label="Fiji">Fiji</option>
                      <option value="PF" label="French Polynesia">French Polynesia</option>
                      <option value="TF" label="French Southern Territories">French Southern Territories</option>
                      <option value="GU" label="Guam">Guam</option>
                      <option value="HM" label="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                      <option value="KI" label="Kiribati">Kiribati</option>
                      <option value="MH" label="Marshall Islands">Marshall Islands</option>
                      <option value="FM" label="Micronesia">Micronesia</option>
                      <option value="NR" label="Nauru">Nauru</option>
                      <option value="NC" label="New Caledonia">New Caledonia</option>
                      <option value="NZ" label="New Zealand">New Zealand</option>
                      <option value="NU" label="Niue">Niue</option>
                      <option value="NF" label="Norfolk Island">Norfolk Island</option>
                      <option value="MP" label="Northern Mariana Islands">Northern Mariana Islands</option>
                      <option value="PW" label="Palau">Palau</option>
                      <option value="PG" label="Papua New Guinea">Papua New Guinea</option>
                      <option value="PN" label="Pitcairn Islands">Pitcairn Islands</option>
                      <option value="WS" label="Samoa">Samoa</option>
                      <option value="SB" label="Solomon Islands">Solomon Islands</option>
                      <option value="GS" label="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                      <option value="TK" label="Tokelau">Tokelau</option>
                      <option value="TO" label="Tonga">Tonga</option>
                      <option value="TV" label="Tuvalu">Tuvalu</option>
                      <option value="UM" label="U.S. Minor Outlying Islands">U.S. Minor Outlying Islands</option>
                      <option value="VU" label="Vanuatu">Vanuatu</option>
                      <option value="WF" label="Wallis and Futuna">Wallis and Futuna</option>
                    </optgroup>
                  </select>

                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>
                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  {/* <input
                    type="text"
                    placeholder="Address"
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  /> */}
                  <select value={selectedPackage} onChange={handleChange} name="package" required className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2">
                    <option value="" selected disabled>Select Package</option>
                    <option value="price_1RP7IYCf4V9oKUMow4HqIbKQ">Essential Plan - Yearly ($3,720.00/year)</option>
                    <option value="price_1RP7IYCf4V9oKUMop9F71lmK">Essential Plan - Monthly ($349.00/month)</option>
                    <option value="price_1RyEp0Cf4V9oKUMoezjKW30o">Business Plan - Yearly ($4,920.00/year)</option>
                    <option value="price_1RP7HCCf4V9oKUMo9YPNQMWv">Business Plan - Monthly ($449.00/month)</option>
                    {/* <option value="price_1RW8A9Cf4V9oKUMoRIEA0goX">Testing</option> */}
                    <option value="custom">Custom</option>
                  </select>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <div className="mb-4 flex md:mb-0">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      className="peer sr-only"
                    />
                    <span className="border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded-sm peer-checked:bg-primary">
                      <svg
                        className="opacity-0 in-[.group]:peer-checked:opacity-100"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <label
                      htmlFor="default-checkbox"
                      className="flex cursor-pointer select-none pl-5"
                    >
                      <span>
                        By submitting this form, you consent to receiving marketing text messages from Refined Product LLC.
                        Message frequency may vary. Msg and Data rates apply. Reply "STOP" to unsubscribe.
                        Text HELP for assistance. Consent is not a condition of purchase.
                        View <a href="/terms">Terms and Conditions</a>  & <a href="/privacy">Privacy Policy</a></span>.
                    </label>
                  </div>

                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
                    type="submit"
                  >
                    Subscribe Now
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find us
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Our Loaction
                </h3>
                <p>5900 Balcones Drive Ste Austin, TX</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="#">info@txtli.io</a>
                </p>
              </div>
              {/* <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="#">+009 42334 6343 843</a>
                </p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
