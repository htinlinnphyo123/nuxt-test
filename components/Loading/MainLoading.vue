<style @scoped>
.main-loading {
  width: 105px;
  aspect-ratio: 1;
  position: relative;
  height: 84px;
}

.main-loading:before,
.main-loading:after {
  content: "";
  position: absolute;
  border-radius: 50px;
  box-shadow: 0 0 0 3px inset rgb(253, 254, 255);
  animation: sc 2.5s infinite;
}

.main-loading:after {
  animation-delay: -1.25s;
  border-radius: 0;
}

@keyframes sc {
  0% {
    inset: 0 75px 75px 0;
  }

  12.5% {
    inset: 0 75px 0 0;
  }

  25% {
    inset: 75px 75px 0 0;
  }

  37.5% {
    inset: 75px 0 0 0;
  }

  50% {
    inset: 75px 0 0 75px;
  }

  62.5% {
    inset: 0 0 0 75px;
  }

  75% {
    inset: 0 0 75px 75px;
  }

  87.5% {
    inset: 0 0 75px 0;
  }

  100% {
    inset: 0 75px 75px 0;
  }
}
</style>
<template>
  <div role="status" class="grid h-screen place-items-center" id="loadingTrue">
    <div role="status">
      <div class="main-loading"></div>
    </div>
  </div>
</template>
