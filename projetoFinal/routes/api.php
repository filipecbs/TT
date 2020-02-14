<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// ROTAS PARA USER
Route::get('listaUser', 'UserController@listUser'); //listar um user
Route::get('mostraUser/{id}', 'UserController@showUser');// mostrar um user específico



//ROTAS PARA LIVROS
Route::get('listaLivroTrue', 'LivroController@listLivroTrue');//listar livros com status true
Route::get('listaLivroFalse', 'LivroController@listLivroFalse');//listar livros com status false
Route::get('mostraLivro/{id}', 'LivroController@showLivro');//rota para mostrar uma livro específico
Route::get('mostraOferta/{id}', 'LivroController@mostraOferta');//rota para mostrar uma livro específico

// ROTAS PARA COMENTÁRIOS
Route::get('listaComentario', 'ComentarioController@listComentario'); //listar um Comentario
Route::get('mostraComentario/{id}', 'ComentarioController@showComentario');//mostrar um Comentario específico
Route::post('criaComentario', 'ComentarioController@createComentario');//criar um Comentario
Route::put('atualizaComentario/{id}', 'ComentarioController@updateComentario');//atualizar um Comentario específico
Route::delete('deletaComentario/{id}', 'ComentarioController@deleteComentario');//deletar um Comentario específico

// ROTAS PARA HISTÓRICO
Route::get('listaHistorico', 'HistoricoController@listHistorico'); // listar um Historico
Route::get('mostraHistorico/{id}', 'HistoricoController@showHistorico');//mostrar um Historico específico
Route::post('criaHistorico', 'HistoricoController@createHistorico');//para criar um Historico
Route::put('atualizaHistorico/{id}', 'HistoricoController@updateHistorico');//atualizar um Historico específico
Route::delete('deletaHistorico/{id}', 'HistoricoController@deleteHistorico');//deletar um Historico específico

// ROTAS PARA GENERO DE LIVROS
Route::get('listaGenero', 'HistoricoController@listGenero'); //listar um Genero
Route::get('mostraGenero/{id}', 'HistoricoController@showGenero');//mostrar um Genero específico
Route::post('criaGenero', 'HistoricoController@createGenero');//criar um Genero
Route::put('atualizaGenero/{id}', 'HistoricoController@updateGenero');//atualizar um Genero específico
Route::delete('deletaGenero/{id}', 'HistoricoController@deleteGenero');//deletar um Genero específico

//ROTAS PARA FUNCIONALIDADES
Route::post('register', 'API\PassportController@register');   //funcoes como essa que nao tem como ordernar
Route::post('login', 'API\PassportController@login');          //deixei sozinha como post para entender

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('logout', 'API\PassportController@logout');
    Route::get('listHistorico', 'API\PassportController@listHistorico');
    Route::post('getDetails', 'API\PassportController@getDetails')->middleware('isAdmin');
    Route::post('criaLivro', 'LivroController@createLivro');//criar um livro 
    Route::put('compraLivro/{livro_id}', 'API\PassportController@compraLivro');
    Route::put('atualizaLivro/{id}', 'LivroController@updateLivro');//atualizar um livro específico
    Route::delete('deletaUser/{id}', 'UserController@deleteUser')->middleware('isAdmin');//admin deleta um user específico
    Route::delete('deletaLivro/{id}', 'LivroController@deleteLivro');//deletar um livro específico
});

//ROTAS PARAS AS FOTOS DO USER
Route::get('showPhoto/{id}', 'UserController@showPhoto'); // mostra a foto do user
Route::get('downloadPhoto/{id}', 'UserController@downloadPhoto'); //Baixa a foto do user
Route::get('showPhoto/{livro_id}', 'LivroController@showPhoto'); // mostra a foto do livro
Route::get('downloadPhoto/{livro_id}', 'LivroController@downloadPhoto'); //Baixa a foto do livro
