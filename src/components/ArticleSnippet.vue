<script lang="ts" setup>
import Anchor from "./common/Anchor.vue";

type Props = {
  title: string;
  description: string;
  url: string;
  timeToRead?: number;
  timestamp?: Date;
  tags?: string[];
};

defineProps<Props>();
</script>

<template>
  <div class="zag-text zag-transition flex flex-col gap-3 pb-8">
    <Anchor ariaLabel="full article" class="text-xl" :url="url">
      {{ title }}
    </Anchor>
    <p class="">
      {{ description }}
    </p>
    <div
      class="zag-muted zag-transition flex justify-between items-center"
    >
      <p v-if="timestamp">
        {{ timestamp.toLocaleDateString() }}
      </p>
      <p v-if="timeToRead">
        {{ timeToRead }} min
      </p>
    </div>
  </div>
</template>
