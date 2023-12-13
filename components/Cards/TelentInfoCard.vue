<script>
import MenuIcon from "vue-material-design-icons/AccountReactivateOutline.vue";
import * as MuiCore from '@mui/core'
import * as MuiIcons from '@mui/icons-material'
import { AccountCircle } from '@mui/icons-material'
import { Icon } from '#components'

// const MyIcon = h(Icon, { name: 'uil:twitter' })
export default {
  components: {
    MenuIcon,
    ...MuiCore,
    ...MuiIcons,
    AccountCircle
  },
};
</script>
<template>
  <div class="p-2 bg-white">
    <div class="flex">
      <div class="flex text-sm">
        <span class="text-gray-500"> 
          <i class="fas fa-user"></i>
        </span>
        <span class="ml-2 font-medium  text-slate-800">Telent Info</span>
      </div>
    </div>
    <div class="mt-2 w-full bg-gray-300 h-px"></div>
    <div class="flex w-full">
      <div class="w-2/5">
        <img src="/images/userImg.avif" class="UserImg" />
      </div>
      <div class="w-3/5 mt-2 ml-3">
        <p class="text-gray-500 font-medium  text-sm">Talent Interst</p>
        <p class="text-cyan-700/75 font-semibold  text-sm w-72">
          Acting , Modling , Dance , Music , Crew , Voter
        </p>
        <p class="text-gray-500 font-semibold mt-2 text-sm">Closest City</p>
        <p class="text-cyan-700/75 font-semibold text-sm">New York City , NY</p>
        <div class="flex justify-between mt-4">
          <div class="card rounded-none" style="width: 4rem;">
            <div class="card-body">
            <div class="card-title text-sm min-w-max -ml-1.5">Photos</div>
            </div>
          </div>
          <div class="card rounded-none" style="width: 4rem;">
            <div class="card-body">
              <div class="card-title text-sm min-w-max -ml-1.5">Photos</div>

            </div>
          </div>
          <div class="card rounded-none" style="width: 4rem;">
            <div class="card-body">
              <div class="card-title text-sm min-w-max -ml-1.5">Photos</div>

            </div>
          </div>
          <div class="card rounded-none" style="width: 4rem;">
            <div class="card-body">
              <div class="card-title text-sm min-w-max -ml-1.5">Photos</div>

            </div>
          </div>
        </div>
        <div class="flex mt-2">
          <button type="button" class="btn btn-light bg-gray-200 font-semibold p-2 w-40 rounded-none text-sm">Login as Talent</button>
          <button type="button" class="btn btn-light bg-gray-200 font-semibold p-2 w-40 rounded-none text-sm ml-2"><IconCSS name="uil:plus"/> Add Ticket</button>
        </div>
        <div>
            <Button class="ScynBtn bg-lime-600 text-white p-2 mt-3" variant="contained" color="primary">Scyn to Live gent</Button>
        </div>
      </div>
    </div>
    <!-- Frist State  -->
    <div>
    <div class="flex mt-2">
      <div class="flex text-sm">
        <span class="font-medium  text-slate-800 min-w-max">Telent Info</span>
        <div class="mt-2 w-96 ml-2 bg-gray-300 h-px"></div>
        <div class="flex text-cyan-700 ml-1"><span>
          <i class="fas fa-pen"></i> Edit</span></div>
      </div>
    </div>
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Frist name</div>
            <div class="text-cyan-700">Rosie</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Last Name</div>
            <div class="text-cyan-700">Wright</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Birth data</div>
            <div class="text-cyan-700">Dec. 12 1980(40)</div>
        </div>
    </div> 
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">City</div>
            <div class="text-cyan-700">Brookliya</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">State</div>
            <div class="text-cyan-700">New York</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Zip Code</div>
            <div class="text-cyan-700">75001</div>
        </div>
    </div> 
  </div>
    <!-- Second State  -->
    <div>
    <div class="flex mt-4">
      <div class="flex text-sm">
        <span class="font-medium  text-slate-800 min-w-max">Contact Info</span>
        <div class="mt-2 w-96 bg-gray-300 h-px"></div>
        <div  class="font-medium min-w-max text-cyan-700"><span>
          <i class="fas fa-pen"></i> Edit</span></div>
      </div>
    </div>  
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Main Phone</div>
            <div class="text-cyan-700">54281265128</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">SMS provider</div>
            <div class="text-cyan-700">Cingular</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600"></div>
            <div class="text-cyan-700"></div>
        </div>
    </div> 
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">2nd Phone</div>
            <div class="text-cyan-700">54281265128</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">SMS provider</div>
            <div class="text-cyan-700">Airtle</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600"></div>
            <div class="text-cyan-700"></div>
        </div>
    </div> 
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Email 1</div>
            <div class="text-cyan-700">RosieA1@gmail.com</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Email 2</div>
            <div class="text-cyan-700">RosieA2@gmail.com</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600"></div>
            <div class="text-cyan-700"></div>
        </div>
    </div> 
  </div>
        <!-- Third State  -->
  <div>
        <div class="flex mt-4">
      <div class="flex text-sm">
        <span class="font-medium  text-slate-800 min-w-max">Account Info</span>
        <div class="mt-2 w-96 bg-gray-300 h-px"></div>
        <div class="flex text-cyan-700 font-medium  min-w-max -ml-1"><span>
          <i class="fas fa-pen"></i> Edit</span></div>
      </div>
    </div>  
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Account Status</div>
            <div class="text-green-600">Active</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">User ID</div>
            <div class="text-cyan-700">81666</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600"></div>
            <div class="text-cyan-700"></div>
        </div>
    </div> 
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Username</div>
            <div class="text-cyan-600">RosieWright123</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Password</div>
            <div class="text-cyan-700">Change Password</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600"></div>
            <div class="text-cyan-700"></div>
        </div>
    </div> 
  </div>
  </div>
</template>