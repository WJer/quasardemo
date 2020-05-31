<template>
    <div class="table column">
        <!-- 表头 -->
        <div class="table_header row">
            <q-markup-table class="table_left">
                <thead>
                    <tr>
                        <template v-for="col in getColumns">
                            <th class="text-left" v-if="col.isStaticLeft">{{col.header}}</th>
                        </template>
                    </tr>
                </thead>
            </q-markup-table>
            <q-scroll-area class="col" :visible="false" horizontal :thumb-style="getThumbStyle" ref="headMainScroller">
                <q-markup-table class="table_main">
                    <thead>
                        <tr>
                            <template v-for="col in getColumns">
                                <th class="text-left" v-if="!col.isStaticLeft && !col.isStaticRight">{{col.header}}</th>
                            </template>
                        </tr>
                    </thead>
                </q-markup-table>
            </q-scroll-area>
            <q-markup-table class="table_right">
                <thead>
                    <tr>
                        <template v-for="col in getColumns">
                            <th class="text-left" v-if="col.isStaticRight">{{col.header}}</th>
                        </template>
                    </tr>
                </thead>
            </q-markup-table>
        </div>
        <!-- 主体 -->
        <div class="col">
            <q-scroll-area style="height:100%;" :thumb-style="getThumbStyle">
                <div class="row">
                    <q-markup-table class="table_left">
                        <thead>
                            <tr v-for="item in getData">
                                <template v-for="col in getColumns">
                                    <th class="text-left" v-if="col.isStaticLeft">{{item[col.id]}}</th>
                                </template>
                            </tr>
                        </thead>
                    </q-markup-table>
                    <q-scroll-area class="col" horizontal :thumb-style="getThumbStyle" @scroll="onMainScroll">
                        <q-markup-table class="table_main">
                            <thead>
                                <tr v-for="item in getData">
                                    <template v-for="col in getColumns">
                                        <th class="text-left" v-if="!col.isStaticLeft && !col.isStaticRight">{{item[col.id]}}</th>
                                    </template>
                                </tr>
                            </thead>
                        </q-markup-table>
                    </q-scroll-area>
                    <q-markup-table class="table_right">
                        <thead>
                            <tr v-for="item in getData">
                                <template v-for="col in getColumns">
                                    <th class="text-left" v-if="col.isStaticRight">{{item[col.id]}}</th>
                                </template>
                            </tr>
                        </thead>
                    </q-markup-table>
                </div>
            </q-scroll-area>
        </div>
    </div>
</template>
<script>
import {
    QMarkupTable,
    QScrollArea
} from 'quasar'
export default {
    props: {
        columns: Array,
        list: Array,
        page: Object
    },
    components: {
        QMarkupTable,
        QScrollArea
    },
    computed: {
        getColumns() {
            return this.columns.filter(item => item.isShow)
        },
        getData() {
            const {
                pageTotal,
                pageIndex
            } = this.getPage;
            return this.list.slice((pageIndex-1) * pageTotal, pageIndex * pageTotal);
        },
        getThumbStyle() {
            return {
                right: '2px',
                bottom: '2px',
                borderRadius: '5px',
                backgroundColor: '#027be3',
                width: '5px',
                height: '5px',
                opacity: 0
            }
        },
        getPage() {
            return this.page;
        }
    },
    methods: {
        onMainScroll(info) {
            this.$refs.headMainScroller.setScrollPosition(info.horizontalPosition);
        }
    },
}
</script>
<style lang="scss" scoped>
    .table {
        height: 100%;
        width: 100%;
        &_header {
            /deep/ .q-table__card {
                margin-top: 5px;
            }
        }
        /deep/ .q-table__card {
            border-radius: 0;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        }
        /deep/ td,
        /deep/ th {
            min-width: 80px;
        }
    }
    .table_left,
    .table_right {
        z-index: 1;
    }
</style>