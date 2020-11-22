<template>

    <button type="button"
            @click="onClickEmit"

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
                type: Array,
                default: []
            },

            emitListener: {
                type: String,
                default: ''
            },

            emitValue: {
                type: String,
                default: ''
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


<!--template: `-->
<!--<label class="radio">-->
    <!--<input type="radio" :value="label" :name="name" v-model="radioButtonValue">-->
    <!--<span>{{ label }}</span>-->
<!--</label>-->
<!--`,-->
<!--computed: {-->
<!--radioButtonValue: {-->
<!--get: function() {-->
<!--return this.value-->
<!--},-->
<!--set: function() {-->
<!--// Communicate the change to parent component so that selectedValue can be updated-->
<!--this.$emit("change", this.label)-->
<!--}-->
<!--}-->
<!--}-->
<!--});-->