<template>
    <div class="m-nav">
        <ul class="nav">
            <li class="list">
                <nuxt-link to="/my">我的美团</nuxt-link>
                <dl>
                    <dt to="/order">我的订单</dt>
                    <dt to="/order">我的收藏</dt>
                    <dt to="/order">抵用券</dt>
                    <dt to="/order">账户设置</dt>
                </dl>
            </li>
            <li>
                <nuxt-link to="/order">手机app</nuxt-link>
            </li>
            <li class="list bd">
                <nuxt-link to="/center">商家中心</nuxt-link>
                <dl>
                    <dt to="/userCenter">登录商家中心</dt>
                    <dt to="/coop">我想合作</dt>
                    <dt to="/wap">免费手机开店</dt>
                    <dt to="/kaipiao">商家申请开票</dt>
                </dl>
            </li>
            <li class="list site">
                <nuxt-link to="/site">网站导航</nuxt-link>
                <div class="subContainer">
                    <dl class="hotel">
                        <dt>酒店旅游</dt>
                        <dd>国际机票</dd>
                        <dd>国际机票</dd>
                        <dd>国际机票</dd>
                        <dd>国际机票</dd>
                        <dd>国际机票</dd>
                        <dd>国际机票</dd>
                    </dl>
                    <dl class="food">
                        <dt>吃美食</dt>
                        <dd>烤鱼</dd>
                        <dd>特色小吃</dd>
                        <dd>烧烤</dd>
                        <dd>烧烤</dd>
                        <dd>烧烤</dd>
                    </dl>
                    <dl class="movie">
                        <dt>看电影</dt>
                        <dd>热映电影</dd>
                        <dd>热映电影</dd>
                        <dd>热映电影</dd>
                        <dd>热映电影</dd>
                        <dd>热映电影</dd>
                    </dl>
                    <dl class="app">
                        <dt>手机应用</dt>
                        <dd>
                            <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                                <img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
                            </a>
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>