<template>

    <li    @click="onClickEmit"
            :class="getActiveClass"
            >
        <a href="#">{{ title }}</a>

    </li>


</template>

<script>

    export default {
        props: {
            title:{
                type: String,
                required: true
            },

            emitListener: {
                type: String,
                default: ''
            },

            emitValue: {
                type: String,
                default: ''
            },
            active: {
                type: Boolean,
                default:false
            }
        },

        computed: {
            getActiveClass() {
                return this.active ? ' active ' : '';
            }
        },

        methods: {

            onClickEmit() {

                if(this.emitValue == '' || this.emitListener == '') {
                    return;
                }

                this.$emit('update:' + this.emitListener, this.emitValue);

            }
        }
    }

</script>