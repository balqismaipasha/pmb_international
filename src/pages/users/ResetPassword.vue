<template>
  <q-layout
    class="bg-image"
    v-cloak
  >
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card
          class="login-form bg-grey-1"
          v-bind:style="$q.screen.lt.md ? { width: '80%' } : { width: '30%' }"
        >
          <q-card-section>
            <q-avatar size="74px" class="absolute-center shadow-10">
              <q-img spinner-color="white" style="background-color: #ffc107" placeholder-src="assets/logo_uir.png" src="~assets/logo_uir.png"></q-img>
            </q-avatar>
          </q-card-section>

          <q-card-section class="q-mt-md">
            <div class="text-h6 text-center text-weight-regular">
              <q-item-label>Reset Password</q-item-label>
              <q-item-label caption>
                Please create a new password that you don't use an any other
                site.
              </q-item-label>
              <br/>
            </div>
          </q-card-section>

          <q-card-section>
            <q-form class="q-gutter" @submit="onSubmit()">
              <q-input
                v-model="form.email"
                filled dense
                type="email"
                label="Email Address"
                :rules="[(val) => !!val || 'Email is missing']"
              >
              </q-input>

              <q-input
                filled dense
                v-model="form.password_baru"
                class="pswrd"
                :type="isPwd ? 'password' : 'text'"
                placeholder="New Password"
                :rules="[
                  (val) =>
                    (val && val.length > 0 && val.length <= 8) ||
                    'Please type something',
                ]"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

              <q-input
                label="Password Confirm"
                v-model="form.cpassword"
                type="password"
                class="cpswrd"
                filled dense
                :rules="[
                    (val) =>
                      (val && val.length > 0 && val.length <= 8) ||
                      'Please type something',
                  ]"
              ></q-input>

              <q-input
                v-model="form.kode"
                filled dense
                label="Verification Code"
              ></q-input>

              <q-card-actions align="center">
                <q-btn
                  push
                  label="Reset Password"
                  type="submit"
                  class="text-capitalize text-white"
                  style="background-color: green"
                ></q-btn>
              </q-card-actions>

              <q-card-section class="text-center">
                <router-link @click="sendCode()"  to="">Resend Verification Code?</router-link>
              </q-card-section>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { api } from 'boot/axios'

export default {
  name: 'ResetPassword',
  data () {
    const email = ref(null)
    // eslint-disable-next-line camelcase
    const no_hp = ref(null)
    // eslint-disable-next-line camelcase
    const password_baru = ref(null)
    const cpassword = ref(null)
    const kode = ref(null)
    const accept = ref(false)

    return {
      form: {
        email,
        // eslint-disable-next-line camelcase
        no_hp,
        // eslint-disable-next-line camelcase
        password_baru,
        cpassword,
        kode
      },
      accept
    }
  },
  methods: {
    onSubmit: function () {
      if (this.form.password_baru !== this.form.cpassword) {
        this.$q.notify({
          color: 'negative',
          message: 'Password does not match',
          icon: 'ion-close'
        })
      } else if (this.form.password_baru === this.form.cpassword) {
        api.post('/api/registration/reset-password', {
          email: this.form.email,
          password_baru: this.form.password_baru,
          kode: this.form.kode
        }).then(res => {
          console.log(res.data.data)
          this.$q.localStorage.set('datauser', res.data.data, this.email)
          this.$router.push('login')
        }).catch(err => {
          if ((err.response.data.error)) {
            console.log(err.response.data.data.email)
            this.$q.notify({
              color: 'negative',
              message: err.response.data.message,
              icon: 'ion-close'
            })
          }
        })
      }
    },
    sendCode: function () {
      api.post('/api/registration/forgot-password', {
        email: this.form.email
      })
    }
  }
}
</script>

<style scoped>
.bgim {
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: none;
  background-position: top center;
  background-size: 20%;
}

[v-cloak] {
  display: none !important;
}
</style>
