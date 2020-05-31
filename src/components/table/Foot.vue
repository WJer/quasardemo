<template>
    <div class="footer">
        <q-pagination :boundary-links="true" v-model="dPageIndex" :max="page.pageCount" />
    </div>
</template>
<script>
import {
    QPagination
} from 'quasar'

export default {
    props: {
        page: Object
    },
    data() {
        return {
            dPageIndex: this.page.pageIndex,
            dPageTotal: this.page.pageTotal
        }
    },
    components: {
        QPagination
    },
    watch: {
        dPageIndex(val) {
            this.$emit('setTable', {
                page: {
                    pageIndex: val
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .footer {
        padding: 10px;
    }
</style>
