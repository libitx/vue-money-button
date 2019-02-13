<template>
  <div class="spinner__moneybutton">
    <div class="bounce__moneybutton bounce-1"></div>
    <div class="bounce__moneybutton bounce-2"></div>
    <div class="bounce__moneybutton bounce-3"></div>
  </div>
</template>

<style>
.spinner__moneybutton {
  position: absolute;
  top: 50%;
  left: 50px;
  z-index: 0;
  margin-top: -11px;
}

.bounce__moneybutton {
  width: 18px;
  height: 18px;
  background-color: #333;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.bounce__moneybutton.bounce-1 {
  background-color: #FF4136;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.bounce__moneybutton.bounce-2 {
  background-color: #357EDD;
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

.bounce__moneybutton.bounce-3 {
  background-color: #191927;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>