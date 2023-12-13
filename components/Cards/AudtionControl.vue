<script>
import AudtioncontrolTableVue from './TabsData/AudtioncontrolTable.vue';
export default {
  components:{
    AudtioncontrolTableVue
  }
};
</script>
<template>
  <div class="mt-3 ml-3 bg-white">
    <!-- HEAD  -->
    <div class="p-2 flex text-sm w-full justify-between">
      <div>
        <span>
          <font-awesome-icon icon="fa-regular fa-grid-2" />
        </span>
        <span class="ml-2 font-medium text-slate-800"
          >Audtion Control Center</span
        >
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path
            d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
          />
        </svg>
      </div>
    </div>
    <!-- Content  -->
    <div class="flex w-full p-2 ml-2 justify-between">
      <div class="w-5/12 bg-gray-100 p-2 text-base">
        <input
          class="form-check-input ml-2"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          checked
        /><span class="ml-2 font-medium">Matched Casting</span>
        <input
          class="form-check-input ml-2"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <span class="ml-2 font-medium">Nationwide</span>
        <input
          class="form-check-input ml-2"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <span class="ml-2 font-medium">Open Call</span>
      </div>
      <div class="w-5/12 flex min-w-max">
        <button type="button" class="btn btn-light border ml-1 font-medium">
          Self Submision
          <span class="text-white p-0.5 bg-red-500 rounded">13</span>
        </button>
        <button type="button" class="btn btn-light border ml-1 font-medium">
          Cd Invites
          <span class="text-white p-0.5 bg-red-500 rounded">128</span>
        </button>
        <button type="button" class="btn btn-light border ml-1 font-medium">
          Job In Cart
          <span class="text-white p-0.5 bg-red-500 rounded">13</span>
        </button>
      </div>
      <div class="w-2/12">
        <div class="input-group">
          <div class="form-outline ml-1" data-mdb-input-init>
            <input
              type="search"
              placeholder="&#xF002; search"
              style="font-family: FontAwesome"
              id="form1"
              class="form-control bg-slate-100"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="p-2 ml-2 flex mt-1">
      <div class="w-1/5 p-1 bg-green-200/60 font-semibold text-base rounded">
        <span class="ml-2">128 CD Invantion found</span>
      </div>
      <div
        class="w-1/5 ml-2 p-1 bg-green-200/60 font-semibold text-base rounded"
      >
        <span class="ml-2">13 Self Submiton found</span>
      </div>
      <div
        class="w-1/5 ml-2 p-1 bg-blue-200/60 font-semibold text-base min-w-max rounded"
      >
        <span class="ml-1">You match 179 local audtions</span>
      </div>
      <div
        class="w-1/5 ml-2 p-1 bg-gray-200/60 font-semibold text-base rounded min-w-max"
      >
        <span class="ml-1"
          ><i class="fas fa-pen"></i> Set Casting prefrence</span
        >
      </div>
      <div class="w-1/5"></div>
    </div>
    <div class="p-2 ml-2 flex mt-1">
        <AudtioncontrolTableVue/>
    </div>
  </div>
</template>