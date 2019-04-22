<template>
  <el-table :data="cartData" style="width: 980px">
    <el-table-column label="项目" prop="name" width="532">
    </el-table-column>
    <el-table-column label="单价" prop="price" width="132">
    </el-table-column>
    <el-table-column label="数量" width="212">
      <template slot-scope="scope">
        <el-input-number v-model="scope.row.count" :min="0"></el-input-number>
      </template>
    </el-table-column>
    <el-table-column label="总价">
      <template slot-scope="scope">
          {{ scope.row.price * scope.row.count }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
//   data() {
//     return {
//       cartData: [
//         {
//           name: "王小虎",
//           price: 100,
//           count: 1
//         }
//       ]
//     };
//   }
    props: {
        cartData: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>