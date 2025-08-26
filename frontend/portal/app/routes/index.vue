<template>
    <div>
        Home

        <button @click="requestPing">
            ping
        </button>
    </div>
</template>



<script setup lang="ts">
const client = useBackendClient();

async function requestPing() {
    const ping = await client.ping.query();

    console.log(ping);
    
    const pong = await client.pong.query();

    console.log(pong);
}
</script>
