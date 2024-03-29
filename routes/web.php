<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CarpetasController;
use App\Http\Controllers\CodigoCpvController;
use App\Http\Controllers\ContratoController;
use App\Http\Controllers\GrupoFiltroUsuarioController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PerfileController;
use App\Http\Controllers\PlaneController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubCategoriaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NotaController;
use App\Http\Controllers\DocumentoProcesoController;
use App\Http\Controllers\PublicidadController;

use App\Models\Contrato;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    $contratosAll = Contrato::where('fecha_publicacion', date('Y-m-d'))
        ->count();
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'contratos' => $contratosAll,
    ]);
})->name('welcome');

Route::get('/nosotros', function () {
    return Inertia::render('Nosotros');
})->name('nosotros');

Route::get('/404', function () {
    return Inertia::render('Errors/Page404');
})->name('404');

Route::get('/contacto', function () {
    return Inertia::render('Contacto');
})->name('contacto');

Route::get('/funcionalidades', function () {
    return Inertia::render('Funcionalidades');
});

Route::get('/politicasp', function () {
    return Inertia::render('PoliticasP');
})->name('politicasp');

Route::get('/politicasc', function () {
    return Inertia::render('PoliticasC');
})->name('politicasc');

Route::get('/terminos-condiciones', function () {
    return Inertia::render('TerminosCondiciones');
});

Route::get('/terminos-condiciones2', function () {
    return Inertia::render('TerminosCondiciones2');
});

Route::get('/politicasp', function () {
    return Inertia::render('PoliticasP');
})->name('politicasp');

Route::get('/politicasc', function () {
    return Inertia::render('PoliticasC');
})->name('politicasc');

Route::get('/dashboard', [ContratoController::class, 'index']
)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';

Route::resource('posts', PostController::class)
    ->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);



Route::get('cliente/contratos', [ContratoController::class, 'index'])->middleware(['auth', 'verified'])->name('contratos.index');
Route::post('cliente/contratos/add_favorito', [ContratoController::class, 'addFavorito'])->middleware(['auth', 'verified']);
Route::post('cliente/contratos/delete_favorito', [ContratoController::class, 'deleteFavorito'])->middleware(['auth', 'verified']);
Route::post('cliente/contratos/add_papelera', [ContratoController::class, 'addPapelera'])->middleware(['auth', 'verified']);
Route::post('cliente/contratos/delete_papelera', [ContratoController::class, 'deletePapelera'])->middleware(['auth', 'verified']);
Route::post('cliente/contratos/get-info/{tipo}', [ContratoController::class, 'carpeta'])->middleware(['auth', 'verified']);
Route::get('cliente/contratos/get-info/{tipo}', [ContratoController::class, 'carpeta'])->middleware(['auth', 'verified']);
Route::get('cliente/contratos/detalle-contrato-2', [ContratoController::class, 'index'])->middleware(['auth', 'verified']);
Route::get('cliente/contratos/detalle-contrato-2', function () {
    return redirect('/cliente/contratos');
});
Route::post('cliente/contratos/detalle-contrato-2', [ContratoController::class, 'detalleConcurso'])->middleware(['auth', 'verified']);
Route::post('cliente/contratos/dispatch-actualizacion-proceso', [ContratoController::class, 'updateScrapping'])->middleware(['auth', 'verified']);
Route::post('contrato-visitado', [ContratoController::class, 'contratoVisitado'])->middleware(['auth', 'verified']);

/*Documentos*/
Route::post('cliente/contratos/documentos', [DocumentoProcesoController::class, 'getDocumentos'])->middleware(['auth', 'verified']);
Route::post('cliente/contratos/descargar-documentos', [DocumentoProcesoController::class, 'descargarDocumentos']);


Route::resource('planes', PlaneController::class)
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::get('/planes/satus/{id}', [PlaneController::class, 'status'])
    ->name('planes.status')
    ->middleware(['auth', 'verified']);

Route::get('/chile/planes', [PlaneController::class, 'chile'])
    ->name('planes.chile');

/* Route::resource('usuarios', UserController::class)
->middleware(['auth','verified']); */

Route::controller(UserController::class)->group(function () {
    Route::get('usuarios', 'index')->name('usuarios.index')->middleware(['auth', 'verified']);
    Route::post('usuarios', 'store')->name('usuarios.store')->middleware(['auth', 'verified']);
    Route::get('usuarios/create', 'create')->name('usuarios.create')->middleware(['auth', 'verified']);
    Route::get('usuarios/{usuario}', 'show')->name('usuarios.show')->middleware(['auth', 'verified']);
    Route::PATCH('usuarios/{usuario}', 'update')->name('usuarios.update')->middleware(['auth', 'verified']);
    Route::get('usuarios/{usuario:uuid}/delete', 'destroy')->name('usuarios.destroy')->middleware(['auth', 'verified']);
    Route::get('usuarios/{usuario:uuid}/edit', 'edit')->name('usuarios.edit')->middleware(['auth', 'verified']);
    Route::get('/usuarios/{idUsuario}/{pagina}/{estado}', [UserController::class, 'paginador']);
});

Route::get('/user-validate/{email}', [UserController::class, 'userValidate'])->name('user-validate');
Route::get('/code-validate/{email}/{verification_code}/', [UserController::class, 'codeValidate'])->name('code-validate');
Route::get('/verification-code', [MailController::class, 'sendVerificationCode'])->name('verification-code');

Route::get('/recuperar-contrasena', function (Request $request) {
    return Inertia::render('RecuperarContrasena', [
        'email' => $request->email,
        'token' => $request->token,
    ]);
})->name('recuperar-contrasena');

Route::get('/actualizar-contrasena', [UserController::class, 'actualizarContrasena'])->name('actualizarContrasena');

//Actividades economicas
Route::resource('actividades-economicas', SubCategoriaController::class)
    ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

Route::get('/actividades-economicas/{id}/delete', [SubCategoriaController::class, 'delete']);
Route::get('/actividades-economicas/paginate', [SubCategoriaController::class, 'paginate']);
Route::get('/actividades-economicas/filter/paginate', [SubCategoriaController::class, 'filterPaginate']);
Route::get('/actividades-economicas/json', [SubCategoriaController::class, 'indexJson'])->middleware(['auth', 'verified'])->name('indexJson');
//Localizaciones
Route::get('/localizacion', [SubCategoriaController::class, 'indexLocalizacion'])->middleware(['auth', 'verified'])->name('indexLocalizacion');
Route::get('/localizacion/json', [SubCategoriaController::class, 'indexJsonLocalizacion'])->middleware(['auth', 'verified'])->name('indexJsonLocalizacion');
Route::get('/localizacion/create', [SubCategoriaController::class, 'createLocalizacion'])->middleware(['auth', 'verified'])->name('createLocalizacion');
Route::get('/localizacion/{localizacion}/edit', [SubCategoriaController::class, 'editLocalizacion'])->middleware(['auth', 'verified'])->name('editLocalizacion');
Route::get('/localizacion/{localizacion}/delete', [SubCategoriaController::class, 'deleteLocalizacion'])->middleware(['auth', 'verified'])->name('deleteLocalizacion');
Route::delete('/localizacion/{localizacion}', [SubCategoriaController::class, 'destroyLocalizacion'])->middleware(['auth', 'verified'])->name('destroyLocalizacion');
Route::post('/localizacion', [SubCategoriaController::class, 'storeLocalizacion'])->middleware(['auth', 'verified'])->name('storeLocalizacion');
Route::PATCH('/localizacion/{localizacion}', [SubCategoriaController::class, 'updateLocalizacion'])->middleware(['auth', 'verified'])->name('updateLocalizacion');
Route::get('localizacion/popup/', [SubCategoriaController::class, 'popup']);
//Tipos de compras
Route::get('/tiposcompras', [SubCategoriaController::class, 'indexTiposCompras'])->middleware(['auth', 'verified'])->name('indexTiposCompras');
Route::get('/tiposcompras/json', [SubCategoriaController::class, 'indexJsonTiposCompras'])->middleware(['auth', 'verified'])->name('indexJsonTiposCompras');
Route::get('/tiposcompras/create', [SubCategoriaController::class, 'createTiposCompras'])->middleware(['auth', 'verified'])->name('createTiposCompras');
Route::get('/tiposcompras/{tiposcompras}/edit', [SubCategoriaController::class, 'editTiposCompras'])->middleware(['auth', 'verified'])->name('editTiposCompras');
Route::get('/tiposcompras/{tiposcompras}/delete', [SubCategoriaController::class, 'deleteTiposCompras'])->middleware(['auth', 'verified'])->name('deleteTiposCompras');
Route::delete('/tiposcompras/{tiposcompras}', [SubCategoriaController::class, 'destroyTiposCompras'])->middleware(['auth', 'verified'])->name('destroyTiposCompras');
Route::PATCH('/tiposcompras/{tiposcompras}', [SubCategoriaController::class, 'updateTiposCompras'])->middleware(['auth', 'verified'])->name('updateTiposCompras');
Route::post('/tiposcompras', [SubCategoriaController::class, 'storeTiposCompras'])->middleware(['auth', 'verified'])->name('storeTiposCompras');

Route::get('/tiposcompras1', [SubCategoriaController::class, 'storeTiposCompras1']);

Route::resource('perfiles', PerfileController::class)->middleware(['auth', 'verified']);

/*GrupoFiltroUsuario*/
Route::get('/cliente/grupo', [GrupoFiltroUsuarioController::class, 'index'])->middleware(['auth', 'verified']);
Route::get('/cliente/grupo/crear', [GrupoFiltroUsuarioController::class, 'create'])->middleware(['auth', 'verified']);
Route::get('/cliente/grupo/editar/{id}', [GrupoFiltroUsuarioController::class, 'edit'])->middleware(['auth', 'verified']);
Route::post('/cliente/grupo/update', [GrupoFiltroUsuarioController::class, 'update'])->middleware(['auth', 'verified']);
Route::post('/cliente/grupo/duplicar', [GrupoFiltroUsuarioController::class, 'copy'])->middleware(['auth', 'verified']);
Route::post('/cliente/grupo/destroy', [GrupoFiltroUsuarioController::class, 'delete'])->middleware(['auth', 'verified']);
Route::get('/cliente/grupo/subcategorias/{id}', [GrupoFiltroUsuarioController::class, 'subcategorias'])->middleware(['auth', 'verified']);
Route::post('/cliente/grupo/save-order', [GrupoFiltroUsuarioController::class, 'ordenar'])->middleware(['auth', 'verified']);
Route::post('grupo-filtro-usuarios/store', [GrupoFiltroUsuarioController::class, 'store'])->middleware(['auth', 'verified']);



/*Carpetas */
Route::get('/cliente/carpeta/administrar-carpetas', [CarpetasController::class, 'index'])->middleware(['auth', 'verified'])->name('carpetas.index');
Route::post('/cliente/carpeta/store', [CarpetasController::class, 'store'])->middleware(['auth', 'verified'])->name('carpetas.store');
Route::post('/cliente/carpeta/crear', [CarpetasController::class, 'crear'])->middleware(['auth', 'verified'])->name('carpetas.crear');
Route::post('/cliente/carpeta/update', [CarpetasController::class, 'update'])->middleware(['auth', 'verified'])->name('carpetas.update');
Route::post('/cliente/carpeta/eliminar', [CarpetasController::class, 'delete'])->middleware(['auth', 'verified'])->name('carpetas.delete');
Route::get('/cliente/carpeta/carpetas-user', [CarpetasController::class, 'getCarpetas'])->middleware(['auth', 'verified']);
Route::get('/cliente/carpeta/get-carpetas-paginadas', [CarpetasController::class, 'getCarpetasPaginadas'])->middleware(['auth', 'verified']);


Route::post('/cliente/carpeta/add-contrato', [CarpetasController::class, 'addContrato'])->middleware(['auth', 'verified']);
Route::post('/cliente/carpeta/delete-contrato', [CarpetasController::class, 'deleteContrato'])->middleware(['auth', 'verified']);


/*Notas */
Route::post('/cliente/notas/admin-note', [NotaController::class, 'create'])->middleware(['auth', 'verified']);
Route::get('/cliente/notas/get-notes', [NotaController::class, 'getNotes'])->middleware(['auth', 'verified']);
Route::post('/cliente/notas/eliminar', [NotaController::class, 'eliminar'])->middleware(['auth', 'verified']);
Route::post('/cliente/notas/actualizar', [NotaController::class, 'actualizar'])->middleware(['auth', 'verified']);
Route::post('/cliente/notas/ordenar-notas', [NotaController::class, 'ordenar'])->middleware(['auth', 'verified']);

Route::post('register/modal', [RegisteredUserController::class, 'registerModal'])->name('registerModal');


Route::get('/scrapping', [ContratoController::class, 'scrapping']);


Route::post('/cliente/difusion/store', [PublicidadController::class, 'store'])->middleware(['auth', 'verified']);
Route::post('/cliente/difusion/update', [PublicidadController::class, 'update'])->middleware(['auth', 'verified']);
Route::post('/cliente/difusion/destroy', [PublicidadController::class, 'delete'])->middleware(['auth', 'verified']);


/*Configuraciones*/
/*Mi Cuenta */
Route::get('/cliente/mi-cuenta', [UserController::class, 'miCuenta'])->middleware(['auth', 'verified'])->name('user.mi-cuenta');
Route::post('/cliente/mi-cuenta/update', [UserController::class, 'miCuentaUpdate'])->middleware(['auth', 'verified']);
Route::post('/cliente/mi-cuenta/cambio', [UserController::class, 'changePassword'])->middleware(['auth', 'verified'])->name('user.change-password');
Route::post('/cliente/mi-cuenta/upload-image-perfil', [UserController::class, 'uploadImagePerfil'])->middleware(['auth', 'verified']);
Route::post('/cliente/mi-cuenta/eliminar-imagen-perfil', [UserController::class, 'eliminarImagenPerfil'])->middleware(['auth', 'verified']);
/*Mi Cuenta*/


Route::get('/cliente/solicitud', [UserController::class, 'solicitud'])->middleware(['auth', 'verified']);
Route::get('/cliente/sugerencias', [UserController::class, 'sugerencias'])->middleware(['auth', 'verified']);
Route::get('/cliente/notificacion-correo', [UserController::class, 'notificacionCorreo'])->middleware(['auth', 'verified']);
Route::post('/cliente/notificacion-correo/save-notification', [GrupoFiltroUsuarioController::class, 'saveNotification'])->middleware(['auth', 'verified']);
Route::post('/cliente/get-licicodigos', [CodigoCpvController::class, 'getLicicodigos']);

Route::get('/logout', function () {
    Auth::logout();
    return redirect('/');
  });
