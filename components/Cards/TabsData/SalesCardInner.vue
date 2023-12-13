<script>
export default {
    props: [
        'subscription',
        'priceOne',
        'priceSec'
    ]
};
// console.log(subscription)
</script>
<template>
  <div class="p-1 mt-2 w-1/3">
    <div class="card" style="width: 13.4rem">
        <div class="h-32 w-32 bg-violet-500	rounded-full ml-10 mt-3"></div>
      <!-- <img src="..." class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <div class="card-title flex">
                <span class="-ml-2  min-w-max font-semibold">{{ subscription }}</span>
            <span class="ml-3 min-w-max">Pro Subscription</span>
        </div>
        <div class="flex text-lg">
            <div class="-ml-1 font-semibold">{{ priceOne }}</div>
            <div>{{ priceSec }}</div>
        </div>
        <button type="button" class="mt-3 btn btn-light bg-zinc-200 w-full text-slate-500">
            <i class="fas fa-cart-plus"></i> <span class="ml-2">Add To Cart</span></button>
      </div>
    </div>
  </div>
</template>