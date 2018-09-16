<template>
  <div class="popover-wrap">
    <div class="popover-content" @click="$emit('close')">
      <div class="hint">
        <div class="content">
          <span class="title">{{ title }}</span>
          <span class="text">{{ text }}</span>
          <div class="close"></div>
          <div class="buttonsWrapper">
            <a v-for="btn in buttons"
              :href="btn.url"
              target="_blank"
              class="button"
              :class="btn.class">
                {{ btn.text }}
            </a>
          </div>
        </div>
      </div>
      <div class="hint-pointer"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title:    { type: String, required: true },
    text:     { type: String, required: true },
    buttons:  { type: Array }
  }
}
</script>

<style scoped>
.popover-wrap {
  position: relative;
  display: flex;
  justify-content: center;
}

.popover-content {
  display: flex;
  justify-content: center;
  font-family: sans-serif;
}

.hint {
  position: relative;
  min-width: 254px;
}

.hint-pointer {
  position: absolute;
  bottom: 9px;
  border-top: 10px solid #22222F;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.button, .title {
  font-weight: 700;
}

.button, .content {
  display:flex;
  box-sizing: border-box;
  color: #fff;
}

a {
  text-decoration:none;
}

.close, .content, .content:before {
  position: absolute;
}

.close {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1
}

.content {
  left: 0;
  right: 0;
  bottom:19px;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
  padding: 30px;
  background-color: #191927;
  border-radius: 10px;
}

.content:before {
  content: &#x27;
  left: calc(50% - 10px / 2);
  bottom: -10px;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #191927;
}

.title {
  font-size:20px;
  margin-bottom:10px
}

.text {
  font-size:14px;
  margin-bottom:20px;
}

.buttonsWrapper {
  width:100%;
  display:flex;
  justify-content:space-between;
  position:relative;
  z-index:2
}

.button {
  text-align:center;
  font-size:12px;
  width:calc(50% - 10px);
  height:35px;
  padding:0 20px;
  border-radius:20px;
  align-items:center;
  justify-content:center;
  transition:all 250ms ease-out;
  cursor:pointer;
}

.button.red {
  background-color:#e54d3f;
}

.button.red:hover {
  background-color:#ce4134;
}

.button.nofill {
  border:1px solid #fff;
}

.button.nofill:hover {
  color:#191927;
  background-color:#fff;
}
</style>