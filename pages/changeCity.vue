<template>
    <div class="page-changeCity">
        <el-row>
            <el-col>
                <iSelect />
            </el-col>
        </el-row>
        <el-row>
            <el-col></el-col>
        </el-row>
        <el-row>
            <el-col></el-col>
        </el-row>
    </div>
</template>

<script>
import iSelect from '@/components/changeCity/iselect'
export default {
    components: {
        iSelect
    }
}
</script>

<style lang="scss" scoped>

</style>