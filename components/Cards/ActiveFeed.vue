<script>
import ActiveFeedNavTab from '~/components/Cards/ActiveFeedNavTab.vue'
import Editor from '@tinymce/tinymce-vue'
// const counter = useState('counter', () => Math.round(Math.random() * 1000))
export default {
  name: 'app',
    components:{
        ActiveFeedNavTab,
        'editor': Editor
    }
};
// console.log(isActive)
</script>
<template>
  <div class="p-2 ml-3 bg-white">
    <div class="flex text-sm w-full justify-between">
      <div>
        <span class="text-gray-500">
          <i class="fas fa-user"></i>
        </span>
        <span class="ml-2 font-medium text-slate-800">Active Feed</span>
        
      </div>
      <div >
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
      </div>
    </div>
    <div class="mt-2 w-full bg-gray-300 h-px"></div>
    <div class="w-full mt-3">
        <ActiveFeedNavTab/>
        <div>
          <editor class="w-full"
       api-key="no-api-key"
       :init="{
         height: 200,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
     />
        </div>
    </div>
  </div>
</template>