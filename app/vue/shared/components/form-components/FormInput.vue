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
               :value="inputValue"
               @input="onInputEmit($event.target.value)"
               :placeholder="placeHolder"
        />
    </div>

</template>

</template>
<script>


    export default {
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
            inputValue: {
                required:true
            },
            emitListener: {
                type: String,
                default: ''
            }

        },

        methods: {
            onInputEmit(emitValue) {
                if(this.emitListener == '' || typeof this.emitListener == 'undefined') {
                    return;
                }

                this.$emit('update:' + this.emitListener, emitValue);

            }
        },
        computed: {
            getInputId() {
                return this.inputId != '' ? this.inputId : this._uid;
            }
        }


    };
</script>