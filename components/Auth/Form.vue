<template>
    <div class="pt-5 space-y-6">
        <h2>{{ data.username }}</h2>
        <UIInput v-model="data.username" label="Username" placeholder="@username" />
        <UIInput label="Password" placeholder="********" type="password" v-model="data.password" />
    </div>
</template>

<script setup>

const data = reactive({
    password: '',
    username: ''
})

</script>