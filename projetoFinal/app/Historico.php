<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Livro;

class Historico extends Model
{
    public function user(){
        return $this->belongsTo('App\User',"user_id");
    }

    public function createHistorico(Livro $request){
        //$historico = new Historico;

        $this->name = $request->name;
        $this->genero = $request->genero;
        $this->autor = $request->autor;
        $this->user_id = $request->comprador_id;
        //$historico->data = $request->data;
        //$historico->save();
    
        return response()->json([$this]);
    }

}