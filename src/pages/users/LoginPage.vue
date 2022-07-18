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
            <div class="text-center q-pt-lg">
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
                  class="full-width"
                  rounded
                  label="Login"
                  type="submit"
                  color="amber-9"
                />
                <q-btn label="Register" to="/auth/registrasi" color="primary" flat class="q-ml-sm full-width" />
              </div>
              <br />

              <div>
                <div class="row">
                  <div class="col text-center">
                    <router-link
                      to="/forgotPass"
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

<!--<template>-->
<!--  <q-layout class="bg-blue-grey-1" view="hHh Lpr lFf">-->
<!--    <q-page-container>-->
<!--      <q-page padding class="row items-center justify-center">-->
<!--        <div class="row full-width">-->
<!--          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">-->
<!--            <q-card flat class="bg-white text-black">-->
<!--              <div class="row">-->
<!--                <div class="col-md-6 col-xs-12">-->
<!--                  <div class="row q-pt-md q-pb-md bg-white">-->
<!--                    <div class="col-md-8 offset-2 col-xs-8">-->
<!--                      <q-img spinner-color="white" placeholder-src="assets/loginImg.png" src="~assets/loginImg.png"></q-img>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col-md-6 col-xs-12 q-pt-md">-->
<!--                  <div class="q-pa-md">-->
<!--                    <div class="text-blue-grey-14 text-h4">Login</div>-->
<!--                    <q-card-section class="text-blue-grey-14"></q-card-section>-->
<!--                    <q-form-->
<!--                      @submit="onSubmit"-->
<!--                      class="q-gutter-md"-->
<!--                    >-->
<!--                      <q-input-->
<!--                        filled-->
<!--                        v-model="form.email"-->
<!--                        label="E-mail"-->
<!--                        hint="E-mail"-->
<!--                        lazy-rules-->
<!--                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"-->
<!--                      />-->

<!--                      <q-input-->
<!--                        filled-->
<!--                        type="password"-->
<!--                        v-model="form.password"-->
<!--                        label="Password"-->
<!--                        lazy-rules-->
<!--                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"-->
<!--                      />-->

<!--                      <div>-->
<!--                        <q-btn label="Login" type="submit" color="primary"/>-->
<!--                        <q-btn label="Registrasi" to="/auth/registrasi" color="primary" flat class="q-ml-sm" />-->
<!--                      </div>-->
<!--                    </q-form>-->

<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </q-card>-->
<!--          </div>-->
<!--        </div>-->
<!--      </q-page>-->
<!--    </q-page-container>-->
<!--  </q-layout>-->
<!--</template>-->

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

    return {
      form: {
        email,
        password
      },
      accept,

      isPwd: ref(true)

    }
  },
  methods: {
    onSubmit: function () {
      api.post('/api/authentication/login', {
        email: this.form.email,
        password: this.form.password
      }).then(res => {
        console.log(res)
        if ((res.response.data.error)) {
          console.log('error wooooii')
        }
      }).catch(err => {
        if ((err.response.data.error)) {
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
</script>

<style scoped>

</style>
