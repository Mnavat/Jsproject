$(document).ready(function(){
    
    //Slider
    if(window.location.href.indexOf("home")>-1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1000
        });
    }

    //Posts
    if(window.location.href.indexOf("home")>-1){
        var posts = [
            {
                title: "Prueba de titulo 1",
                date: 'Publicado el día ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: "Prueba de titulo 2",
                date: 'Publicado el día ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: "Prueba de titulo 3",
                date: 'Publicado el día ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: "Prueba de titulo 4",
                date: 'Publicado el día ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                title: "Prueba de titulo 5",
                date: 'Publicado el día ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ];
        
        posts.forEach((item, index)=>{
            var post=`
                <article class="post">
                                <h2>${item.title}</h2>
                                <span class="date">${item.date}</span>
                                <p>${item.content}</p>

                                <a href="#" class="button-more">Leer más</a>

                            </article>
            `;
            $("#posts").append(post);
        });
    }


    //Selector de tema
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "CSS/green.css")
    });
    
    
    $("#to-red").click(function(){
        theme.attr("href", "CSS/red.css")
    });

    
    $("#to-blue").click(function(){
        theme.attr("href", "CSS/blue.css")
    });


    //Scroll arriba de la web
    $(".subir").click(function(){
        e.preventDefault();//previene que el link no haga su funcion fundamental (llevarte a otro sitio)

        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    //Login falso
    $("#login form").submit(function(){
        var form_name= $("#form_name").val();
        localStorage.setItem("form_name", form_name);

    });

    var form_name=localStorage.getItem("form_name");
    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p")
        about_parrafo.html("<br><strong> Bienvenido, "+ form_name + "</strong>");
        about_parrafo.append("<br> <a href='#' id='logout'> Cerrar sesión </a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });


    }
    
    //Acordeon
    if(window.location.href.indexOf("about")>-1){
        $("#acordeon").accordion();
    }

    //Reloj
    if(window.location.href.indexOf("reloj")>-1){
        setInterval(function(){
            var reloj= moment().format("h:mm:ss a");
            $("#reloj").html(reloj);
        }, 1000);
        
    }

    //Validación form - jquery
    if(window.location.href.indexOf("contact")>-1){
        
        $("form input[name=date]").datepicker({
            dateFormat: "dd-mm-yy"
        });

        $.validate({
            lang:"es",
            errorMessagePosition: "top",
            scrollToTopOnError: true
        });
    }

    })