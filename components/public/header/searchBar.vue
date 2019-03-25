<template>
    <div class="search-panel">
        <el-row class="m-header-search">
            <el-col class="left" :span="3">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col class="center" :span="15">
                <div class="wrapper">
                    <el-input v-model="search" placeholder="搜索商家或地点" @input="input" @focus="focus" @blur="blur"/>
                    <button class="el-button el-button--primary">
                        <i class="el-icon-search" />
                    </button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlace" :key="index">{{item}}</dd>
                    </dl>
                    <dl class="searchList" v-if="isSearch">
                        <dd v-for="(item, index) in searchList" :key="index">{{item}}</dd>
                    </dl>
                </div>
                <p class="suggset">
                    <a href="#">故宫博物院</a>
                    <a href="#">故宫博物院</a>
                    <a href="#">故宫博物院</a>
                    <a href="#">故宫博物院</a>
                </p>
                <ul class="nav">
                    <li>
                        <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/" class="business">商家入驻</nuxt-link>
                    </li>
                </ul>
            </el-col>
            <el-col class="right" :span="6">
                <ul class="security">
                    <li>
                        <i class="refund">
                            <p class="txt">随时退</p>
                        </i>
                    </li>
                    <li>
                        <i class="single">
                            <p class="txt">不满意免单</p>
                        </i>
                    </li>
                    <li>
                        <i class="overdue">
                            <p class="txt">过期退</p>
                        </i>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isFocus: false,
            search: '',
            searchList: ['火锅', '麻辣烫', '烤鱼', '番茄炒蛋'],
            hotPlace: ['番茄牛腩', '小炒肉', '故宫博物馆', '番茄炒蛋']
        }
    },
    computed: {
        isHotPlace() {
            return this.isFocus && !this.search 
        },
        isSearch() {
            return this.isFocus && this.search
        }
    },
    methods: {
        focus() {
            this.isFocus = true
        },
        blur() {
            let self = this;
            setTimeout(() => {
                this.isFocus = false
            }, 200)
        },
        input() {
            console.log('input')
        }
    },
}
</script>

<style scoped>

</style>