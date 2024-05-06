<template>
    <div class="p-3 hover:bg-gray-100 border-b cursor-pointer dark:hover:bg-dim-300" :class="wrapperClasses">
        <slot></slot>
    </div>
</template>

<script setup> 
const { defaultTransition, twitterBorderColor} = useTailwindConfig()

const wrapperClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)

</script>