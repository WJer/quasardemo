<script>
import {
    QBtn
} from 'quasar'
export default {
    extends: QBtn,
    methods: {
        click() {
            alert('扩展一下');
            QBtn.methods.click.apply(this);
        }
    }
}
</script>