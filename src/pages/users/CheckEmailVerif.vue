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
          <q-card-section class="rounded-borders">
            <div class="text-center">
              <q-img spinner-color="white" style="width: 80%; height: 80%" class="transparent" placeholder-src="assets/logo_uir.png" src="~assets/EmailCheck.png"></q-img>
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-h6 text-center text-weight-regular">
              <q-item-label>Check Your E-Mail</q-item-label>
              <q-item-label caption>
                Your verification link has been sent to email
              </q-item-label>
              <q-item-label caption>
                {{ dataUser.email }}
              </q-item-label>
              <br>
              <q-item-label caption>
                Just click on the link in that email to complete your signup.
                If you don't see, you may need to <b>check your spam</b> folder
              </q-item-label>
              <br/>
            </div>
            <q-form class="q-gutter">
              <q-btn
                class="full-width"
                rounded
                label="Login"
                to="/auth/login"
                type="submit"
                color="amber-9"
              />
            </q-form>
            <br>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

export default ({
  name: 'CheckEmailVerif',

  data () {
    return {
      dataUser: this.$q.localStorage.getItem('datauser')
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
