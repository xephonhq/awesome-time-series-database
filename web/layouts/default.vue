<template>
    <div>
        <nav class="ui blue basic inverted icon top fixed menu">
            <a class="item logo">
                <!-- TODO: how to use assets in nuxt -->
                <img src="assets/logo.png">
            </a>
            <div class="right menu">
                <!-- TODO: real client side search -->
                <a class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search  ...">
                        <i class="search link icon"></i>
                    </div>
                </a>
                <a class="item">
                    <div class="ui primary button"><i class="user icon"></i>at15</div>
                </a>
            </div>
        </nav>
        <div class="main-container">
            <nuxt></nuxt>
        </div>
    </div>
</template>

<style scoped>
    .main-container {
        margin-top: 70px;
    }
</style>