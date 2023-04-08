<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CarpetasController;
use App\Http\Controllers\ContratoController;
use App\Http\Controllers\GrupoFiltroUsuarioController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PerfileController;
use App\Http\Controllers\PlaneController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubCategoriaController;
use App\Http\Controllers\UserController;

use App\Models\Contrato;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::resource('contratos', ContratoController::class)
    ->only(['index'])
    ->middleware(['auth', 'verified']);


Route::get('/contratos/{idContrato}/{pagina}/{estado}', [ContratoController::class, 'paginador']);
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
Route::post('grupo-filtro-usuarios/store', [GrupoFiltroUsuarioController::class, 'store'])->middleware(['auth', 'verified']);


/*Carpetas */
Route::get('/cliente/carpeta/administrar-carpetas', [CarpetasController::class, 'index'])->middleware(['auth', 'verified']);

Route::POST('register/modal', [RegisteredUserController::class, 'registerModal'])->name('registerModal');
