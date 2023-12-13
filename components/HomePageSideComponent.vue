<script>
import TelentInfoCard from '~/components/Cards/TelentInfoCard.vue'
import ActiveFeed from '~/components/Cards/ActiveFeed.vue'
import AdditionalTelentCardVue from '~/components/Cards/AdditionalTelentCard.vue'
import SalesFeedCard from '~/components/Cards/SelasFeed.vue'
import AudtionControl from '~/components/Cards/AudtionControl.vue'
import TalentFeed from './Cards/TabsData/TalentFeed.vue'
import JobonmapVue from '~/components/Cards/Maps/Jobonmap.vue'
import LoginlogsVue from './Cards/Maps/Loginlogs.vue'
import Editor from '@tinymce/tinymce-vue'
import Modal from './Cards/Modal.vue'
export default {
  name: 'app',
  components: {
    TelentInfoCard,
    ActiveFeed,
    AdditionalTelentCardVue,
    SalesFeedCard,
    AudtionControl,    
    TalentFeed,
    JobonmapVue,
    LoginlogsVue,
    Modal,
    'editor': Editor
},
  }
</script>

<template>
  <div>
    <div class="bg-zinc-200">
      <div class="flex ml-1">  
        <div class="w-full flex p-2">
            <div class="w-4/12">
                <TelentInfoCard/>
                <AdditionalTelentCardVue/>
                <TalentFeed/>
                <!-- <Modal :visible="true" :variant="success"></Modal> -->
            </div>
            <div class="w-8/12">
              <ActiveFeed/>
              <SalesFeedCard/>
              <AudtionControl/>
              <JobonmapVue/>
              <LoginlogsVue/>
            </div>
        </div>
      </div>
    </div>
    <!-- <div class="w-full bg-white h-20">
    </div> -->
  </div>
</template>