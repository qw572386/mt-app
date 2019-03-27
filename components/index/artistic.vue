<template>
    <div  class="m-istyle">
        <dl @mouseover="over">
            <dt>有格调</dt>
            <dd kind="all" :class="{active:kind==='all'}">全部</dd>
            <dd kind="part" :class="{active:kind==='part'}">约会聚餐</dd>
            <dd kind="spa" :class="{active:kind==='spa'}">丽人SPA</dd>
            <dd kind="movie" :class="{active:kind==='movie'}">电影演出</dd>
            <dd kind="travel" :class="{active:kind==='travel'}">品质出游</dd>
        </dl>
        <ul class="ibody">
            <li v-for="item in curr" :key="item.name">
                <el-card :body-style="{padding: '0px'}" shadow="never">
                    <img :src="item.img" class="image" alt="">
                    <ul class="cbody">
                        <li class="title">{{item.name}}</li>
                        <li class="pos"><span>{{item.pos}}</span></li>
                        <li class="price">￥<em>{{item.price}}</em><span>/起</span></li>
                    </ul>
                </el-card>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            kind: 'all',
            list: {
                all: [
                    {
                        name: '老巷子花园烤串（总店）',
                        pos: '花园串串套餐，建议4人使用',
                        price: '38',
                        img: '//p0.meituan.net/mogu/50c775bda3ec3c371e4ed320b5cfe53393356.jpg@368w_208h_1e_1c',
                        url:'//abc.com'
                    },
                    {
                        name: '大董（王府井店）',
                        pos: '烤鸭单人午市套餐',
                        price: '300',
                        img: '//p0.meituan.net/msmerchant/f0f72ccd78773cc5a0156b1c00d588c0961404.jpg@368w_208h_1e_1c',
                        url:'//abc.com'
                    },
                    {
                        name: '中影国际影城(丰台千禧街店)',
                        pos: '免押金,可停车,有情侣座,儿童票,可刷卡,休息区,中国巨幕厅,60帧厅',
                        price: '19.9',
                        img: '//p1.meituan.net/deal/__29661209__6853522.jpg@368w_208h_1e_1c',
                        url:'//abc.com'
                    }
                ],
                part: [
                    {
                        name: '川成元麻辣香锅（国瑞购物中心店）',
                        pos: '3-4人套餐',
                        price: '277',
                        img: '//p1.meituan.net/msmerchant/bc0162f65d8d7aca67d9f11d1aabe8b453292.jpg@368w_208h_1e_1c',
                        url:'//abc.com'
                    },
                    {
                        name: '川成元麻辣香锅（国瑞购物中心店）',
                        pos: '3-4人套餐',
                        price: '277',
                        img: '//p1.meituan.net/msmerchant/bc0162f65d8d7aca67d9f11d1aabe8b453292.jpg@368w_208h_1e_1c',
                        url:'//abc.com'
                    },
                    {
                        name: '川成元麻辣香锅（国瑞购物中心店）',
                        pos: '3-4人套餐',
                        price: '277',
                        img: '//p1.meituan.net/msmerchant/bc0162f65d8d7aca67d9f11d1aabe8b453292.jpg@368w_208h_1e_1c',
                        url:'//abc.com'
                    }
                ],
                spa: [
                    {
                        name: '米娜造型（良乡店）',
                        pos: '米娜造型（良乡店）',
                        price: '198',
                        img: '//p1.meituan.net/merchantpic/19d7ad2f8e4753a50442226610af0074506930.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                        url:'//abc.com'
                    },
                    {
                        name: '米娜造型（良乡店）',
                        pos: '米娜造型（良乡店）',
                        price: '198',
                        img: '//p1.meituan.net/merchantpic/19d7ad2f8e4753a50442226610af0074506930.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                        url:'//abc.com'
                    },
                    {
                        name: '米娜造型（良乡店）',
                        pos: '米娜造型（良乡店）',
                        price: '198',
                        img: '//p1.meituan.net/merchantpic/19d7ad2f8e4753a50442226610af0074506930.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
                        url:'//abc.com'
                    }
                ],
                movie: [
                    {
                        name: '金泉港IMAX国际影城',
                        pos: '免押金,可停车,有情侣座,儿童票,有WIFI,IMAX厅,杜比全景声厅',
                        price: '19.9',
                        img: '//p0.meituan.net/poi/c2b482474377fc31a8311f46055f40b0442616.png@368w_208h_1e_1c',
                        url:'//abc.com'
                    },
                    {
                        name: '金泉港IMAX国际影城',
                        pos: '免押金,可停车,有情侣座,儿童票,有WIFI,IMAX厅,杜比全景声厅',
                        price: '19.9',
                        img: '//p0.meituan.net/poi/c2b482474377fc31a8311f46055f40b0442616.png@368w_208h_1e_1c',
                        url:'//abc.com'
                    },
                    {
                        name: '中影国际影城(丰台千禧街店)',
                        pos: '免押金,可停车,有情侣座,儿童票,可刷卡,休息区,中国巨幕厅,60帧厅',
                        price: '19.9',
                        img: '//p1.meituan.net/deal/__29661209__6853522.jpg@368w_208h_1e_1c',
                        url:'//abc.com'
                    }
                ],
                travel: [
                    {
                        name: '速8艺术酒店',
                        pos: '新客超值优惠',
                        price: '298',
                        img: '//p1.meituan.net/tdchotel/4a55391b41bb44d53f90f9880d3f85aa3063529.jpg@368w_208h_1e_1c',
                        url:'//abc.com'
                    },
                    {
                        name: '速8艺术酒店',
                        pos: '新客超值优惠',
                        price: '298',
                        img: '//p1.meituan.net/tdchotel/4a55391b41bb44d53f90f9880d3f85aa3063529.jpg@368w_208h_1e_1c',
                        url:'//abc.com'
                    },
                    {
                        name: '速8艺术酒店',
                        pos: '新客超值优惠',
                        price: '298',
                        img: '//p1.meituan.net/tdchotel/4a55391b41bb44d53f90f9880d3f85aa3063529.jpg@368w_208h_1e_1c',
                        url:'//abc.com'
                    }
                ] 
            }
        }
    },
    computed: {
        curr() {
            return this.list[this.kind];
        }
    },
    methods: {
        over(e) {
            const dom = e.target;
            const tag = dom.tagName.toLowerCase();
            const self = this;
            if (tag === 'dd') {
                this.kind = dom.getAttribute('kind')
            }
        }
    },
}
</script>

<style lang="scss">
    @import '@/assets/css/index/artistic.scss';
</style>