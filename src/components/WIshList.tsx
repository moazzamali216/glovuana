"use client"
"use client"
import React, { useState } from "react";
import { useForm } from "@formspree/react"; // Import Formspree hook
import "../app/index2.0.css"

export function WishList() {
  const [state, handleSubmit] = useForm("mpwzppzr"); // Replace 'mpwzppzr' with your Formspree form ID

  // State to handle form input data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    telephone: "",
    termsAccepted: false,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      termsAccepted: !prevData.termsAccepted,
    }));
  };

  // Handle form submission (with explicit type for event)
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e); // Trigger Formspree's handleSubmit
  };
  return (<>

    <section className="container my-24 w-full">
      <div style={{ backgroundImage: "url(/assets/bg-wishlist.png)" }} className=" w-full wish-cont sm:gap-0 gap-6 flex sm:flex-row flex-col justify-between sm:h-screen contain object-center bg-no-repeat bg-center">
        <div className=" w-fit">
          <h1 className="jost font-bold text-4xl italic leading-[45px]">Crafting Tommorrow's <br />Business Tools Today.</h1>
          <h3 className="poppins text-3xl mt-10">Join the waitlist</h3>
          <p className="poppins w-full sm:w-[340px] font-semibold  text-sm">Don't miss out! Join our waitlist now for exclusive early access and be the first to experience the future of business management.</p>
          <div className="mt-6">
            <form onSubmit={handleFormSubmit}>
              <div className=" flex sm:flex-row flex-col gap-4  relative">
                <label htmlFor="firstName" className="absolute text-black text-xs poppins left-2">First Name</label>
                <input className="px-2 w-full sm:w-[150px] border rounded-md pt-3 border-[black] py-2"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="lastName" className="absolute text-black left-2 sm:left-auto top-[63px] sm:top-0 sm:right-[35%] text-xs">Last Name</label>
                <input
                  className="px-2 w-full sm:w-[150px] border rounded-md pt-3 border-[black] py-2"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className=" flex sm:flex-row flex-col gap-4 mt-3 relative">
                <label htmlFor="email" className="absolute text-black text-xs poppins left-2">Email</label>
                <input className="px-2 w-full sm:w-[180px] border rounded-md pt-3 border-[black] py-2"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />



                <label htmlFor="company" className="absolute text-black left-2 top-[63px] sm:top-0 sm:left-auto sm:right-[27.75%] text-xs">Company</label>
                <input
                  className="px-2 w-w-full sm:w-[120px] border rounded-md pt-3 border-[black] py-2"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className=" flex gap-4 mt-3 relative">
                <label htmlFor="Country" className="absolute text-black text-xs poppins left-2">Country</label>
                <select
                  className="px-2 w-full bg-white sm:w-[88.5%] text-sm border rounded-md pt-3 border-[black] py-2.5"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cabo Verde">Cabo Verde</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
<option value="Congo (Democratic Republic of the Congo)">Congo (Democratic Republic of the Congo)</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic (Czechia)">Czech Republic (Czechia)</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Eswatini">Eswatini</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Greece">Greece</option>
<option value="Grenada">Grenada</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Honduras">Honduras</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Korea (North)">Korea (North)</option>
<option value="Korea (South)">Korea (South)</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Laos">Laos</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libya">Libya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia</option>
<option value="Moldova">Moldova</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="North Macedonia">North Macedonia</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Qatar">Qatar</option>
<option value="Romania">Romania</option>
<option value="Russia">Russia</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
<option value="Saint Lucia">Saint Lucia</option>
<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option>
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Serbia">Serbia</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra Leone">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Sudan">South Sudan</option>
<option value="Spain">Spain</option>
<option value="Sri Lanka">Sri Lanka</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syria</option>
<option value="Taiwan">Taiwan</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania</option>
<option value="Thailand">Thailand</option>
<option value="Timor-Leste">Timor-Leste</option>

                </select>
              </div>

              <div className=" flex gap-4 mt-3 relative">
                <label htmlFor="telephone" className="absolute text-black text-xs poppins left-2">Telephone</label>
                <input
                  className="px-2 w-full sm:w-[68%] border rounded-md pt-3 border-[black] py-2"
                  type="text"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-2">
                <label className="text-sm  poppins ">
                  <input className=""
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                    required
                  />
                  <span className="ml-4">I agree to the terms and conditions</span>
                </label>
              </div>

              <button    style={{
                  backgroundImage: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,10,40,1) 0%, rgba(221,20,77,1) 100%)',
                }}       className="text-white font-semibold mt-4 px-6 py-3 rounded-lg"
                type="submit" disabled={!formData.termsAccepted}>
                Join the waitlist
              </button>

              {/* Show success message after submission */}
              {state.succeeded && <p className="jost text-xl font-semibold mt-6">Thank you for your submission!</p>}

              {/* Show error message if submission failed */}

            </form>
          </div>
        </div>
        <div className="w-full sm:w-fit   flex flex-col items-center justify-center">
           <img src="/assets/card.png" className=" w-[235px]"  alt="" />
           <h1 className="poppins text-lg mt-5"><span className="text-2xl font-medium">Over 80+ </span>countries using <br /> our service without <br /> any hassle.</h1>
           <div className="w-full items-center gap-2 mt-4  flex"><img src="/assets/diamond.png" className="w-[90px]" alt="" />
           <div>
            <h1 className="poppins text-4xl font-medium ">4.5K+</h1>
            <h4 className="font-light">ACTIVE USERS</h4>
            </div>
           </div>
        </div>
      </div>
    </section>

  </>)
}