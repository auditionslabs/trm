<script>
import SalesCardInnerVue from './TabsData/SalesCardInner.vue';
export default {
    components:{
        SalesCardInnerVue
    }
};
</script>
<template>
  <div class="mt-3 ml-3 bg-white">
    <div class="p-3 flex text-sm w-full justify-between bg-gray-100">
      <div>
        <span class="bg-slate-200 rounded-full p-1">
          <i class="fas fa-dollar-sign text-gray-500"></i>
        </span>
        <span class="ml-2 font-medium text-slate-800">Sales</span>
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
    <div class="w-full bg-gray-300 h-px"></div>
    <!-- Next section  -->
    <div class="w-full flex">
      <div class="w-4/12 flex flex-col">
        <!-- Frist  -->
        <div class="flex justify-between p-3 bg-gray-100">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="18"
              viewBox="0 0 576 512"
            >
              <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
            <span class="text-base ml-2 -mt-1">Added to Cart</span>
          </div>
          <div class="flex text-cyan-700">
            <i class="fas fa-plus"></i>
            <div class="text-base ml-2 -mt-1">Add Custom Plan</div>
          </div>
        </div>
        <!-- Second  -->
        <div>
          <div class="flex justify-between p-3">
            <div class="flex font-medium text-gray-600">
              <div class="h-16 w-16 bg-yellow-300 rounded-full"></div>
              <div class="flex flex-col text-sm ml-3 mt-2">
                <div>24 Month</div>
                <div>Pro Subscription</div>
              </div>
            </div>
            <div class="flex flex-col mt-2 text-sm">
              <div class="font-semibold">$475.00</div>
              <div class="font-semibold">($18.00/month)</div>
            </div>
          </div>
          <div class="flex w-full -mt-4">
            <div class="w-2/4"></div>
            <div
              class="font-semibold w-1/4 min-w-max text-sm text-cyan-700 pointer"
            >
              Add Discount
            </div>
            <div class="font-semibold w-1/4 ml-5 text-sm text-red-400">
              Remove
            </div>
          </div>
        </div>
        <div class="w-full bg-gray-300 h-px"></div>
        <!-- Third  -->
        <div>
          <div class="flex justify-between p-3">
            <div class="flex font-medium text-gray-600">
              <div class="h-16 w-16 bg-lime-400 rounded-full"></div>
              <div class="flex flex-col ml-3 mt-2 text-sm">
                <div>3 Month</div>
                <div>Featured Subscription</div>
              </div>
            </div>
            <div class="flex flex-col text-sm mt-1 ">
              <div class="font-semibold">$3.90/month</div>
              <!-- <div class="font-semibold">($18.00/month)</div> -->
            </div>
          </div>
          <div class="flex w-full -mt-4">
            <div class="w-2/4"></div>
            <div
              class="font-semibold w-1/4 min-w-max text-sm text-cyan-700 pointer"
            >
              Add Discount
            </div>
            <div class="font-semibold w-1/4 ml-5 text-sm text-red-400">
              Remove
            </div>
          </div>
        </div>
        <div class="w-full bg-gray-300 h-px"></div>
        <!-- FOur  -->
        <div class="flex p-3">
          <div class="h-5 w-24 mt-1.5 rounded-full bg-red-600 ml-2"></div>
          <div class="ml-2 mt-1.5 text-sm font-semibold min-w-max">Add Custom Discount into this Cart</div>
          <div><i class="fas fa-chevron-right ml-10 mt-2"></i></div>
        </div>
        <div class="w-full bg-gray-300 h-px"></div>
        <!-- Five  -->
        <div class="flex flex-col p-3">
          <div class="flex justify-between w-full text-lg mt-3">
            <div>Coupon Discount</div>
            <div>$0.00</div>
          </div>
          <div class="flex justify-between w-full text-lg mt-3">
            <div>Agent Custom Discount</div>
            <div>$0.00</div>
          </div>
          <div class="flex justify-between w-full text-lg mt-3">
            <div>TOTAL</div>
            <div class="text-green-400 font-semibold">$316.40</div>
          </div>
          <button
            type="button"
            class="border-0 rounded-none bg-green-500 mt-4 btn btn-success"
          >
            Checkout
          </button>
        </div>
      </div>
      <div class="w-px min-h-max bg-gray-300"></div>
      <div class="w-8/12">
        <!-- Frist  -->
        <div class="flex justify-between bg-gray-100">
          <div class="flex">
            <div class="flex bg-green-500 p-3 text-white">
              <svg
                style="fill: #ffffff"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="18"
                viewBox="0 0 576 512"
              >
                <path
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
              <span class="text-base ml-3 -mt-1"> Store</span>
            </div>
            <div class="flex p-3 font-semibold text-gray-600">
              <i class="fas fa-briefcase text-xl -mt-1"></i>
              <span class="text-base ml-3"> Upgrad Plans</span>
            </div>
          </div>
        </div>
        <!-- Second  -->
        <div class="p-2">
          <div class="mt-2 w-full">
            <ul class="nav nav-underline flex justify-start">
              <li>
                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Pro Subscription</button>
              </li>
              <li>
                <a class="nav-link text-gray-400" href="">Featured Subscription</a>
              </li>
            </ul>
            <div class="w-full bg-gray-300 h-0.5"></div>
          </div>
          <div class="flex flex-col">
           <div class="flex">
            <SalesCardInnerVue subscription="3 Month" priceOne="$99.73" priceSec="($33.23/month)"/>
            <SalesCardInnerVue subscription="6 Month" priceOne="$119.94"  priceSec="($19.98/month)"/>
            <SalesCardInnerVue  subscription="12 Month" priceOne="$199.50"  priceSec="($16.63/month)"/>
            </div> 
           <div class="flex">
            <SalesCardInnerVue  subscription="24 Month" priceOne="$475.00"  priceSec="($18.00/month)"/>
            <SalesCardInnerVue  subscription="36 Month" priceOne="$575.00"  priceSec="($16.00/month)"/>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>