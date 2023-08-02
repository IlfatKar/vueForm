<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
  placeholder: string
  type: 'string' | 'number'
  error?: string
  modelValue: string
}>()
defineEmits(['update:modelValue'])

const isActive = ref<boolean>(false)

const onFocus = () => {
  isActive.value = true
}
const onBlur = () => {
  isActive.value = false
}

const isNumber = (e: KeyboardEvent) => {
  if (props.type === 'string' || Number.isInteger(+e.key)) {
    return true
  }
  e.preventDefault()
}
</script>

<template>
  <div class="input-wrapper">
    <label :class="{ error: error?.length > 0, active: modelValue || isActive }">
      <span class="placeholder">{{ props.placeholder }}</span>
      <input
        :type="props.type"
        @focus="onFocus"
        @blur="onBlur"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :value="modelValue"
        @keypress="isNumber"
      />
    </label>
    <span class="error-text" v-if="props.error?.length">{{ props.error }}</span>
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

label {
  display: flex;
  padding: 6px 16px;
  border-radius: 4px;
  border: 1px solid var(--colors-gray-l);
  background: #00000000;
  position: relative;
  width: 100%;
  flex-direction: column-reverse;
  height: 56px;
  transition: all .25s ;
}

label:hover {
  background: #fff;
  box-shadow:
    0px 4px 56px 0px rgba(51, 51, 51, 0.16),
    0px 4px 4px 0px rgba(51, 51, 51, 0.04);
}

label.error, label.error input {
  background: var(--colors-red--girl);
}

label .placeholder {
  font-size: var(--paragraph-2);
  color: var(--colors-gray-k);
  position: absolute;
  top: calc(50% - 14px / 2);
  transition: all 0.25s;
}

label.active .placeholder {
  font-size: var(--paragraph-3);
  top: 6px;
}
.error-text {
  color: var(--colors-red);
  margin-top: 8px;
}

input {
  border: none;
  outline: none;
  height: 24px;
  transition: all .25s ;

}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
