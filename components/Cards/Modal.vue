<template>
  <div
    v-if="OpenClose"
    class="modal fade show"
    style="
      display: block;
      /* background-color: white; */
      height: 0rem;
      width: 0rem;  
      /* z-index: 2; */
    "
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-modal="true"
    role="dialog"
  >
    <!-- <div class="modal" tabindex="-1"> -->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header"></div>
        <div class="modal-body">
          <div class="modal-overlay">
            <div class="card" style="width: 25rem; height: 15rem">
              <div class="card-body">
                <h5 class="card-title flex flex-col">
                    <div>Are you sure you want</div>
                    <div>to cancle this Subscription</div>
                  </h5>
                <div class="mt-4 -ml-20 text-sm">
                  Enter password for conformation
                </div>
                <input type="password" class="border-2 mt-0.5 h-10 w-72" placeholder="Enter Password"/>
              </div>
              <div class="flex mb-8 ml-12 w-72 justify-between">
                <button
                  type="button"
                  class="btn btn-light bg-gray-200 ml-2 rounded-none"
                  data-bs-dismiss="modal"
                  @click="OpenCloseFun()"
                >
                  Cancle
                </button>
                <button
                  type="button"
                  class="btn btn-success bg-green-500 rounded-none"
                  data-bs-dismiss="modal"
                  @click="OpenCloseFun()"
                >
                  Conform Canclellation
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div>
    <button
      @click="OpenCloseFun()"
      type="button"
      :class="
        'btn btn-success bg-green-500 ml-32 -mt-3 rounded-none	 text-white btn btn-' +
        variant
      "
    >
      Conform Collection
    </button>
  </div>
</template>
<script>
export default {
  name: "AlertDefualt",
  props: {
    visible: Boolean,
    variant: String,
  },
  data() {
    return {
      OpenClose: !this.visible,
    };
  },
  methods: {
    OpenCloseFun() {
      this.OpenClose = !this.OpenClose;
    },
  },
  watch: {
    visible: function (newVal, oldVal) {
      this.OpenClose = newVal;
      console.log("New", newVal, oldVal);
    },
  },
};
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0; 
  max-height: 24.3rem;
  max-width: 32.6rem;
  padding: 3.5rem;
  display: flex;
  margin-left: 20.7rem;
  margin-top: 7rem;
  justify-content: center;  
  background-color: #313131da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

/* .close-img {
  width: 25px;
} */

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}
</style>