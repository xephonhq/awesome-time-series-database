<template>
    <div>
        <nav class="ui black basic inverted icon top fixed menu">
            <a class="item">
                <i class="sidebar icon"></i>
            </a>
            <nuxt-link to="/" class="item">
                Awesome Time Series Database
            </nuxt-link>
            <a class="icon item" href="https://github.com/xephonhq/awesome-time-series-database" target="_blank">
                <i class="ui large github icon"></i>
            </a>
            <!--<div class="right menu">-->
                <!--&lt;!&ndash; TODO: real client side search &ndash;&gt;-->
                <!--<a class="item">-->
                    <!--<div class="ui icon input">-->
                        <!--<input type="text" placeholder="Search  ...">-->
                        <!--<i class="search link icon"></i>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</div>-->
        </nav>
        <div class="main-container">
            <nuxt></nuxt>
        </div>
        <!--<div class="ui black inverted footer">-->
            <!--<div class="ui center aligned container">-->
                <!--<a href="https://github.com/xephonhq/awesome-time-series-database" target="_blank">-->
                    <!--<i class="ui large github icon"></i>-->
                <!--</a>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<style scoped>
    .main-container {
        margin-top: 70px;
        margin-bottom: 20px;
    }
</style>