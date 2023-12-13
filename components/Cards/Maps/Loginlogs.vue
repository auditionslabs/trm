<template>
  <div class="mt-3 ml-3 bg-white">
    <!-- HEAD  -->
    <div class="p-2 flex text-sm w-full justify-between">
      <div class="flex">
        <span>
          <svg
            style="fill: rgb(140, 147, 156)"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="18"
            viewBox="0 0 576 512"
          >
            <path
              d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
            />
          </svg>
        </span>
        <span class="ml-2 font-medium text-slate-800">Login Logs</span>
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
    <div>
      <!-- Map  -->
      <div>
        <iframe
          class="w-full"
          src="https://maps.google.com/maps?q=&output=embed"
          id="map"
          animation="google.maps.Animation.DROP"
          title="data.title"
          height="500px"
        ></iframe>
      </div>
      <!-- Other Content  -->
      <div class="p-2">
        <section class="p-5 ml-16">
          <ul class="timeline-with-icons">
            <span class="-ml-24 font-semibold flex flex-col text-sm"><div>july 22 , 2020</div> <div>02:15AM</div></span>
            <span class="text-sm timeline-icon bg-yellow-500  border ml-9 -mt-10">
                <svg  style="fill: #FFFFFF" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
              </span>
            <li class="timeline-item mb-4">
              <div class="border ml-5 flex flex-col p-3">
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Last Login</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">July 14, 2020 21:43 PM</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Device</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">samsung SM-G610Y</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">OS</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">6.0.1</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">app Version</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">3.0.3</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Phone location address</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">Ap #630-3889 Nulla. Street Watervilite oklahome 70863</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Hardware ID</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">ba1cac21c49b40d2</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Push Token</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">xe432dsaAfsertsASd244xxfdsfszdfQq3265dSdASdSDfs8zdxe432dsaAfsertsASd244xxfdsfszdfQ</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Fcm firebase token</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">xe432dsaAfsertsASd244xxfdsfszdfQq3265dSdASdSDfs8zdxe432dsaAfsertsASd244xxfdsfszdfQ</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">latitude</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">10.3310106</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">longitude</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">10.3310106</span>
                  </div>
                </div>
              </div>
            </li>
            <span class="-ml-24 font-semibold flex flex-col text-sm"><div>july 19 , 2020</div> <div>02:15AM</div></span>
            <span class="text-sm timeline-icon bg-yellow-500  border ml-9 -mt-10">
                <svg  style="fill: #FFFFFF" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
              </span>
            <li class="timeline-item mb-4">
              <div class="border ml-5 flex flex-col p-3">
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Last Login</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">July 14, 2020 21:43 PM</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Device</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">samsung SM-G610Y</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">OS</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">6.0.1</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">app Version</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">3.0.3</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Phone location address</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">Ap #630-3889 Nulla. Street Watervilite oklahome 70863</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Hardware ID</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">ba1cac21c49b40d2</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Push Token</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">xe432dsaAfsertsASd244xxfdsfszdfQq3265dSdASdSDfs8zdxe432dsaAfsertsASd244xxfdsfszdfQ</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Fcm firebase token</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">xe432dsaAfsertsASd244xxfdsfszdfQq3265dSdASdSDfs8zdxe432dsaAfsertsASd244xxfdsfszdfQ</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">latitude</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">10.3310106</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">longitude</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">10.3310106</span>
                  </div>
                </div>
              </div>
            </li>
            <span class="-ml-24 font-semibold flex flex-col text-sm"><div>july 15 , 2020</div> <div>02:15AM</div></span>
            <span class="text-sm timeline-icon bg-yellow-500  border ml-9 -mt-10">
                <svg  style="fill: #FFFFFF" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
              </span>
            <li class="timeline-item mb-4">
              <div class="border ml-5 flex flex-col p-3">
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Last Login</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">July 14, 2020 21:43 PM</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Device</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">samsung SM-G610Y</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">OS</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">6.0.1</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">app Version</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">3.0.3</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Phone location address</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">Ap #630-3889 Nulla. Street Watervilite oklahome 70863</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Hardware ID</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">ba1cac21c49b40d2</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Push Token</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">xe432dsaAfsertsASd244xxfdsfszdfQq3265dSdASdSDfs8zdxe432dsaAfsertsASd244xxfdsfszdfQ</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">Fcm firebase token</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">xe432dsaAfsertsASd244xxfdsfszdfQq3265dSdASdSDfs8zdxe432dsaAfsertsASd244xxfdsfszdfQ</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">latitude</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">10.3310106</span>
                  </div>
                </div>
                <div class="flex w-full font-semibold mt-1">
                  <div class="w-3/12 min-w-max text-gray-600 text-sm">
                    <span class="float-right">longitude</span>
                  </div>
                  <div class="text-sm w-9/12 float-start">
                    <span class="ml-4">10.3310106</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <button
            type="button"
            class="btn btn-light bg-zinc-100 w-full text-slate-500"
          >
            View More Logs (30 More)
          </button>
        </section>
      </div>
    </div>
  </div>
</template>