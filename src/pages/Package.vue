<template>
    <div style="padding: 20px;">
        <div>
            <q-btn color="white" text-color="black" label="列设置"></q-btn>
        </div>
        <br>
        <div>
            <cus-btn color="white" text-color="black" label="列设置"></cus-btn>
        </div>
    </div>
</template>
<script>
import {
    QBtn
} from 'quasar'
import CusBtn from '../components/button'
export default {
    name: 'PagePackage', //因为是基础组件
    components: {
        QBtn,
        CusBtn
    }
}
</script>

