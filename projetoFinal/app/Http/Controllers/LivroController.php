<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Livro;
use App\Historico;
use App\User;
use Auth;

class LivroController extends Controller
{
    public function createLivro(Request $request){
        $user = Auth::user();
        $livro = new Livro;

        $livro->name = $request->name;
        $livro->genero = $request->genero;
        $livro->autor = $request->autor;
        $livro->preco = $request->preco;
        $livro->resumo = $request->resumo;
        $livro->estado = $request->estado;
        $livro->info = $request->info;
        $livro->vendedor_id = $user->id;

        if($request->photo) {
            $file = $request->file('photo');
            $filename = 'livro_'. uniqid(). '.' .$file->getClientOriginalExtension();
            $path = $file->storeAs('public',$filename);
            $livro->photo = 'http://localhost:8000/storage/'.$filename;
        }
        $livro->save();
        return response()->json($livro);
    }

    public function listLivroTrue(){
        $livro = Livro::all()->where('status',true);
        return $livro;
        return response()->json($livro);
    }

    public function listLivroFalse(){
        $livro = Livro::all()->where('status',false);
        return $livro;
        return response()->json($livro);
    }


    public function showLivro($id){
        $livro = Livro::findOrFail($id);
        return response()->json([$livro]);
    }

    public function updateLivro(Request $request, $id){
        $livro = Livro::find($id);

        if($livro){
            if($request->name){
                $livro->name = $request->name;
            }
            if($request->genero){
                $livro->genero = $request->genero;
            }
            if($request->autor){
                $livro->autor = $request->autor;
            }
            if($request->preco){
                $livro->preco = $request->preco;
            }
            if($request->resumo){
                $livro->resumo = $request->resumo;
            }
            if($request->estado){
                $livro->estado = $request->estado;
            }
            if($request->info){
                $livro->info = $request->info;
            }
            $livro->save();
            return response()->json([$livro]);
        }
        else{
            return response()->json(['Este livro não existe']);
        }
    }

    public function deleteLivro($id){
        $livro = Livro::findOrFail($id);
        Storage::delete($livro->photo);
        Livro::destroy($id);
        return response()->json(['Livro Deletado']);
    }

    public function showPhoto($id){        //Essa função mostra a foto do livro para o usuário pelo front
        $user = Livro::findOrFail($id);      //permitindo o download caso queira
        return Storage::download($livro->photo);

    }

    public function mostraOferta($id){
        $user = User::findOrFail($id);
        $livros = $user->livros()->where('vendedor_id', $user->id)->where('status', 1)->get();
        return response()->json([$livros]);
    }






}
