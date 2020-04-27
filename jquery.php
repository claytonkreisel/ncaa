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
                    <p class="links-holder"><a href="/ncaa/">React Version</a> | <a href="/ncaa/vue.php">Vue Version</a> | <a  class="active" href="/ncaa/jquery.php">jQuery Version</a></p>
                    <p>Below is an app built in jQuery. It pulls information from an API using the popular <code>$.ajax()</code> command that populates the DOM of an app when the app first loads. After that it uses an array filter to filter school elements based on the schools attributes when text is typed into the search bar. Give it a try!!!</p>
                    <p>To look at the code for this <a target="_blank" href="https://github.com/claytonkreisel/ncaa">project</a> visit its <a target="_blank" href="https://github.com/claytonkreisel/ncaa">GitHub</a></p>
                </section>
                <div id="app-holder" class='app-holder is-loading'>
                    <img src="assets/img/loading.gif" />
                    <div class="searchbar" style="display: none;">
                        <input name="college-search" placeholder="Type a name..." type="text" value="">
                    </div>
                    <div class="schools" style="display: none;"></div>
                </div>
            </div>
        </div>
        <div id="schoolTemplate" style="display: none">
            <div class="school">
                <h1 data-handle="name"></h1>
                <ul>
                    <li><span>Mascot:</span><span data-handle="mascot" class="values"></span></li>
                    <li class="two-lines"><span>Conference:</span><span data-handle="conference" class="values"></span></li>
                    <li><span>Division:</span><span class="values" data-handle="division"></span></li>
                    <li><span>City:</span><span class="values" data-handle="city"></span></li>
                    <li><span>State:</span><span class="values" data-handle="state"></span></li>
                </ul>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.0.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
        <script type="text/javascript" src="assets/js/jquery/index.min.js"></script>
    </body>
</html>
