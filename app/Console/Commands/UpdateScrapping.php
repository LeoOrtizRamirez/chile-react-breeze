<?php

namespace App\Console\Commands;

use App\Models\ClasificacionContrato;
use App\Models\SubCategoria;
use Illuminate\Console\Command;

//Scrapping
//composer require fabpot/goutte
use Goutte\Client;
use Symfony\Component\HttpClient\HttpClient;

use App\Models\Contrato;
use App\Models\ContratistaContrato;

class UpdateScrapping extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:UpdateScrapping {link}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Actualizar estado';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(){
        $model =  Contrato::where('link', $this->argument('link'))->first();
        if($model){
            $this->actulizarEstado($model);
        }else{
            echo "No se encontro el contrato\n";
        }
    }

    function actulizarEstado($model)
    {
        $crawlerDetalle = $this->getClient()->request('GET', $model->link);
        //dd($crawlerDetalle);
        $estado_proceso = $this->textValidation($crawlerDetalle->filter('#imgEstado'), '#imgEstado', 'src');

        switch ($estado_proceso) {
            case '../../Includes/images/FichaLight/iconos_estados/publicadas.png':
                $model->estado_proceso =  "Publicada";
                break;
            case '../../Includes/images/FichaLight/iconos_estados/cerrada.png':
                $model->estado_proceso =  "Cerrada";
                break;
            case '../../Includes/images/FichaLight/iconos_estados/desierta.png':
                $model->estado_proceso =  "Desierta";
                break;
            case '../../Includes/images/FichaLight/iconos_estados/adjudicada.png':
                $model->estado_proceso =  "Adjudicada";
                break;
            case '../../Includes/images/FichaLight/iconos_estados/revocada.png':
                $model->estado_proceso =  "Revocada";
                break;
            case '../../Includes/images/FichaLight/iconos_estados/suspendida.png':
                $model->estado_proceso =  "Suspendida";
                break;
            default:
                # code...
                break;
        }
        $model->save();
        echo "Guardando Detalle del Concurso\n";
    }

    public function getClient()
    {
        $client = HttpClient::create(array(
            'headers' => array(
                'Host' => 'www.mercadopublico.cl',
                'Content-Type' => 'application/json',
            ),
        ));
        return new Client($client);
    }

    function textValidation($node, $selector = "", $attr = null)
    {
        if ($selector == "") {
            if (is_null($attr)) {
                if ($node->count()) {
                    return $node->text();
                } else {
                    return "";
                }
            } else {
                if ($node->count()) {
                    if ($node->attr($attr) == "") {
                        return $node->attr("href");
                    }
                    return $node->attr($attr);
                } else {
                    return "";
                }
            }
        }

        if (!is_null($attr)) {
            if ($node->filter($selector)->count()) {
                return $node->filter($selector)->attr($attr);
            } else {
                return '';
            }
        }

        if ($node->filter($selector)->count()) {
            return $node->filter($selector)->text();
        } else {
            return '';
        }
    }
}
