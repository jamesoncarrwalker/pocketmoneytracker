<template>

    <div class="jumbotron text-center">

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {{ message }}
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {{ subMessage }}
        </div>

        <slot></slot>

    </div>


</template>

<script>

    export default {

        components: {

        },

        props: {

            message:{
                type: String,
                required: true
            },

            subMessage: {
                type: String,
                default: ""
            },

            type: {
                type: String,
                default: "message"
            }
        },

        methods: {

        },

        computed: {

        }
    }

</script>