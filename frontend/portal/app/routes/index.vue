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

    const res = await client.parametrized.query({
        param1: "apples",
        param2: 3,
    });
    
    console.log(res.message);
}
</script>
