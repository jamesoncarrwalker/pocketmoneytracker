<template>
    <div :class="formGroup">
        <label v-if="inputLabel != ''"
               :for="getInputId">{{ inputLabel }}</label>

        <input class="form-control"
               :type="inputType"
               :class="inputClasses"
               :name="inputName"
               :id="getInputId"
               :autocomplete="autoComplete"
               v-model="inputValue"
               @keyup="onClickEmit"
               @change="onClickEmit"
               :placeholder="placeHolder"
        />
    </div>

</template>

<script>


    export default {
        data() {
            return{
                inputValue:''
            }
        },
        components: {

        },

        props: {
            formGroup:{
                type:String,
                default: 'form-group'
            },
            inputType:{
                type: String,
                required: true
            },
            inputName:{
                type: String,
                required: true
            },
            inputId: {
                type: String,
                default: ''
            },
            inputLabel: {
                type: String,
                default: ''
            },
            inputClasses: {
                type: String,
                default: ''
            },
            autoComplete: {
                type: Boolean,
                default:true
            },
            placeHolder: {
                type: String,
                default: 'e.g. Lorem ipsum dorem latet'
            },
            //this isn't going to work as it's in the data above for the v-model but we wnat to emit this value
            defaultInputValue: {
                type: String,
                default: ''
            },
            emitListener: {
                type: String,
                default: ''
            }

        },

        methods: {
            onClickEmit() {
                if(this.emitListener == '') {
                    return;
                }

                this.$emit('update:' + this.emitListener, this.inputValue);

            }
        },
        computed: {
            getInputId() {
                return this.inputId != '' ? this.inputId : this._uid;
            }
        }


    };
</script>