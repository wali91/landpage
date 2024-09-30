<template>
  <div class="container-fluid top pt-5">
    <h1 class="title">{{ $t('form_page.Title') }}</h1>
    <h4>{{ $t('form_page.Heading') }}</h4>
  </div>
  <div class="container-fluid bottom pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-3 textbar">
          <div class="row">
            <div class="col-12 text-left">
              <h4 class="heading mt-4">{{ $t('form_page.HeadingOne') }}</h4>
              <p>{{ $t('form_page.BodyOne') }}.</p>
            </div>
            <div class="col-12 text-left">
              <h4 class="heading">{{ $t('form_page.HeadingTwo') }}</h4>
              <p>{{ $t('form_page.BodyTwo') }}</p>
            </div>
            <div class="col-12 text-left">
              <h4 class="heading">{{ $t('form_page.HeadingThree') }}</h4>
              <p>{{ $t('form_page.BodyThree') }}</p>
            </div>
            <img src="forms.svg" alt="Forms Image" height="200">
          </div>
        </div>
        <div class="col-6 text-left">
          <div class="container formcontainer pt-4 pb-4">
            <form @submit.prevent="handleSubmit">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label for="first-name">{{ $t('form_page.FirstName') }}</label>
                    <input type="text" id="first-name" v-model="firstName" @input="validateName" :placeholder="$t('form_page.FillName')" required>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label for="last-name">{{ $t('form_page.LastName') }}<span style="font-size:10px;">(Optional)</span></label>
                    <input type="text" id="last-name" v-model="lastName" @input="validateName" :placeholder="$t('form_page.FillLast')">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="email">{{ $t('form_page.Email') }}</label>
                <input type="email" id="email" v-model="email" @input="validateEmail" :placeholder="$t('form_page.FillEmail')" required>
              </div>
              <div class="form-group">
                <label for="phone">{{ $t('form_page.Phone') }}<span style="font-size:10px;">  (Optional)</span></label>
                <div style="display: flex;">
                  <div class="selectwrap">
                    <select id="country-code" v-model="selectedCountryCode" name="country_code" style="width: 100px;">
                      <option v-for="(item, idx) in listCountry" :key="idx" :value="item.countryCallingCode">
                        {{ `+ ${item.countryCallingCode} (${item.countryCode})` }}
                      </option>
                    </select>
                  </div>
                  <input type="tel" id="phone" name="phone" v-model="phone" @input="validatePhone" style="flex: 2; margin-left: 10px;" :placeholder="$t('form_page.FillPhone')">
                </div>
              </div>
              <div class="form-group">
                <label for="subject">{{ $t('form_page.Subject') }}</label>
                <input type="text" id="subject" v-model="subject" @input="validateSubject" :placeholder="$t('form_page.FillSubject')" required>
              </div>
              <div class="form-group">
                <label for="message">{{ $t('form_page.Message') }}</label>
                <textarea id="message" v-model="message" @input="validateMessage" :placeholder="$t('form_page.FillMessage')" required></textarea>
              </div>
              <div class="form-group btn-group">
                <button class="submit" type="submit" :class="{ 'inactive': !isFormValid }" :disabled="!isFormValid">{{ $t('form_page.Submit') }}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import countryCodes from 'country-codes-list';
/* eslint-disable vue/multi-word-component-names */

export default {
  name: 'Form',
  props: {
   content: String
  },
  data() {
    return {
      listCountry: [],
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      selectedCountryCode: '62'
    };
  },
  mounted() {
    this.listCountry = countryCodes.all();
  },
  computed: {
    isFirstNameValid() {
      return /^[a-zA-Z]+$/.test(this.firstName);
    },
    isLastNameValid() {
      return /^[a-zA-Z]*$/.test(this.lastName);
    },
    isEmailValid() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.email);
    },
    isPhoneValid() {
      const phonePattern = /^[1-9][0-9]{0,14}$/; // No leading zeros and max 15 digits
      return phonePattern.test(this.phone);
    },
    isSubjectValid() {
      return this.subject.trim() !== '';
    },
    isMessageValid() {
      return this.message.trim() !== '';
    },
    isFormValid() {
      return this.isFirstNameValid && this.isLastNameValid && this.isEmailValid && this.isPhoneValid && this.isSubjectValid && this.isMessageValid;
    }
  },
  methods: {
    validateName(event) {
      const value = event.target.value;
      // Only allow alphabetical characters
      event.target.value = value.replace(/[^a-zA-Z]/g, '');
      this.firstName = event.target.value; // or this.lastName if the event is from last name field
    },
    validateEmail(event) {
      // Ensure the email is valid according to the pattern
      this.email = event.target.value;
    },
    validatePhone(event) {
      const value = event.target.value;
      // Remove non-numeric characters and ensure no leading zeros
      event.target.value = value.replace(/[^0-9]/g, '');
      if (event.target.value.startsWith('0')) {
        event.target.value = event.target.value.replace(/^0+/, '');
      }
      this.phone = event.target.value;
    },
    validateSubject(event) {
      this.subject = event.target.value;
    },
    validateMessage(event) {
      this.message = event.target.value;
    },
  async handleSubmit() {
    if (this.isFormValid) {
      try {
        const response = await axios.post('https://dev.wabiz.id/api/v1/auth/landing/sent-email', {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          phone: this.phone,
          subject: this.subject,
          content: this.message
        }, {
          headers: {
            'Content-Type': 'application/json',
            'platform': 'api'
          }
        });

        if (response.status === 200 || response.status === 201) {
          alert('Form submitted successfully!');
          this.resetForm();
        } else {
          alert('Failed to submit the form.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
      }
    }
  },
  resetForm() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.subject = '';
    this.message = '';
  }
}
  
};
</script>

<style scoped>
.top {
  height: 25vh;
  background-color: #009C77;
  color: white;
  font-family: 'Metrophobic', sans-serif;
}

.btn-group {
  display: flex;
  justify-content: center;
}

.submit {
  border-radius: 10px;
  background-color: #00DFA2;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 1em;
}

.submit:hover {
  background-color: #00DFA2;
}

.submit.inactive {
  background-color: gray;
  cursor: not-allowed;
}

.formcontainer {
  background-color: white;
  border: 2px solid #eaeef4 ;
  color: #009C77;
  width: 80%;
  margin-bottom: 5vh;
  border-radius: 10px;
}

textarea {
  width: 100%;
  height: 26vh;
  border-radius: 10px;
  border: 1px solid darkgray;
}

.selectwrap {
  border-radius: 10px;
  border: 1px solid darkgray;
  padding: 0 .3em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
}

select {
  border: none;
}

input {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid darkgray;
}

input::placeholder {
  padding: 0 .4em;
}

textarea::placeholder {
  padding: 0 .4em;
}

.bottom {
  font-family: 'Metrophobic', sans-serif;
}

.text-left {
  text-align: left;
}

.title {
  font-weight: 600;
}

p {
  font-size: 13px;
}

.heading {
  color: #009C77;
}

.warning {
  color: red;
  font-size: 12px;
  margin-top: 0.5em;
  display: block;
  width: 100%;
  text-align: left;
  padding: 0 0.4em;
  box-sizing: border-box;
}
</style>
