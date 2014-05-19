$(function() {
	atualizarColaboradores();
	setInterval(atualizarColaboradores, 5000);
});

function atualizarColaboradores(){
	//Busca de colaboradores no Json
	var $url = "http://digitalbox.cc/colaboradores.json?callback=jsonCallback";  
	
	$.ajax({
	   type: 'GET',
	    url: $url,
	    async: false,
	    jsonpCallback: 'jsonCallback',
	    contentType: "application/json",
	    dataType: 'jsonp',
	    success: function(data) {             
			$resultado = data.colaboradores;
			$( ".colaborador" ).remove();

			$.each( $resultado, function( key, value ) {
				// console.info( value.nome );
				$colaborador =  '<div class="col-md-4 text-center colaborador">' +
						            '<div class="portfolio-item">' +
						                '<img class="img-portfolio img-responsive" src="img/'+value.foto+'">' +
						                '<h4>'+value.nome+'</h4>' +
						                '<p>'+value.cargo+'</p>' +
						            '</div>' +                 
						    	'</div>';

				$( ".colaboradores .container").append( $colaborador );
			});
		},         
		error: function(xhr, status, error) { 
			alert('Error !!: ' + error); 
		},
	});	
}