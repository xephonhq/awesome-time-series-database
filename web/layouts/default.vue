<template>
    <div>
        <nav class="ui blue basic inverted icon top fixed menu">
            <a class="item">
                <i class="sidebar icon"></i>
            </a>
            <nuxt-link to="/" class="item">
                Awesome Time Series Database
            </nuxt-link>
            <div class="right menu">
                <!-- TODO: real client side search -->
                <a class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search  ...">
                        <i class="search link icon"></i>
                    </div>
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
        margin-bottom: 20px;
    }
</style>