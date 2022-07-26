<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="text-blue-grey-14" style="background-color: #09581b">
      <q-toolbar>
        <q-btn dense flat round icon="menu" style="font-size: 20px;color: white" @click="left = !left"/>

        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;color: white">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6">Account</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="grey-4" style="height: 2px"/>
                <div class="items-center">
                  <div class="text-bold items-xs-center">balqismaipasha</div>
                  <div>Balqis Maipasha</div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="90px">
                    <img src="../assets/logo_uir.png" alt="Logo uir">
                  </q-avatar>
                </q-btn>

                <q-btn
                  color="green-9"
                  label="Log Out"
                  unelevated
                  @click="keluar()"
                  size="sm"
                  v-close-popup>
                  <q-tooltip>Keluar disini..</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-white text-teal-10"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-green-9 text-bold text-white text-center">
            <q-item-section style="font-size: medium">
              PMB INTERNATIONAL
            </q-item-section>
          </q-item>
          <q-item class="justify-center bg-grey-4 text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="100px" class="q-mb-md">
                <img src="../assets/logo_uir.png" alt="Logo uir">
              </q-avatar>
              <div class="text-weight-bold">balqismaipasha</div>
              <div>Balqis Maipasha</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-grey-8"
          >
            Registration
          </q-item-label>
          <q-item clickable active-class="active" class="text-teal-10" exact v-ripple to="/pmb">
            <q-item-section avatar>
              <q-icon name="app_registration"/>
            </q-item-section>
            <q-item-section>
              Enrollment
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-grey-8"
          >
            Setting
          </q-item-label>

          <q-item clickable active-class="active" class="text-teal-10" exact v-ripple to="/datatransaksi">
            <q-item-section avatar>
              <q-icon name="manage_accounts"/>
            </q-item-section>
            <q-item-section>
              Profile
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer reveal elevated style="background-color: #034713">
      <span class="text-body2 text-weight-bold text-grey-1">
        © 2022 Universitas Islam Riau Dikembangkan oleh Biro Sistem Informasi
        dan Komputasi
      </span>
    </q-footer>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      left: false,
      dataUser: this.$q.localStorage.getItem('datauser')
    }
  },
  methods: {
    keluar () {
      this.$q.notify({
        color: 'positive',
        message: 'You are log out',
        icon: 'check_circle'
      })
      this.$q.localStorage.clear()
      this.$router.push('auth/login')
    }
  }
}
</script>
