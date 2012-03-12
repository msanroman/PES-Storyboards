function inserta_head_freelance() {
$('body nav.navbar:first').html("<div class='navbar-inner'><div class='container'><a class='brand' href='index.html'>Online freelancing</a><div class='nav-collapse'><ul class='nav'><li><a href='index.html'>Inici</a></li><li><a href='project_list.html'>Cercar projectes</a></li><li><a href='my_projects.html'>Els meus projectes</a></li><li><a href='#'>Sortir</a></li></ul><form class='navbar-search pull-left' action><input type='text' class='search-query span2' placeholder='Cerca'></form></div></div></div>");
}

function inserta_head_contractant() {
	$('body nav.navbar:first').html('<div class="navbar-inner"><div class="container"><a class="brand" href="index.html">Online freelancing</a><div class="nav-collapse"><ul class="nav"><li><a href="index.html">Inici</a></li><li class="active"><a href="afegir_projecte_form.html">Afegir projecte</a></li><li><a href="my_projects.html">Els meus projectes</a></li><li><a href="#">Sortir</a></li></ul><form class="navbar-search pull-left" action><input type="text" class="search-query span2" placeholder="Cerca"></form></div></div></div>');
}