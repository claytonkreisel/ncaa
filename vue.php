<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>NCAA School Lookup App</title>
        <link href="assets/css/main.min.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
        <div id="root">
            <div class="container">
                <section class="instructions">
                    <h1>NCAA School Information Lookup</h1>
                    <p class="links-holder"><a href="/ncaa/">React Version</a> | <a href="/ncaa/vue.php" class="active">Vue Version</a> | <a href="/ncaa/jquery.php">jQuery Version</a></p>
                    <p>Below is an app built in Vue.js. It pulls information from an API using the popular <code>fetch()</code> command that populates the state of an app when the app first loads. After that it uses an array filter to filter school components based on the schools name when text is typed into the search bar. Give it a try!!!</p>
                    <p>To look at the code for this <a target="_blank" href="https://github.com/claytonkreisel/ncaa">project</a> visit its <a target="_blank" href="https://github.com/claytonkreisel/ncaa">GitHub</a></p>
                </section>
                <div id="app-holder" v-bind:class="{'is-loading': isLoading}" class='app-holder'>
                    <img src="assets/img/loading.gif" v-if="isLoading" />
                    <searchbar v-model="search" v-if="!isLoading"></searchbar>
                    <div class="schools">
                        <school
                            v-for="school in showSchools"
                            v-bind:key="school.id"
                            v-bind:name="school.name"
                            v-bind:color="school.color"
                            v-bind:mascot="school.mascot"
                            v-bind:conference="school.conference"
                            v-bind:division="school.division"
                            v-bind:city="school.city"
                            v-bind:state="school.state"
                        ></school>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
        <script type="text/javascript" src="assets/js/vue/index.min.js"></script>
    </body>
</html>
