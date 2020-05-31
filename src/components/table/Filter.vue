<template>
    <div class="filter">
        <q-btn outline size="sm" color="primary" text-color="blue-grey-4" label="列设置">
            <q-menu>
                <div style="width: 230px;">
                    <q-scroll-area style="height:350px">
                        <q-list>
                            <q-item clickable v-close-popup v-for="col in dColumns" :key="col.id">
                                <q-item-section>
                                    <div class="filter_column-set row">
                                        {{col.header}}
                                        <div class="col column" style="vertical-align: middle;">
                                            <div>
                                                <q-toggle v-model="col.isShow" />
                                                是否展示
                                            </div>
                                            <div>
                                                <q-toggle v-model="col.isStaticLeft" :disable="!col.isShow || col.isStaticRight"/>
                                                是否固定左侧
                                            </div>
                                            <div>
                                                <q-toggle v-model="col.isStaticRight" :disable="!col.isShow || col.isStaticLeft"/>
                                                是否固定右侧
                                            </div>
                                        </div>
                                    </div>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-scroll-area>
                </div>
            </q-menu>
        </q-btn>
    </div>
</template>
<script>
import {
    QBtn,
    QMenu,
    QList,
    QItem,
    QToggle,
    QScrollArea,

    ClosePopup
} from 'quasar'
export default {
    props: {
        columns: Array
    },
    data() {
        return {
            // dColumns: JSON.parse(JSON.stringify(this.columns))
            dColumns: this.columns
        }
    },
    components: {
        QBtn,
        QMenu,
        QList,
        QItem,
        QToggle,
        QScrollArea
    },
    directives: {
        ClosePopup
    },
    methods: {
        onSure() {
            this.$emit('setTable', {
                columns: this.dColumns
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .filter {
        padding: 10px;
        &_column-set {
            align-items: center;
        }
    }
    .btn-groups {
        padding: 10px;
    }
</style>
