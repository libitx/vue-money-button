<template>
  <div>
    <div class="blur-background__moneybutton" @click="$emit('close')" />

    <div class="hint__moneybutton" >
      <div class="content__moneybutton">
        <span class="title__moneybutton">{{ title }}</span>
        <span class="text__moneybutton">{{ message }}</span>
        <div class="close__moneybutton" />
        <div class="buttonsWrapper__moneybutton">

          <a v-if="buttonText"
            :href="buttonUrl"
            target="_blank" 
            rel="noopener noreferrer"
            class="button__moneybutton red__moneybutton"
          >{{ buttonText }}</a>

          <a v-if="button2Text"
            :href="button2Url"
            target="_blank" 
            rel="noopener noreferrer"
            class="button__moneybutton nofill__moneybutton"
          >{{ button2Text }}</a>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title:        { type: String, required: true },
    message:      { type: String, required: true },
    buttonText:   { type: String },
    buttonUrl:    { type: String },
    button2Text:  { type: String },
    button2Url:   { type: String }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700');

.hint__moneybutton {
  min-width: 254px;
  position: relative;
}
.hint__moneybutton a {
  text-decoration: none
}
.hint__moneybutton .close__moneybutton {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.blur-background__moneybutton {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.55);
}
.hint__moneybutton .content__moneybutton {
  color: white;
  background-color: #191927;
  padding: 30px;
  border-radius: 10px;
  position: fixed;
  bottom: 19px;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  min-width: 260px;
  max-width: 350px;
  font-family: 'IBM Plex Sans', sans-serif;
}
.hint__moneybutton .title__moneybutton {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.hint__moneybutton .text__moneybutton {
  text-align: left;
  font-size: 14px;
  margin-bottom: 20px;
}
.hint__moneybutton .buttonsWrapper__moneybutton {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}
.hint__moneybutton .button__moneybutton {
  color: white;
  font-size: 12px;
  font-weight: bold;
  width: calc(50% - 10px);
  height: 35px;
  padding: 0 20px;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms ease-out;
  cursor: pointer;
}
.hint__moneybutton .button__moneybutton.add__moneybutton {
  width: auto;
}
.hint__moneybutton .button__moneybutton.red__moneybutton {
  background-color: #e54d3f;
}
.hint__moneybutton .button__moneybutton.red__moneybutton:hover {
  background-color: #ce4134;
}
.hint__moneybutton .button__moneybutton.nofill__moneybutton {
  border: 1px solid #fff;
}
.hint__moneybutton .button__moneybutton.nofill__moneybutton:hover {
  color: #191927;
  background-color: white;
}
</style>