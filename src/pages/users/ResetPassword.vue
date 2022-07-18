<template>
  <q-layout
    class="bgim"
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

            <q-input
              v-model="email"
              filled dense
              type="email"
              label="Email Address"
              :rules="[(val) => !!val || 'Email is missing']"
            >
            </q-input>

            <q-input
              filled dense
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              placeholder="New Password"
              :rules="[
                (val) =>
                  (val && val.length > 0 && val.length < 8) ||
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
              type="password"
              filled dense
              :rules="[
                  (val) =>
                    (val && val.length > 0 && val.length <= 8) ||
                    'Please type something',
                ]"
            ></q-input>

            <q-input
              v-model="code"
              filled dense
              label="Verification Code"
              type="number"
            ></q-input>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn
              push
              label="Reset Password"
              class="text-capitalize"
              color="primary"
            ></q-btn>
          </q-card-actions>

          <q-card-section class="text-center">
            <router-link to="">Resend Verification Code?</router-link>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ResetPassword',

  setup () {
    return {
      password: ref(''),
      isPwd: ref('password')
    }
  }
})
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
