function inserta_head_freelance() {
$('body nav.navbar:first').html("<div class='navbar-inner'><div class='container'><a class='brand' href='index.html'>Lancing Market</a><div class='nav-collapse'><ul class='nav'><li><a href='index.html'>Inici</a></li><li><a href='project_list.html'>Cercar projectes</a></li><li><a href='my_projects.html'>Els meus projectes</a></li><li><a href='#'>Sortir</a></li></ul><form class='navbar-search pull-left' action><input type='text' class='search-query span2' placeholder='Cerca'></form></div></div></div>");
}

function inserta_head_contractant() {
	$('body nav.navbar:first').html('<div class="navbar-inner"><div class="container"><a class="brand" href="index.html">Lancing Market</a><div class="nav-collapse"><ul class="nav"><li><a href="index.html">Inici</a></li><li><a href="afegir_projecte_form.html">Afegir projecte</a></li><li><a href="my_projects.html">Els meus projectes</a></li><li><a href="#">Sortir</a></li></ul><form class="navbar-search pull-left" action><input type="text" class="search-query span2" placeholder="Cerca"></form></div></div></div>');
}


function inserta_head_home() {
	$('body nav.navbar:first').html('<div class="navbar-inner"><div class="container"><a class="brand" href="index.html">Lancing Market</a><div class="nav-collapse"><ul class="nav"><li class="active"><a href="index.html">Inici</a></li><li><a href="register.html">Registrar-se</a></li><li><a href="login.html">Entrar</a></li></ul><form class="navbar-search pull-left" action><input type="text" class="search-query span2" placeholder="Cerca"></form></div></div></div>');
}

function inserta_footer() {
	$('footer').attr('style','background-color: #2C2C2C; color: white; height: 40px; border-radius: 3px;  padding-top: 8px; padding-right: 30px;');
	$('footer').html("<div style='float: right;'><p style='font-size: 20px;'>Lancing Market</p><p style='font-size: 9px; margin-top: -10px'>Copyright 2012</p></div>");
}
