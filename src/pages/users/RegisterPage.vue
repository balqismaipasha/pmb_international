<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card class="bg-grey-3"
                v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '30%' }"
        >
          <q-card-section>
            <q-avatar size="80px" class="absolute-center shadow-10">
              <q-img spinner-color="white" style="background-color: #ffc107" placeholder-src="assets/logo_uir.png" src="~assets/logo_uir.png"></q-img>
            </q-avatar>
          </q-card-section>

          <q-card-section>
            <div class="text-center q-pt-lg" style="font-family: sans-serif">
              <div class="col text-h6 ellipsis">
                <div class="text-bold">PMB International</div>
                <div class="text-weight-regular text-green-8">
                  Islamic University Of Riau
                </div>
                <q-item-label caption class="text-center items-xs-center"
                >Jl. Kaharuddin Nst No.113, Simpang Tiga
                </q-item-label>
                <q-item-label caption class="text-center items-xs-center"
                >Bukit Raya, Kota Pekanbaru, Riau
                </q-item-label>
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            <q-form class="q-gutter" @submit="onSubmit()">
              <q-input
                v-model="form.email"
                filled dense
                type="email"
                label="Email Address*"
                hint="Alamat Email"
                :rules="[(val) => !!val || 'Email is missing']"
              ></q-input>

              <q-input
                v-model="form.no_hp"
                filled dense
                type="number"
                label="Whatsapp Number*"
                hint="Nomor Whatsapp"
                :rules="[(val) => !!val || 'Whatsapp number is missing']"
              ></q-input>

              <q-input
                v-model="form.password"
                label="Password*"
                hint="Password"
                type="password"
                class="pswrd"
                filled dense
                :rules="[
                  (val) =>
                    (val && val.length > 0 && val.length <= 8) ||
                    'Please type something',
                ]"
              ></q-input>

              <q-input
                label="Password Confirm"
                hint="Konfirmasi Password"
                v-model="form.cpassword"
                type="password"
                class="cpswrd"
                filled dense
              ></q-input>

              <q-card-actions align="center">
                <q-btn
                  rounded
                  type="submit"
                  label="REGISTER"
                  class="text-capitalize text-white full-width"
                  style="background-color: green"
                ></q-btn>
              </q-card-actions>

              <br />

              <div class="row">
                <div class="col text-center">
                  <router-link to="/auth/login" class="text-weight-bold text-black"
                  >Already have an account?
                  </router-link>
                </div>
              </div>
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
  name: 'RegistrasiPage',
  data () {
    const email = ref(null)
    // eslint-disable-next-line camelcase
    const no_hp = ref(null)
    const password = ref(null)
    const cpassword = ref(null)
    const accept = ref(false)

    return {
      form: {
        email,
        // eslint-disable-next-line camelcase
        no_hp,
        password,
        cpassword
      },
      accept
    }
  },
  methods: {
    onSubmit: function () {
      if (this.form.password === this.form.cpassword) {
        this.$q.notify({
          color: 'negative',
          message: 'Password does not match',
          icon: 'ion-close'
        })
      } else if (this.form.password !== this.form.cpassword) {
        api.post('/api/registration/new-user', {
          email: this.form.email,
          no_hp: this.form.no_hp,
          password: this.form.password
        }).then(res => {
          console.log(res.data.data)
          this.$q.localStorage.set('datauser', res.data.data)
          this.$router.push('infoverification')
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
    }
  }
}
</script>

<style scoped>

</style>
