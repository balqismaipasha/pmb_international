<template>
  <div
    class="q-pa-md"
    v-bind:style="$q.screen.lt.md ? { width: 'auto' } : { width: 'auto' }"
  >
    <q-stepper v-model="step" header-nav ref="stepper" color="primary" animated>
      <q-step
        :name="1"
        title="Study Program"
        icon="person"
        :done="step > 1"
        :header-nav="step > 1"
      >
        <div class="row">
          <div class="col-6">
            <q-item>
              <q-select
                dense
                outlined
                v-model="modelF"
                class="full-width"
                :options="optionsfakultas"
                label="- Select Faculty -"
                hint="Pilih Fakultas"
              />
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-select
                dense
                outlined
                v-model="modelProdi"
                class="full-width"
                :options="optionsprodi"
                label="- Select Study Program -"
                hint="Pilih Program Studi"
              />
            </q-item>
          </div>
        </div>

        <q-stepper-navigation class="right">
          <q-btn
            @click="
              () => {
                done1 = true;
                step = 2;
              }
            "
            color="amber-13"
            rounded
            class="float-right q-mr-md q-mb-md"
            label="Continue"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Personal Identity"
        icon="person"
        :done="step > 2"
        :header-nav="step > 2"
      >
        <div class="row">
          <div class="col-6">
            <q-item>
              <q-input
                dense
                outlined
                class="full-width"
                v-model="card_detail.name"
                label="Full Name*"
                hint="Nama Lengkap"
              />
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                outlined
                class="full-width"
                v-model="address_detail.card_number"
                label="Place of Birth*"
                hint="Tempat Lahir"
              />
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input v-model="birthday" label="Date of Birth*" dense outlined class="full-width" type="date" hint="Tanggal Lahir" />
<!--              <q-input-->
<!--                class="full-width"-->
<!--                label="Date of Birth*"-->
<!--                dense-->
<!--                outlined-->
<!--                v-model="date"-->
<!--                :rules="['date']"-->
<!--              >-->
<!--                <template v-slot:append>-->
<!--                  <q-icon name="event" class="cursor-pointer">-->
<!--                    <q-popup-proxy-->
<!--                      cover-->
<!--                      transition-show="scale"-->
<!--                      transition-hide="scale"-->
<!--                    >-->
<!--                      <q-date v-model="date">-->
<!--                        <div class="row items-center justify-end">-->
<!--                          <q-btn-->
<!--                            v-close-popup-->
<!--                            label="Close"-->
<!--                            color="primary"-->
<!--                            flat-->
<!--                          />-->
<!--                        </div>-->
<!--                      </q-date>-->
<!--                    </q-popup-proxy>-->
<!--                  </q-icon>-->
<!--                </template>-->
<!--              </q-input>-->
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-select
                dense
                outlined
                v-model="modelwarganegara"
                class="full-width"
                :options="optionswarga"
                label="- Citizenship  -"
                hint="Kewarganegaraan"
              />
              <q-radio v-model="rGender" val="male" label="Male" />
              <q-radio v-model="rGender" val="female" label="Female" />
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                type="number"
                label="Phone Number*"
                hint="Nomor Hp"
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                type="number"
                label="Whatsapp Number*"
                hint="Nomor Whatsapp"
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                type="textarea"
                rows="2"
                label="Correspondence Address*"
                hint="Alamat Korespondensi"
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                type="textarea"
                rows="2"
                label="Address in Indonesia*"
                hint="Alamat di Indonesia"
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                type="number"
                label="Postcode*"
                hint="Kode Pos"
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                type="text"
                label="City Town*"
                hint="Kota"
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                type="text"
                label="State/ Country *"
                hint="Negara"
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                v-model="email"
                type="email"
                prefix="Email:"
                suffix="@gmail.com"
              >
                <template v-slot:prepend>
                  <q-icon name="mail"/>
                </template>
              </q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                type="number"
                label="Passport Number"
                hint="Nomor Passport"
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input v-model="passdate" label="Passport Expiry Date" dense outlined class="full-width" type="date" hint="Tanggal batas passport" />

              <!--              <q-input-->
<!--                class="full-width"-->
<!--                label="Passport Expiry Date"-->
<!--                dense-->
<!--                outlined-->
<!--                v-model="date"-->
<!--                mask="date"-->
<!--                :rules="['date']"-->
<!--              >-->
<!--                <template v-slot:append>-->
<!--                  <q-icon name="event" class="cursor-pointer">-->
<!--                    <q-popup-proxy-->
<!--                      cover-->
<!--                      transition-show="scale"-->
<!--                      transition-hide="scale"-->
<!--                    >-->
<!--                      <q-date v-model="datee">-->
<!--                        <div class="row items-center justify-end">-->
<!--                          <q-btn-->
<!--                            v-close-popup-->
<!--                            label="Close"-->
<!--                            color="primary"-->
<!--                            flat-->
<!--                          />-->
<!--                        </div>-->
<!--                      </q-date>-->
<!--                    </q-popup-proxy>-->
<!--                  </q-icon>-->
<!--                </template>-->
<!--              </q-input>-->
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-select
                dense
                outlined
                v-model="materialStatus"
                class="full-width"
                :options="optionsmaterial"
                label="- Marital Status  -"
                hint="Status Perkawinan"
              />
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                type="text"
                label="Mother Name"
                hint="Nama Ibu"
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                type="number"
                label="Student Number"
                hint="Nomor Induk Siswa"
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                outlined
                type="number"
                label="Birth Certificate Number*"
                hint="Nomor Akte Kelahiran"
              ></q-input>
            </q-item>
          </div>
        </div>

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done2 = true;
                step = 3;
              }
            "
            color="amber-13"
            rounded
            label="Continue"
            class="float-right q-mr-md q-mb-md"
          />
          <q-btn
            flat
            @click="step = 1"
            color="primary"
            label="Back"
            class="float-right q-mr-md q-mb-md"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Education Background"
        icon="book"
        :header-nav="step > 3"
        :done="step > 3"
      >
        <div class="row">
          <div class="col-6">
            <q-item>
              <q-input
                dense
                outlined
                class="full-width"
                v-model="card_detail.name"
                type="text"
                label="Elementary School*"
                hint="SD Sederajat"
              />
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                outlined
                class="full-width"
                v-model="card_detail.name"
                type="number"
                label="Period (Months/Years)*"
                hint="Lulusan (Bulan/Tahun)"
              />
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                outlined
                class="full-width"
                v-model="card_detail.name"
                type="text"
                label="Junior High School*"
                hint="SMP Sederajat"
              />
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                outlined
                class="full-width"
                v-model="card_detail.name"
                type="number"
                label="Period (Months/Years)*"
                hint="Lulusan (Bulan/Tahun)"
              />
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                outlined
                class="full-width"
                v-model="card_detail.name"
                type="text"
                label="Senior High School*"
                hint="SMA Sederajat"
              />
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                outlined
                class="full-width"
                v-model="card_detail.name"
                type="number"
                label="Period (Months/Years)*"
                hint="Lulusan (Bulan/Tahun)"
              />
            </q-item>
          </div>
        </div>

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done3 = true;
                step = 4;
              }
            "
            color="amber-13"
            rounded
            label="Continue"
            class="float-right q-mr-md q-mb-md"
          />
          <q-btn
            flat
            @click="step = 2"
            color="primary"
            label="Back"
            class="float-right q-mr-md q-mb-md"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Financial Support & Proficiency in English"
        icon="money"
        :header-nav="step > 4"
        :done="step > 4"
      >
        <div class="row">
          <div class="col-6">
            <q-item>
              <div class="q-gutter-sm">
                <b>English Writing Skills</b> <br/>
                <q-radio
                  dense
                  v-model="rWrite"
                  val="Very Good"
                  label="Very Good"
                />
                <q-radio
                  dense
                  v-model="rWrite"
                  val="Excellent"
                  label="Excellent"
                />
                <q-radio dense v-model="rWrite" val="Good" label="Good"/>
                <q-radio dense v-model="rWrite" val="Normal" label="Normal"/>
                <q-radio dense v-model="rWrite" val="Weak" label="Weak"/>
              </div>
            </q-item>
          </div>

          <div class="col-6">
            <q-item>
              <q-select
                dense
                outlined
                v-model="financial"
                class="full-width"
                :options="optionsfinancial"
                label="- Financial Support  -"
                hint="Bantuan Keuangan"
              />
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <div class="q-gutter-sm">
                <b>English Verbal Ability</b> <br/>
                <q-radio
                  dense
                  v-model="rVerbal"
                  val="Very Good"
                  label="Very Good"
                />
                <q-radio
                  dense
                  v-model="rVerbal"
                  val="Excellent"
                  label="Excellent"
                />
                <q-radio dense v-model="rVerbal" val="Good" label="Good"/>
                <q-radio dense v-model="rVerbal" val="Normal" label="Normal"/>
                <q-radio dense v-model="rVerbal" val="Weak" label="Weak"/>
              </div>
            </q-item>
          </div>
        </div>

        <q-stepper-navigation>
          <q-btn
            @click="
              () => {
                done4 = true;
                step = 5;
              }
            "
            color="amber-13"
            rounded
            label="Continue"
            class="float-right q-mr-md q-mb-md"
          />
          <q-btn
            flat
            @click="step = 3"
            color="primary"
            label="Back"
            class="float-right q-mr-md q-mb-md"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="5"
        title="Upload File"
        icon="upload"
        :header-nav="step > 5"
      >

        <div class="row">
          <div class="col-2"></div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-file filled bottom-slots v-model="model" label="Senior High School Certificate" counter>
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                  </template>

                  <template v-slot:hint>
                    Ijazah Terakhir ( SMA/ Sederajat) Legalisir dalam Bahasa Inggris
                  </template>
                </q-file>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                (ini untuk preview)
              </div>
            </div>
          </div>
          <div class="col-2"></div>

<!--          file kedua-->
          <div class="col-2"></div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-file filled bottom-slots v-model="model" label="Transcripts (Legalized in English)" counter>
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                  </template>

                  <template v-slot:hint>
                    Transkrip Nilai (Legalisir dalam Bahasa Inggris)
                  </template>
                </q-file>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                (ini untuk preview)
              </div>
            </div>
          </div>
          <div class="col-2"></div>

<!--          file ketiga-->
          <div class="col-2"></div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-file filled bottom-slots v-model="model" label="Letter of Good Behaviour from the local School or Police" counter>
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                  </template>

                  <template v-slot:hint>
                    Surat Kelakuan Baik dari Sekolah atau Kepolisian
                  </template>
                </q-file>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                (ini untuk preview)
              </div>
            </div>
          </div>
          <div class="col-2"></div>

<!-- File Keempat -->
          <div class="col-2"></div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-file filled bottom-slots v-model="model" label="Letter of Permission from Parents (Indonesia and English vers)" counter>
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                  </template>

                  <template v-slot:hint>
                    Surat Izin Orang Tua (dalam Bahasa Indonesia dan Bahasa Inggris)
                  </template>
                </q-file>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                (ini untuk preview)
              </div>
            </div>
          </div>
          <div class="col-2"></div>

<!-- File Kelima -->
          <div class="col-2"></div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-file filled bottom-slots v-model="model" label="4x6 color photo (JPG)" counter>
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                  </template>

                  <template v-slot:hint>
                    Pas Photo/ photo card 4x6 warna (JPG)
                  </template>
                </q-file>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                (ini untuk preview)
              </div>
            </div>
          </div>
          <div class="col-2"></div>

<!-- File Keenam -->
          <div class="col-2"></div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-file filled bottom-slots v-model="model" label="ID card scan" counter>
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                  </template>

                  <template v-slot:hint>
                    Scan Kartu Identitas / KTP
                  </template>
                </q-file>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                (ini untuk preview)
              </div>
            </div>
          </div>
          <div class="col-2"></div>

<!-- File Ketujuh-->
          <div class="col-2"></div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-file filled bottom-slots v-model="model" label="English Certificate (if any)" counter>
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                  </template>

                  <template v-slot:hint>
                    Sertifikat Bahasa Inggris (Jika ada)
                  </template>
                </q-file>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                (ini untuk preview)
              </div>
            </div>
          </div>
          <div class="col-2"></div>

<!-- File Kedelapan -->
          <div class="col-2"></div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-file filled bottom-slots v-model="model" label="Scan of Passport Biodata (If Any)" counter>
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
                  </template>

                  <template v-slot:hint>
                    Scan Biodata Pasport (Jika Ada)
                  </template>
                </q-file>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                (ini untuk preview)
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>

        <q-stepper-navigation>
          <q-btn
            color="amber-13"
            rounded
            @click="done3 = true"
            label="Submit"
            class="float-right q-mr-md q-mb-md"
          />
          <q-btn
            flat
            @click="step = 4"
            color="primary"
            label="Back"
            class="float-right q-mr-md q-mb-md"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from 'vue'
import { api } from 'boot/axios'

const isi = []

export default {
  data () {
    return {
      isi,
      rGender: ref('male'),
      step: ref(1),
      address_detail: ref({}),
      card_detail: ref({}),
      birthday: ref(' '),
      passdate: ref(' '),
      checkMale: ref(false),
      checkFemale: ref(false),
      modelF: ref(null),
      modelProdi: ref(null),
      financial: ref(null),
      modelwarganegara: ref(null),
      model: ref(null),
      rWrite: ref('Normal'),
      rVerbal: ref('Normal'),
      optionsmaterial: ['Merried', 'Not Merried'],
      optionsfinancial: ['Scholarship', 'Personal Finance'],
      optionswarga: [],
      optionsfakultas: [],
      oldPickedFile: null,
      file: ref(null)
    }
  },
  async created () {
    const response = await api.post('/api/data/options/prodi')
    const namaFK = response.data.data.prodi
    const data = []
    namaFK.forEach(function (v, i) {
      if (!data.includes(v.nama_fakultas)) {
        data.push(v.nama_fakultas)
      }
    })
    console.log(data)
    this.optionsfakultas = data
  }
}
</script>
