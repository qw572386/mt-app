<template>
    <div class="page-changeCity">
        <el-row>
            <el-col>
                <iSelect />
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <iHot />
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <iCategroy />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import iSelect from '@/components/changeCity/iselect'
import iHot from '@/components/changeCity/hot'
import iCategroy from '@/components/changeCity/categroy'
export default {
    components: {
        iSelect,
        iHot,
        iCategroy
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/changecity/categroy.scss';
</style>