<template>
  <q-layout class="bg-image" v-cloak>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-img spinner-color="white"
               v-bind:style="$q.screen.lt.md ? { display: 'none' } : { width: '20%' }"
               class="responsive" placeholder-src="assets/Forgopas.png" src="~assets/Forgopas.png"></q-img>

<!--        <img-->
<!--          src="../assets/Forgopas.png"-->
<!--          class="responsive"-->
<!--          v-bind:style="-->
<!--            $q.screen.lt.md ? { display: 'none' } : { width: '20%' }-->
<!--          "-->
<!--        />-->
        <q-card
          class="login-form bg-grey-1"
          v-bind:style="$q.screen.lt.md ? { width: '60%' } : { width: '30%' }"
        >
          <q-card-section>
            <q-avatar size="74px" class="absolute-center shadow-10">
              <q-img spinner-color="white" style="background-color: orange" placeholder-src="assets/logo_uir.png" src="~assets/logo_uir.png"></q-img>

<!--              <img-->
<!--                src="../assets/logo_uir.png"-->
<!--                alt="avatar"-->
<!--                style="background-color: orange"-->
<!--              />-->
            </q-avatar>
          </q-card-section>
          <q-card-section class="q-mt-md">
            <div class="text-h6 text-center">
              <q-item-label caption>
                Please enter your email address. You will receive an email
                message with instructions on how to reset your password
              </q-item-label>
            </div>

            <q-input
              v-model="email"
              label="Email Address"
              type="email"
            ></q-input>
          </q-card-section>

          <q-card-actions align="center">
            <q-btn
              push
              label="Set Password Reset Link"
              class="text-capitalize"
              color="primary"
            ></q-btn>
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
// import { ref } from 'vue'
// import { api } from 'boot/axios'

export default ({
  name: 'ForgotPassword'

})
</script>

<style scoped>
[v-cloak] {
  display: none !important;
}
</style>
