<template>
  <div>
    <label v-if="item">{{ item }}:</label>
    <div class="wrapper" :class="[sizeWindow === 'f' ? 'w_full' : 'w_fit']" v-if="imagesList?.length"
      :ref="(el) => (sizeWindow === 'f' ? (refComp = el) : null)">
      <AppImagesCaruselPreloader v-if="sizeWindow === 'f' ? images.isLoading : images.startLoading" :class="{
        'size_14': sizeWindow !== 'f',
      }" :square="sizeWindow !== 'f'" />
      <img v-show="!(sizeWindow === 'f' ? images.isLoading : images.startLoading)" :src="imagesList[images.selectedIdx]"
        class="parentImg" :class="{
          'size_full': sizeWindow === 'f',
          'size_14': sizeWindow !== 'f',
        }" :alt="'Ошибка'" onerror="this.style.display='none'"
        @load="() => (sizeWindow === 'f' ? images.load() : images.startLoad())" />
      <div v-if="sizeWindow !== 'f'" class="main_wrapper hover_block" :class="[
        {
          'size_40': sizeWindow === 'm',
          'size_52': sizeWindow === 'l',
          'hover_hidden': sizeWindow === 'f',
        },
      ]" :style="[`${float}-0`]" :ref="(el) => (sizeWindow === 'f' ? null : (refComp = el))">
        <AppImagesCaruselPreloader v-if="images.isLoading" :square="sizeWindow !== 'f'" />
        <img v-show="!images.isLoading" :src="imagesList[images.selectedIdx]" class="main_img" :alt="'Ошибка'"
          @load="() => images.load()" />
      </div>
    </div>
  </div>
  <Teleport :to="refComp" v-if="refComp !== null">
    <div v-if="imagesList.length > 1" class="navigation">
      <button class="hf" @click="images.pref(imagesList.length)">
        <span class="material-icons-outlined"> navigate_before </span>
      </button>
      <button class="hf" @click="images.next(imagesList.length)">
        <span class="material-icons-outlined"> navigate_next </span>
      </button>
    </div>
    <div class="pagination">
      <span>
        {{ images.selectedIdx + 1 + " / " + imagesList.length }}
      </span>
    </div>
  </Teleport>
</template>

<script>
import { nextTick, reactive, ref, watch } from "vue";
import { useLangConfiguration } from "@/composables/langConfiguration";
import AppImagesCaruselPreloader from "./AppImagesCaruselPreloader.vue";
export default {
  components: { AppImagesCaruselPreloader },
  props: {
    imagesList: { type: Array, default: () => [] },
    sizeWindow: {
      type: String,
      required: false,
      default: () => "l",
      validator: (value) => ["m", "l", "f"].includes(value),
    },
    float: {
      type: String,
      required: false,
      default: () => "left",
      validator: (value) => ["right", "left"].includes(value),
    },
    item: {
      type: String,
      required: false,
      default: () => "",
    },
  },
  setup() {
    const images = reactive({
      selectedIdx: 0,
      isLoading: false,
      startLoading: true,
      startLoad: function () {
        this.startLoading = false;
      },
      load: function () {
        nextTick(() => (this.isLoading = false));
      },
      next: function (length) {
        let next = this.selectedIdx + 1;
        if (length <= next) next = 0;
        this.selectedIdx = next;
      },
      pref: function (length) {
        let pref = this.selectedIdx - 1;
        if (pref < 0) pref = length - 1;
        this.selectedIdx = pref;
      },
    });

    const refComp = ref(null);

    watch(
      () => images.selectedIdx,
      () => (images.isLoading = true)
    );
    const timer = ref(null);
    watch(
      () => images.isLoading,
      () => {
        if (!images.isLoading) {
          clearTimeout(timer.value);
          return;
        }
        timer.value = setTimeout(() => (images.isLoading = false), 5000);
      },
      { immediate: true }
    );
    const timerStart = ref(null);
    watch(
      () => images.startLoading,
      () => {
        if (!images.startLoading) {
          clearTimeout(timerStart.value);
          return;
        }
        timerStart.value = setTimeout(
          () => (images.startLoading = false),
          5000
        );
      },
      { immediate: true }
    );

    return { images, refComp };
  },
};
</script>

<style lang="scss" scoped>
img[alt]:after {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  text-align: center;
  content: attr(alt);
}

.navigation {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px;
  height: 100%;
  background-color: transparent;

  .hf {
    height: 100%;
  }
}

.pagination {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
  color: rgb(51 65 85 / 0.7);
}

.wrapper {
  position: relative;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 16 / 9;

  .size_14 {
    width: 56px;
    height: 56px;
  }

  .size_full {
    width: 100%;
    height: auto;
  }

  .parentImg {
    border-radius: 6px;
  }

  .main_wrapper {
    display: none;
    position: absolute;
    z-index: 110;
    top: 50%;
    transform: translateY(-50%);
    padding: 32px;
    box-shadow: 0 0 0 1, rgb(100 116 139 / 0.5);
    border-radius: 12px;
    background-color: #fff;
  }

  .size_40 {
    width: 160px;
    height: 160px;
  }

  .size_52 {
    width: 208px;
    height: 208px;
  }


  .main_img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
}

.wrapper:hover {
  .hover_block {
    display: block;
  }

  .hover_hidden {
    display: none;
  }
}
.w_full{width: 100%;}
.w_fit{width: fit-content;}
</style>
