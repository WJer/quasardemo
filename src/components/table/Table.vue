<template>
    <div class="cus-table column">
        <div class="cus-table_header">
            <BaseFilter :columns="dColumns" @setTable="setTable"></BaseFilter>
        </div>
        <div class="cus-table_main col">
            <BaseTable :columns="dColumns" ref="table" :list="dDatalist" :page="dPage"></BaseTable>
        </div>
        <div class="cus-table_footer">
            <BaseFoot :page="dPage" @setTable="setTable"></BaseFoot>
        </div>
    </div>
</template>
<script>
import BaseTable from './BaseTable'
import BaseFilter from './Filter'
import BaseFoot from './Foot'
import { columns, datalist } from './mock.js';

const PageTotal = 20; //页大小
export default {
    name: 'CusTable',
    components: {
        BaseTable,
        BaseFilter,
        BaseFoot
    },
    data() {
        return {
            dColumns: columns,
            dDatalist: datalist,
            dPage: {
                pageCount: Math.ceil(datalist.length / PageTotal),
                pageIndex: 1,
                pageTotal: PageTotal
            }
        }
    },
    methods: {
        setTable(sets) {
            // this.$refs.table.setTable(columns);
            if(sets.columns) {
                this.dColumns = sets.columns;
            }
            if(sets.page) {
                this.dPage = Object.assign(this.dPage, sets.page);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .cus-table {
        height: 100%;
    }
</style>
