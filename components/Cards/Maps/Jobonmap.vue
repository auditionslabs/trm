<template>
     <div class="mt-3 ml-3 bg-white">
           <!-- HEAD  -->
    <div class="p-2 flex text-sm w-full justify-between">
      <div class="flex">
        <span>
            <svg style="fill: rgb(140, 147, 156)" xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
        </span>
        <span class="ml-2 font-medium text-slate-800"
          >Jobs On Map</span
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
    <div>
    <div>
        <iframe
        class="w-full"
                src="https://maps.google.com/maps?q=&output=embed"
                id="map"
                animation='google.maps.Animation.DROP'
                title='data.title'
                height='500px'></iframe>
    </div>
    <div class="p-2 w-full justify-between flex justify-between mt-2">
        <div class="p-1.5 font-semibold bg-green-200 rounded-lg">Found 4 available jobs nearby</div>
        <div class="font-semibold p-1.5 float-right">
            <span>Last Knows location address</span><span class="font-thin">13th Street. 47 W 13th St, New York, NY 10011</span>
        </div>
    </div>
    <div>
    <div class="flex p-2">
    <div class="flex p-2 bg-blue-100/50 w-full"> 
        <div class="bg-blue-400 p-3 max-h-20 border-4 border-white rounded-full mt-3 ml-1"><i class="fas fa-briefcase fa-2x"></i></div>
        <div class="p-2 mt-2">
            <div class="font-semibold ml-2 text-base"><i class="fas fa-plus"></i>  Actor/Voice Over Actor with Strong Hindi Accent Needed for an Online Video</div>
            <div class="ml-2 text-base flex">
                <svg style="fill:rgb(14 116 144)" class="mt-1" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> 
                <span class="ml-1">Miami Beach North Dakota 58563
                <span class="font-semibold">Date Created</span>
                September 1 , 2020</span>
            </div>
            <div class="ml-2 mt-1">We are looking for an actor/voice over actor either located or anywhere in the world for a video production aimed for online streaming. The length ofat the finished production/vidoe will be 12 minute. You will be either invited to a video production aim <span class="text-cyan-700 font-semibold">Read More...</span></div>
        </div>
    </div>
    </div>
    <div class="flex p-2">
    <div class="flex p-2 bg-green-100/50 w-full"> 
        <div class="bg-green-600 p-3 max-h-20 border-4 border-white rounded-full mt-3 ml-1"><i class="fas fa-briefcase fa-2x"></i></div>
        <div class="p-2 mt-2">
            <div class="font-semibold ml-2 text-base"><i class="fas fa-plus"></i>  Actor/Voice Over Actor with Strong Hindi Accent Needed for an Online Video</div>
            <div class="ml-2 text-base flex">
                <svg style="fill:rgb(14 116 144)" class="mt-1" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> 
                <span class="ml-1">Miami Beach North Dakota 58563
                <span class="font-semibold">Date Created</span>
                September 1 , 2020</span>
            </div>
            <div class="ml-2 mt-1">We are looking for an actor/voice over actor either located or anywhere in the world for a video production aimed for online streaming. The length ofat the finished production/vidoe will be 12 minute. You will be either invited to a video production aim <span class="text-cyan-700 font-semibold">Read More...</span></div>
        </div>
    </div>
    </div>
    <div class="flex p-2">
    <div class="flex p-2 bg-orange-100/50 w-full"> 
        <div class="bg-orange-500 p-3 max-h-20 border-4 border-white rounded-full mt-3 ml-1"><i class="fas fa-briefcase fa-2x"></i></div>
        <div class="p-2 mt-2">
            <div class="font-semibold ml-2 text-base"><i class="fas fa-plus"></i>  Actor/Voice Over Actor with Strong Hindi Accent Needed for an Online Video</div>
            <div class="ml-2 text-base flex">
                <svg style="fill:rgb(14 116 144)" class="mt-1" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> 
                <span class="ml-1">Miami Beach North Dakota 58563
                <span class="font-semibold">Date Created</span>
                September 1 , 2020</span>
            </div>
            <div class="ml-2 mt-1">We are looking for an actor/voice over actor either located or anywhere in the world for a video production aimed for online streaming. The length ofat the finished production/vidoe will be 12 minute. You will be either invited to a video production aim <span class="text-cyan-700 font-semibold">Read More...</span></div>
        </div>
    </div>
    </div>
    <div class="flex p-2">
    <div class="flex p-2 bg-indigo-100/50 w-full"> 
        <div class="bg-indigo-500 p-3 max-h-20 border-4 border-white rounded-full mt-3 ml-1"><i class="fas fa-briefcase fa-2x"></i></div>
        <div class="p-2 mt-2">
            <div class="font-semibold ml-2 text-base"><i class="fas fa-plus"></i>  Actor/Voice Over Actor with Strong Hindi Accent Needed for an Online Video</div>
            <div class="ml-2 text-base flex">
                <svg style="fill:rgb(14 116 144)" class="mt-1" xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> 
                <span class="ml-1">Miami Beach North Dakota 58563
                <span class="font-semibold">Date Created</span>
                September 1 , 2020</span>
            </div>
            <div class="ml-2 mt-1">We are looking for an actor/voice over actor either located or anywhere in the world for a video production aimed for online streaming. The length ofat the finished production/vidoe will be 12 minute. You will be either invited to a video production aim <span class="text-cyan-700 font-semibold">Read More...</span></div>
        </div>
    </div>
    </div>
    </div>
  </div>
     </div>
</template>
<script>

</script>