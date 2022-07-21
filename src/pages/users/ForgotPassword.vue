<template>
  <q-layout class="bg-image" v-cloak>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-img spinner-color="white"
               v-bind:style="$q.screen.lt.md ? { display: 'none' } : { width: '20%' }"
               class="responsive" placeholder-src="assets/Forgopas.png" src="~assets/Forgopas.png"></q-img>

        <q-card
          class="login-form bg-grey-1"
          v-bind:style="$q.screen.lt.md ? { width: '60%' } : { width: '30%' }"
        >
          <q-card-section>
            <q-avatar size="74px" class="absolute-center shadow-10">
              <q-img spinner-color="white" style="background-color: orange" placeholder-src="assets/logo_uir.png" src="~assets/logo_uir.png"></q-img>

            </q-avatar>
          </q-card-section>
          <q-card-section class="q-mt-md">
            <div class="text-h6 text-center">
              <q-item-label caption>
                Please enter your email address. You will receive an email
                message with instructions on how to reset your password
              </q-item-label>
            </div>

            <q-form class="q-gutter" @submit="onSubmit()">
              <q-input
                v-model="form.email"
                label="Email Address"
                type="email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
              ></q-input>
              <q-card-actions align="center">
                <q-btn
                  push
                  label="Set Password Reset Link"
                  type="submit"
                  class="text-capitalize"
                  color="primary"
                ></q-btn>
              </q-card-actions>
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
  name: 'ForgotPassword',
  data () {
    const email = ref(null)
    const accept = ref(false)
    // eslint-disable-next-line no-unused-vars
    let timer

    return {
      form: {
        email
      },
      accept,
      showLoading () {
        this.$q.loading.show()

        timer = setTimeout(() => {
          this.$q.loading.hide()
          timer = void 0
        }, 2000)
      }
    }
  },
  methods: {
    onSubmit: function () {
      this.showLoading()
      api.post('/api/registration/forgot-password', {
        email: this.form.email
      }).then(res => {
        console.log(res.data.data)
        this.$q.localStorage.set('datauser', res.data.data)
        this.$router.push('passwordreset')
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
</script>

<style scoped>
[v-cloak] {
  display: none !important;
}
</style>
