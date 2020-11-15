<template>
    <div class="container-fluid">

        <div class="row">
            <div class="container">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h5>THIS IS THE HEADER</h5>
                </div>
            </div>
        </div>

        <div class="row">

            <div class="container router-view-container">

                <router-view></router-view>

            </div>

        </div>

        <div class="row">
            <div class="container">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h5>THIS IS THE FOOTER</h5>
                </div>
            </div>
        </div>

    </div>


</template>

<script>

    export default {

        components: {

        },

        props: {

        },

        methods: {

        },
        computed: {

        }

    };
</script>