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
                :rules="[myRule]"
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
              />
            </q-item>
          </div>
          <div class="col-6">
            <q-item style="max-height: 10px">
              <q-input
                class="full-width"
                label="Date of Birth*"
                dense
                outlined
                v-model="date"
                mask="date"
                :rules="['date']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="date">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
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
              />
              <q-checkbox v-model="checkMale" label="Male"/>
              <q-checkbox v-model="checkFemale" label="Female"/>
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
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item>
              <q-input
                dense
                class="full-width"
                standout
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
              ></q-input>
            </q-item>
          </div>
          <div class="col-6">
            <q-item style="max-height: 10px">
              <q-input
                class="full-width"
                label="Passport Expiry Date"
                dense
                outlined
                v-model="date"
                mask="date"
                :rules="['date']"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="datee">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
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
                label="- Material Status  -"
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
          <div class="col-1"></div>
          <div class="col-5">
            <div class="q-pa-md">
              <div class="q-gutter-y-md column" style="max-width: 300px">
                <q-file clearable dense filled color="purple-12" v-model="model" label="Select File"/>

                <!-- equivalent -->
                <q-file color="green" filled v-model="model" label="Label">
                  <template v-if="model" v-slot:append>
                    <q-icon name="cancel" @click.stop.prevent="model = null" class="cursor-pointer"/>
                  </template>
                </q-file>
              </div>
            </div>
          </div>
          <div class="col-5"></div>
          <div class="col-1"></div>
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

export default {
  name: 'StudentRegistration',

  data () {
    return {
      // coba select
      selectedClass: ref(null),
      fk: [
        { name: 'FAKULTAS TEKNIK', code: 'A', factor: 1 },
        { name: 'FAKULTAS DUA', code: 'B', factor: 2 }
      ],
      vagons: [],
      selectedVagon: ref(null),
      seats: [],
      selectedSeat: '',

      step: ref(1),
      address_detail: ref({}),
      card_detail: ref({}),
      date: ref('2019/02/01'),
      datee: ref('2019/02/01'),
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
      optionswarga: ['WNI', 'WNA'],
      optionsprodi: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      optionsfakultas: [
        'Fakultas Ilmu Pendidikan dan Perguruan',
        'Fakultas Teknik',
        'Fakultas Pertanian',
        'Fakultas Psikologi',
        'Fakultas Ilmu Sosial dan Ekonomi',
        'Fakultas Ekonomi',
        'Fakultas Agama Islam',
        'Fakultas Hukum'
      ],

      value: [],
      options:
        [
          {
            fakultas: 'Fakultas Teknik',
            prodi: ['TI1', 'TI2']
          },

          {
            fakultas: 'Fakultas Ekonomi',
            prodi: ['TI1', 'TI2']
          },

          {
            fakultas: 'Fakultas Psikologi',
            prodi: ['TI1', 'TI2']
          }
        ],
      oldPickedFile: null,
      file: ref(null)
    }
  },
  methods: {
    myRule (val) {
      if (val === null) {
        return 'You must make a selection!'
      }
    }
  }
}
</script>
