<style @scoped>
.loading-one {
  display: inline-block;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #333131;
  position: relative;
}

.loading-one::before {
  content: "";
  position: absolute;
  left: 34px;
  bottom: 19px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 5px solid #201f1f;
  border-bottom-color: #ff3d00;
  box-sizing: border-box;
  animation: rotation 0.6s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
<template>
  <div role="status" class="grid h-screen place-items-center" id="loadingTrue">
    <div role="status">
      <span class="loading-one">L &nbsp; ading</span>
    </div>
  </div>
</template>
