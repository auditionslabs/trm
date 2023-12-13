<template>
  <div
    class="text-lg font-semibold text-cyan-600 mt-2"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#staticBackdrop"
    aria-controls="staticBackdrop"
  >
    + Contact Info
  </div>
  <div
    class="offcanvas offcanvas-end mt-16 SecSideaBar"
    data-bs-backdrop="static"
    tabindex="-1"
    id="staticBackdrop"
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
          <h5 class="offcanvas-title text-2xl" id="offcanvasScrollingLabel">
            Alert 
          </h5>
        </div>
      </div>
    </div>
    <div class="offcanvas-body bg-black font-medium text-sm">
      <div class="bg-white text-black p-2">
        <div class="flex ml-3">
          1631468 .
          <span class="text-cyan-700"
            >Dr Strange In The Multiverce of Madeness</span
          >
        </div>
        <div class="mt-2 ml-3 font-normal">
          Doctor Strange director and co-writer Scott Derrickson had plans for a 
          sequel by October 2016. He signed to return as director in December
          2018, when Cumberbatch was confirmed to return. The film's title was
          announced in July 2019 along with Olsen's involvement, while Jade
          Halley Bartlett was hired to write the film that October. Derrickson
          stepped down as director in January 2020
        </div>
      </div>
      <div class="bg-white text-black p-2 mt-2">
        <div class="flex ml-3">
          1631469 . <span class="text-cyan-700">Tomb Raider 2 - Obsidian</span>
        </div>
        <div class="mt-2 ml-3 font-normal">
          Tomb Raider 2 fans have been dealt a blow when it comes to the
          long-anticipated sequel. It was making slow progress towards
          development, only to be suddenly cancelled in July 2022. MGM hadn't
          Given that little fact, it's highly unlikely we'll ever see a potential Tomb Raider 2. Yet, as the old adage goes, never say never.
        </div>
        <div class="ml-3  font-normal"> green-lit the film, but they had until May 2022 to do something with
          the property before losing the rights. Without a confirmed sequel, the
          rights were lost — and along with them, any hopes for a direct sequel
          from MGM.</div>
      </div>
      <div class="bg-white text-black p-2 mt-2">
        <div class="flex ml-3">
          1631843 . <span class="text-cyan-700">Coca - cola Refreshing film</span>
        </div>
        <div class="mt-2 ml-3 font-normal">
            The Company is seeking  extars for a student film that will be submited for the Coca - cola Refreshing film Compition.
        </div>
      </div>
      <div class="bg-white text-black p-2 mt-2">
        <div class="flex ml-3">
          1629334 . <span class="text-cyan-700">Lancome Photoshoot , Pays $1000/day</span>
        </div>
        <div class="mt-2 ml-3 font-normal">
              We're Looking for 3-5 female for photoshoot. ALL ETHNICITIES AND SIZES WELCOME !    
        </div>
      </div>
      <div class="bg-white text-black p-2 mt-2">
        <div class="flex ml-3">
          1632115 . <span class="text-cyan-700">Flying Solo NYFW / paris fashion Week</span>
        </div>
        <div class="mt-2 ml-3 font-normal">
          The largest indipendent designer platform in the United States is now seeking modals for upcoming fashion shows. <AbcIcon/>
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
  import AbcIcon from '@mui/icons-material/Abc';
</script>