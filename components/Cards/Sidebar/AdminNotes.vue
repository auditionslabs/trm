<template>
    <div
        class="p-2 text-white bg-red-500 text-sm ml-2 shadow-2xl border"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#staticBackdropAdminNotes"
      aria-controls="staticBackdropAdminNotes"
    >
    New SMS (842)
    </div>
    <div
      class="offcanvas offcanvas-end mt-16 AdminNotesideBar"
      data-bs-backdrop="static"
      tabindex="-1"
      id="staticBackdropAdminNotes"
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
              Admin Notes 
            </h5>
          </div>
        </div>
      </div>
      <div class="offcanvas-body bg-black font-medium text-sm">
        <div class="bg-white text-black p-2">
          <div class="flex ml-3">
            <span class="text-cyan-700"
              >by Andrew .</span
            >
            <span class="ml-1  font-normal">February 14, 2022 01:18 AM PST</span>
          </div>
          <div class="mt-2 ml-3 font-normal">
            <span class="font-semibold ">134343 talent</span>
            Call back for slae Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga error rerum illum, assumenda vitae ex in ducimus molestiae repellendus commodi nisi iure velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur.
            <div class="flex mt-2">
                <div><i class="fas fa-heart text-red-500"></i> 10</div>
                <div class="ml-5"><i class="fas fa-thumbs-up  text-cyan-700"></i> 8</div>
                <div class="ml-5"><i class="fas fa-thumbs-down"></i> 0</div>
            </div>
          </div>
        </div>
        <div class="bg-white text-black p-2 mt-2">
          <div class="flex ml-3"> <span class="text-cyan-700">By Casandra Brown</span> 
            <span class="ml-1  font-normal">january 29, 2022 03:35 AM PST</span>
          </div>
          <div class="mt-2 ml-3 font-normal">
            <span class="font-semibold ">134343 talent</span>
            Call back for slae Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga error rerum illum, assumenda vitae ex in ducimus molestiae repellendus commodi nisi iure velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur.
            adipisicing elit. Fuga error rerum illum, assumenda vitae ex in ducimus molestiae repellendus commodi nisi iure velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur.
            <div class="flex mt-2">
                <div><i class="fas fa-heart text-slate-500"></i> 0</div>
                <div class="ml-5"><i class="fas fa-thumbs-up    text-slate-500"></i> 0</div>
                <div class="ml-5"><i class="fas fa-thumbs-down  text-slate-500"></i> 0</div>
            </div>
          </div>
        </div>
        <div class="bg-white text-black p-2 mt-2">
            <div class="flex ml-3"> <span class="text-cyan-700">By Maxi Powers</span> 
            <span class="ml-1  font-normal">january 25, 2022 03:35 AM PST</span>
          </div>
          <div class="mt-2 ml-3 font-normal">
              The Company is seeking  extars for a student film that will be submited for the Coca - cola Refreshing film Compition.
          </div>
          <div class="flex mt-2">
                <div><i class="fas fa-heart text-red-500"></i> 10</div>
                <div class="ml-5"><i class="fas fa-thumbs-up  text-slate-700"></i> 7</div>
                <div class="ml-5"><i class="fas fa-thumbs-down text-cyan-700"></i> 2</div>
            </div>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
  .offcanvas {
    width: 45rem;
    height: 53rem;
  }
  </style>
  <script setup>
    // import AbcIcon from '@mui/icons-material/Abc';
  </script>