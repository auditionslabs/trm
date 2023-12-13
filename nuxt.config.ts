// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head:{
      link:[
        {rel:'stylesheet',href:'css/style.css'},
        {rel:'stylesheet',href:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'},
        {rel:'stylesheet',href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'},
        {rel:'stylesheet',href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'},
        {rel:"stylesheet" , href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}
      ],
      script:[
        {
          src:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          type:'text/javascript'
        },
        {
          src:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js',
          type:'text/fontawesome'
        },
        
        { src: "https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js",
         referrerpolicy: true
         }
         ,
        {
          src:"https://unpkg.com/@material-ui/core/umd/material-ui.production.min.js" ,
          crossorigin:"anonymous"
        }
      ],
    }
  },
  plugins: [
    // '@/plugins/view-ui',
    { src: '~/plugins/vue-datepicker', ssr: false },
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: ["@nuxtjs/tailwindcss",'nuxt-icon'],
  // build: {
  //   transpile: ["@vuepic/vue-datepicker"],
  // },
})