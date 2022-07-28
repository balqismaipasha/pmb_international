<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card-section
          v-bind:style="
            $q.screen.lt.md ? { display: 'none' } : { width: '40%' }
          "
        >
          <q-img spinner-color="white" placeholder-src="assets/loginImg.png" src="~assets/loginImg.png"></q-img>
        </q-card-section>

        <q-card
          class="bg-grey-3"
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
            <q-form class="q-gutter" @submit.prevent="onSubmit()">

              <q-input
                filled
                v-model="form.email"
                label="E-mail"
                hint="email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
              /> <br>

              <q-input
                v-model="form.password"
                filled label="Password"
                :type="isPwd ? 'password' : 'text'"
                hint="password"
                :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

              <br>
              <div>
                <q-btn
                  class="full-width text-white"
                  rounded
                  label="LOGIN"
                  type="submit"
                  style="background-color: green"
                />
                <q-btn label="Register" to="/auth/registrasi" color="primary" flat class="q-ml-sm full-width" />
              </div>
              <br />

              <div>
                <div class="row">
                  <div class="col text-center">
                    <router-link
                      to="/auth/forgotpassword"
                      class="text-weight-regular"
                    >Forgot password ?
                    </router-link>
                  </div>
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
// import { useQuasar } from 'quasar'

import { ref } from 'vue'
import { api } from 'boot/axios'

export default {
  name: 'LoginPage',

  data () {
    const email = ref(null)
    const password = ref(null)
    const accept = ref(false)
    // const $q = useQuasar()

    // eslint-disable-next-line no-unused-vars
    let timer

    return {
      form: {
        email,
        password
      },
      accept,
      showLoading () {
        this.$q.loading.show()

        timer = setTimeout(() => {
          this.$q.loading.hide()
          timer = void 0
        }, 2000)
      },

      isPwd: ref(true)

    }
  },
  methods: {
    onSubmit: function () {
      api.post('/api/authentication/login', {
        email: this.form.email,
        password: this.form.password
      }).then(res => {
        // console.log(res.data.data)
        this.$q.notify({
          color: 'positive',
          message: 'Welcome',
          icon: 'check_circle',
          position: 'top-right'
        })
        // console.log(res.data.data.token)
        this.$q.localStorage.set('token', res.data.data.token)
        this.$router.push('/pmb')
      }).catch(err => {
        if ((err.response.data.error)) {
          console.log(err.response.data.data.email)
          this.$q.notify({
            color: 'negative',
            message: err.response.data.message,
            icon: 'warning'
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
