<template>
    <div class="m-iselect">
        <span class="name">按省份选择:</span>
        <el-select v-model="pvalue" placeholder="省份">
            <el-option
            v-for="item in province"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-select v-model="cvalue" :disabled="!city.length" placeholder="城市">
            <el-option
            v-for="item in city"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-select
            v-model="input"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入城市中文或拼音"
            :remote-method="querySearchAsync"
            @change="changeCity"
            :loading="loading">
            <el-option
            v-for="item in queryCities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    data() {
        return {
            pvalue: '',
            province: [],
            cvalue: '',
            city: [],
            input: '',
            cities: [],
            queryCities: [],
            loading: false
        }
    },
    watch: {
        pvalue: async function(newPValue) {
            let self = this;
            self.cvalue = ''
            let { status, data: { city } } = await self.$axios.get(`/geo/province/${newPValue}`)
            if (status === 200) {
                self.city = city.map(item => {
                    return {
                        value: item.id,
                        label: item.name
                    }
                })
            }
        }
    },
    async mounted() {
        let self = this;
        let { status, data: { province } } = await self.$axios.get(`/geo/province`)
        if (status === 200) {
            self.province = province.map(item => {
                return {
                    value: item.id,
                    label: item.name
                }
            })
        }
    },
    methods: {
        querySearchAsync: _.debounce(async function(query) {
            let self = this;
            self.loading = true;
            if (self.cities.length) {
                self.loading = false;
                self.queryCities = self.cities.filter(item => item.label.indexOf(query) > -1)
            } else {
                let {status, data: { city }} = await self.$axios.get('/geo/city')
                self.loading = false
                if (status === 200) {
                    self.cities = city.map(item => {
                        return {
                            value: item.id,
                            label: item.name
                        }
                    })
                    self.queryCities =  self.cities.filter(item => item.label.indexOf(query) > -1)
                } else {
                    self.queryCities =  []
                }
            }
        }, 200),
        changeCity(value) {
            let self = this;
            const cityObj = _.find(self.cities, { value: value[0] });
            if (cityObj) {
                self.$store.commit('geo/setPosition', { city: cityObj.label || '' })
                self.$router.push('/')
            }
            
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/changecity/iselect.scss';
</style>