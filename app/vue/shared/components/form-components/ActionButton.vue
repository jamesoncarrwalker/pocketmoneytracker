<template>

    <button type="button"
            @click="onClickEmit"
            class="action-button"
            :class="[inputClasses, (buttonIsActive ? 'active-button' : '')]"

    >{{ buttonValue }}</button>

</template>

<script>

    export default {
        data() {
            return{
                radioButtonValue:''
            }
        },
        props: {

            buttonValue: {
                type: String,
                required: true
            },

            inputClasses: {
                type: String,
                default: ""
            },

            emitListener: {
                type: String,
                default: ''
            },

            emitValue: {
                type: String,
                default: ''
            },

            buttonIsActive: {
                type: Boolean,
                default: false
            }


        },

        computed: {

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