<template>
    <div>
        <!-- Frist  -->
        <div class="p-2 bg-white mt-2">
            <div class="flex justify-between">
      <div class="flex text-sm">
        <span class="text-gray-500">
            <i class="fas fa-star"></i>
        </span>
        <span class="ml-2 font-medium text-slate-800">Talent Profile</span>
      </div>
      <div class="flex justify-between text-sm">
        <div class="text-cyan-700">
          <i class="fas fa-plus"></i> <span>New</span>
        </div>
        <div class="mt-1">
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
    </div>
    <div class="mt-2 w-full bg-gray-300 h-px"></div>
    <div class="p-2">
        <div class="mt-2 w-full">
        <ul class="nav nav-underline flex font-medium">
          <li>
            <a class="nav-link active" aria-current="page" href="">Acting</a>
          </li>
          <li >
            <a class="nav-link ml-5"   href="">Modeling</a>
          </li>
        </ul>
      </div>
      <div class="mt-2">
        <div class="flex text-sm">
        <span class="font-medium  text-slate-800 min-w-max">Acting Preferences</span>
        <div class="mt-2.5 w-80 ml-5 bg-gray-300 h-px"></div>
        <span class="font-medium ml-2 text-slate-800 min-w-max text-cyan-700">
          <i class="fas fa-pen ml-3 text-cyan-700"></i> Edit</span>
      </div>
      </div>
      <div class="mt-2 flex text-cyan-700 text-sm font-semibold">
            <div>Acrobatics/Stunts</div>
            <div class="ml-16">Extrac</div>
      </div>
    </div>
    <button type="button" class="btn bg-gray-100 w-full font-semibold text-sm mt-2">Show More</button>
        </div>
        <!-- Second Card  -->
  <div class="p-2 bg-white mt-2">
    <div class="flex justify-between">
      <div class="flex text-sm">
        <span class="text-gray-500">
          <i class="fas fa-user"></i>
        </span>
        <span class="ml-2 font-medium text-slate-800">Talent tracking orders</span>
      </div>
      <div class="flex justify-between text-sm">
        <!-- <div class="text-cyan-700">
          <i class="fas fa-plus"></i> <span>New</span>
        </div> -->
        <div class="mt-1">
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
    </div>
    <div class="mt-2 w-full bg-gray-300 h-px"></div>
    <div class="flex justify-between">
      <div class="text-base mt-2 ml-1 font-semibold text-green-800/60">
        Talent Verification
      </div>
      <div class="mt-2 text-base text-cyan-700">
        <i class="fas fa-envelope"></i
        ><span class="ml-1">Send Welcome Email</span>
      </div>
    </div>
    <div class="bg-slate-100 p-2 flex flex-col mt-2">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label ml-2" for="flexCheckDefault">
          <span class="font-semibold">Talent Verifyed</span> by johnny (ID 4532). 01/22/22 AM GMT +
        </label>
      </div>
      <div class="flex justify-between">
        <div class="1/3"></div>
        <div class="2/3 flex mt-3">
            <input type="text"/>
            <button type="button" class="btn bg-lime-600 text-white ml-3">Update</button>

        </div>
      </div>
    </div>
    <div class="mt-2 ml-2 text-cyan-700">
        <i class="fas fa-receipt"></i><span class="ml-1">  Send Membership Receipt</span>
      </div>
      <div class="mt-2 ml-1.5 text-cyan-700 flex">
        <svg class="mt-1" style="fill: rgb(14 116 144);" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg><span class="ml-1.5">Show questionnaire</span>
      </div>
  </div>
  <!-- Credits Feed  -->
  <div class="p-2 bg-white mt-2">
    <div class="flex justify-between">
      <div class="flex text-sm">
        <span class="text-gray-500">
            <i class="fas fa-star"></i>
        </span>
        <span class="ml-2 font-medium text-slate-800">Credits & Experiance</span>
      </div>
      <div class="flex justify-between text-sm">
        <div class="text-cyan-700">
          <i class="fas fa-plus"></i> <span>New</span>
        </div>
        <div class="mt-1">
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
    </div>
    <div class="mt-2 w-full bg-gray-300 h-px"></div>    
    <div class="mt-2">
        <table class="table text-sm">
  <thead>
    <tr>
      <th scope="col">Project</th>
      <th scope="col">Role</th>
      <th scope="col">Duration</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-cyan-700">The prisoner break</td>
      <td>Extra</td>
      <!-- <td>Otto</td> -->
      <td>6 months</td>
      <td><i class="fas fa-pen ml-3 text-cyan-700"></i></td>
    </tr>
    <tr>
      <td class="text-cyan-700">Walking Deadz</td>
      <td>Extra</td>
      <!-- <td>Otto</td> -->
      <td>3 weeks 2 days</td>
      <td><i class="fas fa-pen ml-3 text-cyan-700"></i></td>
    </tr>
    <tr>
      <td class="text-cyan-700">Red Carpat male walk</td>
      <td>Modal</td>
      <td>1 months</td>
      <td><i class="fas fa-pen ml-3 text-cyan-700"></i></td>
    </tr>
    <tr>
      <td class="text-cyan-700">Red riding hulk</td>
      <td>Crew</td>
      <!-- <td>Otto</td> -->
      <td>2 months</td>
      <td><i class="fas fa-pen ml-3 text-cyan-700"></i></td>
    </tr>
  </tbody>
</table>
<button type="button" class="btn bg-gray-100 w-full font-semibold text-sm mt-2">Show More</button>
    </div>
  </div>
  <!-- Subscription info Feed -->
  <div class="p-2 bg-white mt-2">
    <div class="flex justify-between">
      <div class="flex text-sm">
        <span class="text-gray-500">
          <i class="fas fa-user"></i>
        </span>
        <span class="ml-2 font-medium text-slate-800">Subscription Info</span>
        <button type="button" class="btn btn-light text-xs font-semibold bg-amber-300 ml-1 h-7 w-12">PRO</button>
        <p class="text-xs w-32 ml-2 bg-red-200/60 text-red-600 p-1 rounded flex">
                            <svg xmlns="http://www.w3.org/2000/svg" style="fill:#FF0000"  class="text-red-500 ml-2" height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                            <span class="ml-1 min-w-max">Cancle request</span></p>
      </div>
      <div class="flex justify-between text-sm">
        <div class="mt-1">
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
    </div>
    <div class="mt-2 w-full bg-gray-300 h-px"></div>
    <div class="flex mt-3   ">
        <div class="font-semibold text-cyan-700"><i class="fas fa-chevron-left"></i> Back</div>
        <div class="font-semibold ml-20">Cancel Subscription</div>
    </div>
    <div class="flex bg-gray-100/60 mt-3 p-2 font-semibold">
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
  <label class="form-check-label" for="flexRadioDefault1">
        No Refund
  </label>
</div>
<div class="form-check ml-10">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
  <label class="form-check-label" for="flexRadioDefault2">
    with Refund
  </label>
</div>
    </div>
    <div class="text-sm mt-2 font-semibold">
        Canclellation reason
    </div>
    <div class="mt-2">
        <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Enter reason for Canclellation</label>
</div>
    </div>
    <div class="mt-3 p-2 font-semibold">
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
  <label class="form-check-label" for="flexRadioDefault1">
        End Right now
  </label>
</div>
<div class="form-check mt-3 flex">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
  <label class="form-check-label ml-1.5" for="flexRadioDefault2">
        Shedule Date to End
  </label>
  <Modal :visible="true" :variant="success"></Modal>
</div>
    </div>
  </div>
  <!-- Subscription sec info Feed -->
  <div class="p-2 bg-white mt-2">
    <div class="flex justify-between">
      <div class="flex text-sm">
        <span class="text-gray-500">
          <i class="fas fa-user"></i>
        </span>
        <span class="ml-2 font-medium text-slate-800">Subscription Info</span>
        <button type="button" class="btn btn-light text-xs font-semibold bg-green-500 ml-1 h-7 w-24">FEATURED</button>
        <p class="text-xs w-32 ml-2 bg-red-200/60 text-red-600 p-1 rounded flex">
                            <svg xmlns="http://www.w3.org/2000/svg" style="fill:#FF0000"  class="text-red-500 ml-2" height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                            <span class="ml-1 min-w-max">Cancle request</span></p>
      </div>
      <div class="flex justify-between text-sm">
        <div class="mt-1">
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
    </div>
    <div class="mt-2 w-full bg-gray-300 h-px"></div>
    <div class="flex w-full font-semibold mt-3">
        <div class="w-1/3 min-w-max text-gray-600 text-sm -ml-4"> <span class="float-right	">Subscription Type</span></div>
        <div class="text-sm w-2/3 float-start">
          <span class="ml-4">FEATURED</span>
        </div>
    </div> 
    <div class="flex w-full font-semibold mt-3">
        <div class="w-1/3 min-w-max text-gray-600 text-sm -ml-4"> <span class="float-right	">Status</span></div>
        <div class="text-sm w-2/3 float-start">
          <span class="ml-4 text-green-500">Active</span>
        </div>
    </div> 
    <div class="flex w-full font-semibold mt-3">
        <div class="w-1/3 min-w-max text-gray-600 text-sm -ml-4"> <span class="float-right	">Currunt Plan</span></div>
        <div class="text-sm w-2/3 float-start">
          <span class="ml-4">Featured 1 Month $5.95/month</span>
        </div>
    </div>
    <div class="flex w-full font-semibold mt-3">
        <div class="w-1/3 min-w-max text-gray-600 text-sm -ml-4"> <span class="float-right	">Last Payment</span></div>
        <div class="text-sm w-2/3 float-start flex flex-col">
          <span class="ml-4">January 15 , 2022 - $5.95</span>
          <span class="ml-4 text-cyan-700">View Invoice</span>
        </div>
    </div>
    <div class="flex w-full font-semibold mt-3">
        <div class="w-1/3 min-w-max text-gray-600 text-sm -ml-4"> <span class="float-right	">Next Payment Due</span></div>
        <div class="text-sm w-2/3 float-start flex flex-col">
          <span class="ml-4">Fabruary 15 , 2022 / Every Month</span>
          <span class="ml-4 text-cyan-700">View Payment Details</span>
        </div>
    </div>
    <div class="flex w-full font-semibold mt-3">
        <div class="w-1/3 min-w-max text-gray-600 text-sm -ml-4"> <span class="float-right	">Payment Method</span></div>
        <div class="text-sm w-2/3 float-start">
          <span class="ml-4">Visa **** 4409</span>
        </div>
    </div> 
    <div class="bg-red-200 p-2 mt-3 flex flex-col text-sm">
      <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" style="fill:#FF0000"  class="text-red-500 ml-2 mt-1" height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
          <span class="text-sm text-red-600 ml-2 mt-0.5 font-semibold">Cancle request on july 8 , 2020 . 3:50 AM</span>
      </div>
      <div class=" text-red-600 ml-2 mt-2 flex justify-between">
        <div class="flex flex-col">
       <div><span>Staff : </span>
        <span class="font-semibold">Samule</span></div> 
        <div class="mt-1.5"><span>Reason : </span>
        <span class="font-semibold">Telent on more work</span></div> 
        </div>
      <div class="mt-2">
        <button type="button" class="btn btn-danger bg-red-600 rounded-none">Cancle</button>
      </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Modal from '../Modal.vue';
export default {
    components:{
      Modal
    }
};
</script>