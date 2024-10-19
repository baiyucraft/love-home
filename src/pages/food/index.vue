<route lang="json5">
{
  style: {
    navigationBarTitleText: '御膳房',
  },
}
</route>
<template>
  <view class="food-page">
    <wd-swiper
      :list="swiperList"
      autoplay
      v-model:current="current"
      @click="handleClick"
      @change="onChange"
      :interval="1000 * 30"
      height="240px"
    ></wd-swiper>
    <view class="food-content" :class="{ fixed: isFixed }">
      <view class="content-head">
        <image src="" mode="scaleToFill" />
        <text>御膳房</text>
        <text>公告</text>
      </view>
      <view class="content-body">
        <text>搜索</text>
        <scroll-view scroll-y class="content-body-left">
          <button class="">素菜</button>
          <button class="">大鱼大肉</button>
          <button class="">一锅炖不下</button>
        </scroll-view>
        <scroll-view scroll-y class="content-body-right">
          <view>
            <view class="">素菜</view>
            <wd-card>土豆丝</wd-card>
          </view>
          <view>
            <view class="">大鱼大肉</view>
            <wd-card>酸菜鱼</wd-card>
            <wd-card>红烧肉</wd-card>
          </view>
          <view>
            <view class="">大鱼大肉</view>
            <wd-card>酸菜鱼</wd-card>
            <wd-card>红烧肉</wd-card>
          </view>
          <view>
            <view class="">大鱼大肉</view>
            <wd-card>酸菜鱼</wd-card>
            <wd-card>红烧肉</wd-card>
          </view>
          <view>
            <view class="">大鱼大肉</view>
            <wd-card>酸菜鱼</wd-card>
            <wd-card>红烧肉</wd-card>
          </view>
          <view>
            <view class="">大鱼大肉</view>
            <wd-card>酸菜鱼</wd-card>
            <wd-card>红烧肉</wd-card>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const current = ref<number>(0)
const isFixed = ref<boolean>(false)

const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])
function handleClick(e) {
  console.log(e)
}
function onChange(e) {
  console.log(e)
}

// 使用页面滚动事件替代窗口滚动事件
onPageScroll(({ scrollTop }) => {
  const swiperHeight = 240 // 轮播图高度
  isFixed.value = scrollTop >= swiperHeight - 20 // 20是food-content的top偏移
})
</script>
<style lang="scss" scoped>
.food-page {
  height: 100vh;
  overflow: hidden;
}

.food-content {
  position: absolute;
  top: 220px;
  width: 100%;
  height: calc(100vh - 220px);
  background-color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: top 0.3s;

  &.fixed {
    position: fixed;
    top: 0;
    height: 100vh;
  }
}

.content-body {
  display: flex;
  height: calc(100% - 60px); // 假设content-head高度为60px
  padding: 20px;
}

.content-body-left,
.content-body-right {
  flex: 1;
  height: 100%;
  overflow-y: auto;
}

.content-body-left {
  flex: 1;
  margin-right: 10px;
}

.content-body-right {
  flex: 2;
}

.wd-swiper {
  --wot-swiper-radius: 0px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1; /* 确保蒙版在图片上方 */
    width: 100%;
    height: 100%;
    pointer-events: none; /* 允许点击穿透蒙版 */
    content: '';
    background-color: rgba(0, 0, 0, 0.3); /* 半透明黑色蒙版 */
  }
}

.content-body-left {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto; /* 左侧内容可以滚动 */
}

.content-body-right {
  display: flex;
  flex: 2;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
  overflow-y: auto; /* 右侧内容可以滚动 */
}
</style>
