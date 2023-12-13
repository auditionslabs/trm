<template>
  <div
    class="p-2 text-slate-600 bg-slate-200 text-sm ml-2 shadow-2xl border"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#staticBackdropTOpSeller"
    aria-controls="staticBackdropTOpSeller"
  >
    Follow Ups (0)
  </div>
  <div
    class="offcanvas offcanvas-end mt-16"
    data-bs-backdrop="static"
    tabindex="-1"
    id="staticBackdropTOpSeller"
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
            Top Sellers
          </h5>
        </div>
      </div>
    </div>
    <div class="offcanvas-body bg-black font-medium text-sm">
      <div class="flex">
        <button
          type="button"
          class="btn btn-dark bg-gray-600 text-white text-sm"
        >
          Your overall currunt rank : <span class="font-semibold">3rd</span>
        </button>
        <button
          type="button"
          class="btn btn-dark bg-gray-600 text-white text-sm ml-5"
        >
          Your overall total sales : <span class="font-semibold">$90,0000</span>
        </button>
      </div>
      <div class="flex text-white text-xl ml-44 mt-3">
        <i class="fas fa-trophy mt-1.5"></i>
        <div class="ml-1">Overall Top Sellers</div>
      </div>
      <div class="mt-3 text-white mt-4 ml-24">
        <nav class="nav flex">
          <a class="pt-2 py-4 px-4 pb-2 bg-green-600" aria-current="page" href="#">Overall</a>
          <a  class="pt-2  py-4 px-4 pb-2 bg-gray-600" href="#">Today</a>
          <a  class="pt-2  py-4 px-4 pb-2 bg-gray-600" href="#">Week</a>
          <a  class="pt-2  py-4 px-4 pb-2 bg-gray-600" href="#">Month</a>
        </nav>
      </div>
      <div class="flex flex-col text-white mt-5">
            <div class="flex justify-around">
                <div><i class="fas fa-trophy mt-1.5 fa-2x text-orange-500"></i></div>
                <div class="text-base font-thin mt-2.5">Jahnson Bourn</div>
                <div  class="text-base font-thin mt-2.5">$150,000</div>
            </div>
      </div>
      <div class="w-full h-px bg-slate-700 mt-2"></div>
      <div class="flex flex-col text-white mt-2">
            <div class="flex justify-around">
                <div><i class="fas fa-trophy mt-1.5 -ml-1 fa-2x text-gray-500"></i></div>
                <div class="text-base font-thin mt-2.5">Dirt Newton</div>
                <div  class="text-base font-thin mt-2.5">$140,000</div>
            </div>
      </div>
      <div class="w-full h-px bg-slate-700 mt-2"></div>
      <div class="flex flex-col text-white mt-2">
            <div class="flex justify-around">
                <div><i class="fas fa-trophy mt-1.5 ml-1 fa-2x text-red-500"></i></div>
                <div class="text-base font-thin mt-2.5">Samuel Greyman</div>
                <div  class="text-base font-thin mt-2.5">$90,000</div>
            </div>
      </div>
      <div class="w-full h-px bg-slate-700 mt-2"></div>
      <div class="flex flex-col text-white mt-2">
            <div class="flex justify-around">
                <div class="mt-2 ml-1 font-thin ">4</div>
                <div class="text-sm font-thin mt-2.5">Samuel Greyman</div>
                <div class="text-sm font-thin mt-2.5">$90,000</div>
            </div>
      </div>
      <div class="w-full h-px bg-slate-700 mt-2"></div>
      <div class="flex flex-col text-white mt-2">
            <div class="flex justify-around">
                <div class="mt-2 ml-1 font-thin ">5</div>
                <div class="text-sm font-thin mt-2.5">Samuel Greyman</div>
                <div class="text-sm font-thin mt-2.5">$90,000</div>
            </div>
      </div>
      <div class="w-full h-px bg-slate-700 mt-2"></div>
      <div class="flex flex-col text-white mt-2">
            <div class="flex justify-around">
                <div class="mt-2 ml-1 font-thin ">6</div>
                <div class="text-sm font-thin mt-2.5">Samuel Greyman</div>
                <div class="text-sm font-thin mt-2.5">$90,000</div>
            </div>
      </div>
      <div class="w-full h-px bg-slate-700 mt-2"></div>
      <div class="flex flex-col text-white mt-2">
            <div class="flex justify-around">
                <div class="mt-2 ml-1 font-thin ">7</div>
                <div class="text-sm font-thin mt-2.5">Samuel Greyman</div>
                <div class="text-sm font-thin mt-2.5">$90,000</div>
            </div>
      </div>
      <div class="w-full h-px bg-slate-700 mt-2"></div>
      <div class="flex flex-col text-white mt-2">
            <div class="flex justify-around">
                <div class="mt-2 ml-1 font-thin ">8</div>
                <div class="text-sm font-thin mt-2.5">Samuel Greyman</div>
                <div class="text-sm font-thin mt-2.5">$90,000</div>
            </div>
      </div>
      <div class="w-full h-px bg-slate-700 mt-2"></div>
      <div class="flex flex-col text-white mt-2">
            <div class="flex justify-around">
                <div class="mt-2 ml-1 font-thin ">9</div>
                <div class="text-sm font-thin mt-2.5">Samuel Greyman</div>
                <div class="text-sm font-thin mt-2.5">$90,000</div>
            </div>
      </div>
      <div class="w-full h-px bg-slate-700 mt-2"></div>
      <div class="flex flex-col text-white mt-2">
            <div class="flex justify-around">
                <div class="mt-2 ml-1 font-thin ">10</div>
                <div class="text-sm font-thin mt-2.5">Samuel Greyman</div>
                <div class="text-sm font-thin mt-2.5">$90,000</div>
            </div>
      </div>
      <div class="w-full h-px bg-slate-700 mt-2"></div>
    </div>
  </div>
</template>
  <style scoped>
.offcanvas {
  width: 37rem;
  height: 46rem;
}
</style>
  <script setup>
// import AbcIcon from '@mui/icons-material/Abc';
</script>