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
                v-model="form.email"
                filled
                type="email"
                label="Email Address"
                :rules="[(val) => !!val || 'Email is missing']"
              ></q-input>

              <q-input
                v-model="form.no_hp"
                filled
                type="number"
                label="Whatsapp Number"
                :rules="[(val) => !!val || 'Whatsapp number is missing']"
              ></q-input>

              <q-input
                v-model="form.password"
                label="Password"
                type="password"
                filled
                :rules="[
                  (val) =>
                    (val && val.length > 0 && val.length <= 8) ||
                    'Please type something',
                ]"
              ></q-input>

<!--              <q-input-->
<!--                rounded-->
<!--                label="Password Confirm"-->
<!--                type="password"-->
<!--                filled-->
<!--              ></q-input>-->

              <q-card-actions align="center">
                <q-btn
                  rounded
                  type="submit"
                  label="REGISTER"
                  class="text-capitalize text-bold full-width"
                  color="amber-9"
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
    const accept = ref(false)

    return {
      form: {
        email,
        // eslint-disable-next-line camelcase
        no_hp,
        password
      },
      accept
    }
  },
  methods: {
    onSubmit: function () {
      api.post('/api/registration/new-user', {
        email: this.form.email,
        no_hp: this.form.no_hp,
        password: this.form.password
      }).then(res => {
        console.log(res.data.data)
        this.$q.localStorage.set('userpmb', res.data.data)
        this.$router.push('infoverification')
      })
    }
  }
}
</script>

<style scoped>

</style>
