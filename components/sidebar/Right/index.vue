<template>
    <div class="flex flex-col">
        <SidebarRightPreviewCard title="What's happening">
            <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems" :key="whatsHappening.title">
                <div>
                    <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatsHappening.title }}</h2>
                    <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems" :key="whoToFollow">
                <div class="flex flex-row justify-between items-center p-2">

                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="whoToFollow.img" :alt="whoToFollow.name">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
                            <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
                        </div>
                    </div>
                    
                    <div class="flex h-full">
                        <button class="px-4 py-2 font-bold text-xs font-bold text-white dark:text-black bg-black dark:bg-white rounded-full">follow</button>
                    </div>
 
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
    </div>
</template>

<script setup>

const whatsHappeningItems = ref([
    {
        title: 'space',
        count: '18.1k views'
    },
    {
        title: 'biology',
        count: '28.3k views'
    },
    {
        title: 'math',
        count: '1222.3k views'
    }
])

const whoToFollowItems = ref([
    {
        name: 'John Doe',
        handle: '@FrontGenius',
        img: 'https://picsum.photos/200'
    },
    {
        name: 'Anna Smith',
        handle: '@BackendDeveloper',
        img: 'https://picsum.photos/200'
    },
    {
        name: 'Sam Larry',
        handle: '@BioEng',
        img: 'https://picsum.photos/200'
    }
])

</script>