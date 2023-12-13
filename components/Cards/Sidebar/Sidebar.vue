<template>
  <!-- <div  v-if="OpenClose"> -->
  <div
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasScrolling"
    aria-controls="offcanvasScrolling"
    @click="OpenCloseFun()"
  >
    <div class="text-lg font-semibold text-cyan-600">+ Photos</div>
  </div>
  <div
    class="offcanvas offcanvas-end bg-zinc-700 text-white mt-16"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div class="flex">
      <button
        type="button"
        class="btn btn-dark -ml-10 bg-black text-white w-12 h-10"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        X
      </button>
      <div class="offcanvas-header">
        <h5 class="offcanvas-title text-2xl -mt-4" id="offcanvasScrollingLabel">
          Stats
        </h5>
      </div>
    </div>
    <div class="offcanvas-body -mt-5">
      <div class="flex justify-between">
        <div class="card bg-green-600 p-1" style="width: 14rem">
          <div class="card-body">
            <div class="card-title text-3xl ml-10 text-white font-semibold">
              $1,987
            </div>
            <div class="card-subtitle text-base ml-16 text-white mb-2">
              Today
            </div>
          </div>
        </div>
        <div class="card bg-green-600 p-1" style="width: 14rem">
          <div class="card-body">
            <div class="card-title text-3xl ml-10 text-white font-semibold">
              $10,230
            </div>
            <div class="card-subtitle text-base ml-16 text-white mb-2">
              This Week
            </div>
          </div>
        </div>
        <div class="card bg-green-600 p-1" style="width: 14rem">
          <div class="card-body">
            <div class="card-title text-3xl ml-12 text-white font-semibold">
              $8,484
            </div>
            <div class="card-subtitle text-base ml-16 text-white mb-2">
              Last Week
            </div>
          </div>
        </div>
      </div>
      <div>
        <table class="table table-dark table-striped mt-3 border text-sm">
          <thead>
            <tr>
              <th scope="col text-sm">#Call</th>
              <th scope="col text-sm">Inbound</th>
              <th scope="col text-sm">Autodial</th>
              <th scope="col text-sm">Manual</th>
              <th scope="col text-sm">pause</th>
              <th scope="col">Avg.pause</th>
              <th scope="col text-sm">Talk</th>
              <th scope="col text-sm">#Unity</th>
              <th scope="col text-sm">Gross</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td colspan="7" class="">
                <span class="ml-64">No Calls for today</span>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div class="flex text-white mt-3">
          <svg
            style="fill: white"
            class="mt-3"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="20"
            viewBox="0 0 640 512"
          >
            <path
              d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
            />
          </svg>
          <div class="mt-2.5 ml-2">Teams Titans</div>
          <i class="fas ml-2 mt-3 fa-caret-down"></i>
        </div>
        <table class="table font-thin table-dark table-striped mt-3 table-bordered text-sm">
          <thead>
            <tr>
              <th scope="col text-sm">Agent</th>
              <th scope="col text-sm">Today</th>
              <th scope="col text-sm">This Week</th>
              <th scope="col text-sm">Last Week</th>
              <th scope="col text-sm">MTD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jonathan</td>
              <td>$875</td>
              <td>$5,429</td>
              <td>$3,150</td>
              <td>$15,350</td>
            </tr>
            <tr>
              <td scope="row">Gareth</td>
              <td>$505</td>
              <td>$4,429</td>
              <td>$2,150</td>
              <td>$13,350</td>
            </tr>
            <tr>
              <td scope="row">Sarah</td>
              <td>$498</td>
              <td>$3,429</td>
              <td>$1,150</td>
              <td>$12,350</td>
            </tr>
            <tr>
              <td scope="row">Mea</td>
              <td>$201</td>
              <td>$3,429</td>
              <td>$1,150</td>
              <td>$12,350</td>
            </tr>
            <tr>
              <td scope="row">Blake</td>
              <td>$99</td>
              <td>$3,429</td>
              <td>$1,150</td>
              <td>$12,350</td>
            </tr>
          </tbody>
        </table>
        <div class="flex">
            <i class="fas ml-1 mt-1 fa-trophy"></i>
            <div class="ml-2">Teams Scorebord</div>
        </div>
        <div class="flex flex-col">
                <div class="flex justify-between mt-1">
                    <SliderCardVue/>
                    <SliderCardVue/>
                    <SliderCardVue/>
                </div>
                <div class="flex justify-between mt-1">
                    <SliderCardVue/>
                    <SliderCardVue/>
                    <SliderCardVue/>
                </div>
                <div class="flex justify-between mt-1">
                    <SliderCardVue/>
                    <SliderCardVue/>
                    <SliderCardVue/>
                </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import SliderCardVue from './SliderCard.vue';
export default {
  name: "AlertDefualt",
  props: {
    visible: Boolean,
    variant: String,
  },
  data() {
    return {
      OpenClose: !this.visible,
    };
  },
  methods: {
    OpenCloseFun() {
      this.OpenClose = !this.OpenClose;
    },
  },
  watch: {
    visible: function (newVal, oldVal) {
      this.OpenClose = newVal;
      console.log("New", newVal, oldVal);
    },
  },
  components:{
    SliderCardVue
  }
};
</script>
<style scoped>
.offcanvas {
  width: 45rem;
  height: 53rem;
}
</style>