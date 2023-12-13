<template>
   <div
   class="p-2 text-slate-600 bg-slate-200 text-sm ml-2 shadow-2xl border"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#staticBackdropTime"
      aria-controls="staticBackdropTime"
    >
    Script Engine
    </div>
    <div
      class="offcanvas offcanvas-end mt-16 AdminNotesideBar"
      data-bs-backdrop="static"
      tabindex="-1"
      id="staticBackdropTime"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="offcanvas-header bg-black text-white h-12">
        <div class="flex">
          <button
            type="button"
            class="btn btn-dark -ml-16 bg-black text-white w-12 h-10 mt-2 rounded-none"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            X
          </button>
          <div class="offcanvas-header">
            <h5 class="offcanvas-title text-lg" id="offcanvasScrollingLabel">
              Time & Date
            </h5>
          </div>
        </div>
      </div>
      <div class="offcanvas-body font-medium text-sm">
        <client-only><date-picker placeholder="MM/DD/YYYY" format="MM/dd/yyyy" v-model="date_today" /></client-only>
      </div>
    </div>
</template>
<style scoped>
.offcanvas {
  width: 45rem;
  height: 53rem;
}
</style>

<script>
export default{
data(){
  return{
    date_today:new Date() 
  }
}
}
</script>