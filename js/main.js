$(document).ready(function () { 

    /*fecha*/

    $("#fecha").append(moment().format("dddd")+" "+ moment().date()+" "+"de"+" "+moment().format("MMMM")+"del"+moment().format("YYYY"));

                        //este codigo se saca del plugin de google (el slider) tiene varias opciones y funciones revisar las opciones en la documentación
                        //solo se arregla la propiedad al json
        $('.bxslider').bxSlider({  //'.bxslider puede ser cualquier nombre, pero el que va después del parentesis
          auto:true,                //si es el metodo, que recibe un json con las opciones
          pager:true,
          mode: 'fade',             
          captions: false,
          slideWidth: 1200,
          responsibe: true,
          speed:500,
          infiniteLoop:true,

        });

        
          
        //post
        var posts=[ //un array de json
            { //el primer json con sus 3 parametros
                url:'https://carpetapedagogica.com/img/articulos/presidentes-del-peru.jpg',
                title:'Cuarto Golpe de estado en 1 año',
                content:'"Fiscalía ratifica que Pedro Chávarry "habría perturbado diligencias"',
                autor:'Any Brazo'
                
            },
            { //el segundo json con sus 3 parametros
                url:'https://i.ytimg.com/vi/-bnYu_pKEeA/maxresdefault.jpg',
                title:'¿Vuelven los jueces drogadictos?',
                content: 'Nunca imaginé que se pueda tener perfil de demente y ser juez',
                autor:'Elsa Paso' 
            },
            {          
                url:'https://i1.wp.com/wipy.tv/wp-content/uploads/2020/10/andrew-garfield-y-tobey-maguire-apareceran-en-spider-man-3.jpg?fit=1000%2C600&ssl=1',
                title:'Tobey Maguire confirma para Spider Man',
                content:'Ya firmó, ver video.',
                autor:'Nomen Ttira'
            },
            {   
                url:'https://i.ytimg.com/vi/OAJyzcPNE0k/hqdefault.jpg',
                title:'SE BUSCA TRABAJO',
                content:'Buen empleado altamente desempleado busca trabajo, contacteme.',
                autor:'S. Carrión'
            },
            {   url:'https://i1.wp.com/marxismo.mx/wp-content/uploads/2020/03/images-4.jpeg?fit=689%2C445&ssl=1',
                title:'En serio, denme trabajo.',
                content:'Si al presidente, sepa que puedo asesorarlo, tambien soy ingeniero',
                autor:'Elza Patón'
            },
            {
                url:'https://peru21.pe/resizer/n0wX03U7vAlb_vet9Jgd_qvYD1o=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/PQ5UN3QSY5C6ZABTZI5H7JNA64.jpg',
                title:'Chupetín Presidente',
                content:'Con un intenso plan de gobierno igual de incumplible que el del resto',
                autor:'Elza Patón'
            }
        ];
            
//nota estás son plantillas , se a reemplazado el formato del articulo por sus respectivas variables y se hace el foreach
//para luego añadirla en el div de post
        posts.forEach((item,index) => {
            var post= `
            <article class="post"> 
                        <img class="ipost" src= "${item.url}"></img>
                        <h2 id="post">${item.title}</h2> 
                        <p>${item.content}</p>
                        <p>${item.autor}</p>
                        <a href="https://www.revenuenetworkcpm.com/evtev5mbw1?key=8d7e3f25b31a5f944026b813a77a14ae" class="button-more">leer más</a>
                    </article>  
            `;      
            //console.log(post);
            $("#post").append(post);
      
        });

       
      });
      