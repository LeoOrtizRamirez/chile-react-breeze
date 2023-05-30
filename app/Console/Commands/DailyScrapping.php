<?php

namespace App\Console\Commands;

use App\Models\ClasificacionContrato;
use App\Models\CodigoCpv;
use App\Models\SubCategoria;
use Illuminate\Console\Command;

//Scrapping
//composer require fabpot/goutte
use Goutte\Client;
use Symfony\Component\HttpClient\HttpClient;

use App\Models\Contrato;
use App\Models\ContratistaContrato;
use App\Models\DocumentosProceso;

use DateTime;
use DateTimeZone;  

use Carbon\Carbon;
use Exception;

class DailyScrapping extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:DailyScrapping';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Guardar información según ';

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
    public function handle()
    {

        
        $inicio = new DateTime('now', new DateTimeZone('America/Bogota'));
        $fin = new DateTime('now', new DateTimeZone('America/Bogota'));


        $fecha_inicio = $inicio->format('Y-m-d');
        $fecha_fin = $fin->format('Y-m-d');


        //$fecha_inicio = "2023-01-10";
        //$fecha_fin = "2023-01-10";

        $url = 'https://www.mercadopublico.cl/BuscarLicitacion/Home/Buscar/';

        //Obtener total de páginas
        $crawler = $this->getClient()->jsonRequest('POST', $url, [
            'idEstado' => '-1',
            'codigoRegion' => '-1',
            'idTipoLicitacion' => '-1',
            'fechaInicio' => $fecha_inicio,
            'fechaFin' => $fecha_fin,
            'pagina' => 1,
        ]);
        $num_paginas = $crawler->filter(".margin-bottom-xs .n-result")->text();
        echo (int) str_replace(".", "", $num_paginas) ."\n";
        $num_paginas = round(( str_replace(".", "", $num_paginas)  / 10) + 1);
        echo $num_paginas ."\n";
        //Fin total de páginas

        $pagina = 1;
        while ($pagina <= $num_paginas) {
            $crawler = $this->getClient()->jsonRequest('POST', $url, [
                'idEstado' => '-1',
                'codigoRegion' => '-1',
                'idTipoLicitacion' => '-1',
                'fechaInicio' => $fecha_inicio,
                'fechaFin' => $fecha_fin,
                'pagina' => $pagina,
            ]);
            //Fin paginador 

            //1. Extraccion de informacion de encabezados.
            $dataEncabezado = array();
            $crawler->filter(".responsive-resultado")->each(function ($node) use (&$dataEncabezado, &$pagina, &$num_paginas) {
                //Filtrar datos

                //construccion id_licitacion
                $dato_buscado = array('ID Licitación:', '');
                $dato_remplazo = array('', '');
                $id_licit  = $this->textValidation($node->filter(".lic-bloq-header .id-licitacion"));
                $codigo_proceso = str_replace($dato_buscado, $dato_remplazo, $id_licit);
                //Fin construccion codigo_proceso
                
                $estado_proceso  = $this->textValidation($node->filter(".lic-block-body .col-md-12 a"));
                $objeto  = $this->textValidation($node->filter(".lic-block-body .col-md-12 p.text-weight-light"));
                $valor_texto  = $this->textValidation($node->filter("div:nth-child(3) > div.monto-dis.col-md-4 span:last-child"));
                $valor = null;
                if(str_replace('.','',$valor_texto)){
                    $valor = (int) str_replace('.','',$valor_texto);
                }

                $modalidad = "";
                $_modalidad = $this->textValidation($node->filter(".estado-lic strong:nth-child(1)"));
                switch ($_modalidad) {
                    case 'L1':
                        $modalidad = "(L1) Licitación Pública Menor a 100 UTM";
                        break;
                    case 'LE':
                        $modalidad = "(LE) Licitación Pública Entre 100 y 1000 UTM";
                        break;
                    case 'LP':
                        $modalidad = "(LP) Licitación Pública igual o superior a 1.000 UTM e inferior a 2.000 UTM";
                        break;
                    case 'LQ':
                        $modalidad = "(LQ) Licitación Pública igual o superior a 2.000 UTM e inferior a 5.000 UTM";
                        break;
                    case 'LR':
                        $modalidad = "(LR) Licitación Pública igual o superior a 5.000 UTM";
                        break;
                    case 'LS':
                        $modalidad = "(LS) Licitación Pública Servicios personales especializados";
                        break;
                    case 'O1':
                        $modalidad = "(O1) Licitación Pública de Obras";
                        break;
                    case 'E2':
                        $modalidad = "(E2) Licitación Privada Inferior a 100 UTM";
                        break;
                    case 'CO':
                        $modalidad = "(CO) Licitación Privada igual o superior a 100 UTM e inferior a 1000 UTM";
                        break;
                    case 'B2':
                        $modalidad = "(B2) Licitación Privada igual o superior a 1000 UTM e inferior a 2000 UTM";
                        break;
                    case 'H2':
                        $modalidad = "(H2) Licitación Privada igual o superior a 2000 UTM e inferior a 5000 UTM";
                        break;
                    case 'I2':
                        $modalidad = "(I2) Licitación Privada Mayor a 5000 UTM";
                        break;
                    case 'O2':
                        $modalidad = "(O2) Licitación Privada de Obras";
                        break;
                    default:
                        $modalidad = "";
                        break;
                }

                //Formato fecha_publicacion               
                $fecha_publicacion  = $this->textValidation($node->filter("div.lic-block-body > div:nth-child(3) > div:nth-child(2) > span"));
                $date = str_replace('/', '-', $fecha_publicacion);
                $fecha_publicacion = date('Y-m-d', strtotime($date));
                //Fin

                //Formato fecha_cierre       
                $fecha_cierre  = $this->textValidation($node->filter("div > div.lic-block-body > div:nth-child(3) > div:nth-child(3) > span.highlight-text.text-weight-light"));
                $date = str_replace('/', '-', $fecha_cierre);
                $fecha_cierre = date('Y-m-d', strtotime($date));
                //Fin
                
                $entidad_contratante  = $this->textValidation($node->filter("div > div.lic-bloq-footer > div > div:nth-child(1) > p"));
                $cant_compras_efectuadas  = $this->textValidation($node->filter("div > div.lic-bloq-footer > div > div:nth-child(2) > span"));
                $cant_rec_no_oportuno  = $this->textValidation($node->filter("div > div.lic-bloq-footer > div > div:nth-child(3) > span"));
                $pie_licitacion  = $this->textValidation($node->filter("div > div.col-md-12.text-center.margin-top-md > em > small"));

                //construccion url detalle
                $dato_buscado = array("$.Busqueda.verFicha('", "')", 'http');
                $dato_remplazo = array('', '', 'https');
                $link  = $this->textValidation($node, 'div.lic-block-body > div:nth-child(1) > a', 'onclick');
                $link = str_replace($dato_buscado, $dato_remplazo, $link);
                //dd($codigo_proceso);
                //Fin construccion url detalle

                //Contratista
                $contratista_nombre = $this->textValidation($node->filter(".lic-bloq-footer .col-md-4:nth-child(1)"));     

                
                $model = new Contrato;
                $model->entidad_contratante = $entidad_contratante;
                $model->codigo_proceso = $codigo_proceso;
                $model->objeto = $objeto;
                $model->modalidad = $modalidad;
                $model->ubicacion = "";
                $model->link = $link;
                $model->valor = $valor;
                $model->valor_texto = $valor_texto;
                $model->estado_agrupado = "";
                $model->unspsc = 0;
                $model->unspsc_adicionales = "";
                $model->numero_documentos = 0;
                $model->fecha_actualizacion_estado = now();
                $model->fecha_last_update_seguimiento = now();
                $model->fecha_publicacion = $fecha_publicacion;
                $model->fecha_vencimiento = $fecha_cierre;
                $model->estado_proceso = $estado_proceso;
                $model->id_fuente_contract = 1; //FUENTE MP

                if($this->buscarContrato($model)){
                    echo "El contrato ya existe...\n";
                }else{
                    $model->save();
                    echo "Guardando Contrato - pagina: " . $pagina . " de: ".$num_paginas. "\n";
                    $this->guardarDetalle($model, $contratista_nombre);
                    //Fin - Actividad economica

                    /*
                    $contratista_contrato_id = $this->buscarContratistaContrato($contratista_nombre);
                    if($contratista_contrato_id){
                        $contratista = new ContratistaContrato;
                        $contratista->nombre = $contratista_nombre;
                        $contratista->id_contrato = $model->id;
                        $contratista->save();
                    }
                    */
                    
                }
                
            });
            $pagina++;
        }
        echo "Fin proceso...\n";
        //return redirect()->route('contratos')->with('info', 'Se realizó la búsqueda con éxito');
    }

    function buscarContrato($model){
        $contrato =  Contrato::where('link', $model->link)->first();
        if($contrato){
            return true;
        }else{
            return false;
        }
    }

    function buscarContratistaContrato($nombre){
        $contrato =  ContratistaContrato::where('nombre', $nombre)->first();
        if($contrato){
            return $contrato->id;
        }else{
            return false;
        }
    }

    function guardarDetalle($model, $contratista_nombre)
    {
        //sleep(3);
        $crawlerDetalle = $this->getClient()->request('GET', $model->link);
        //$model->modalidad = $this->textValidation($crawlerDetalle->filter('#lblFicha1Tipo'));
        
        $_departamento = $this->textValidation($crawlerDetalle->filter('#lblFicha2Region'));
        switch ($_departamento) {
            case 'Región de Arica y Parinacota':
                $departamento = "Arica y Parinacota";
                break;
            case 'Región de Tarapacá':
                $departamento = "Tarapacá";
                break;
            case 'Región de Antofagasta':
                $departamento = "Antofagasta";
                break;
            case 'Región de Atacama':
                $departamento = "Atacama";
                break;
            case 'Región de Coquimbo':
                $departamento = "Coquimbo";
                break;
            case 'Región de Valparaíso':
                $departamento = "Valparaíso";
                break;
            case 'Región Metropolitana de Santiago':
                $departamento = "Metropolitana de Santiago";
                break;
            case 'Región del Libertador General Bernardo O´Higgins':
                $departamento = "Libertador General Bernardo O'Higgins";
                break;
            case 'Región del Maule':
                $departamento = "Maule";
                break;
            case 'Región del Ñuble':
                $departamento = "Ñuble";
                break;
            case 'Región del Biobío':
                $departamento = "Biobío";
                break;
            case 'Región de la Araucanía':
                $departamento = "Araucanía";
                break;
            case 'Región de Los Ríos':
                $departamento = "Los Ríos";
                break;
            case 'Región de los Lagos':
                $departamento = "Los Lagos";
                break;
            case 'Región Aysén del General Carlos Ibáñez del Campo':
                $departamento = "Aysén del General Carlos Ibáñez del Campo";
                break;
            case 'Región de Magallanes y de la Antártica':
                $departamento = "Magallanes y de la Antártica";
                break;
            default:
                $departamento = "";
                break;
        }
        $municipio = $this->textValidation($crawlerDetalle->filter('#lblFicha2Comuna'));

        $ubicacion = "";
        if ($departamento != "") {
            if ($municipio == "No hay información") {
                $ubicacion = $departamento;
            } else {
                $ubicacion = $departamento . " : " . $municipio;
            }
        }
        $model->ubicacion = $ubicacion;


        $unspsc = $this->textValidation($crawlerDetalle->filter('#grvProducto_ctl02_lblCategoria'));

        if ($unspsc != "") {
            $model->unspsc = $unspsc;
        } else {
            $model->unspsc = 0;
        }

        $estado_proceso_fuente = $this->textValidation($crawlerDetalle->filter('#imgEstado'), '#imgEstado', 'src');

        if ($estado_proceso_fuente != "") {
            $estado_proceso = $this->getEstadoProceso($estado_proceso_fuente);
        } else {
            do {
                $crawlerDetalle = $this->getClient()->request('GET', $model->link);
                $estado_proceso_fuente = $this->textValidation($crawlerDetalle->filter('#imgEstado'), '#imgEstado', 'src');
                $estado_proceso = $this->getEstadoProceso($estado_proceso_fuente);
            } while ($estado_proceso_fuente == "");
        }
        $model->estado_proceso = $estado_proceso;
        echo "Estado:" . $estado_proceso . "\n";
        $model->save();
        echo "Guardando Detalle del Contrato\n";

        $current_contratista = ContratistaContrato::where('id_contrato', $model->id)->first();
        if ($current_contratista) {
        } else {
            $contratista = new ContratistaContrato;
            $contratista->nombre = $contratista_nombre;
            $contratista->id_contrato = $model->id;
            $contratista->save();
            echo "Guardando ContratistaContrato\n";
        }



        //Inicio - Actividad economica
        //Buscar o crear SubCategoria

        /* $actividad_economica = $this->textValidation($crawlerDetalle->filter('#grvProducto_ctl02_lblProducto'));
        $find_subcategoria = SubCategoria::where('nombre', $actividad_economica)->first();
        if ($find_subcategoria) {
            $subcategoria_id = $find_subcategoria->id;
            echo "Ya esta creada\n";
        } else {
            $subcategoria = new SubCategoria();
            $subcategoria->nombre = $actividad_economica;
            $subcategoria->tipo_categoria = 4; //Actividad Económica Scrapping
            $subcategoria->save();
            $subcategoria_id = $subcategoria->id;
            echo "Guardando SubCategoria\n";
        } */


        //Borrar las clasificaciones actuales si las tiene
        $clasificaciones = ClasificacionContrato::where('id_contrato', $model->id)->get();
        if ($clasificaciones) {
            foreach ($clasificaciones as $key => $clasificacion) {
                $clasificacion->delete();
            }
        }
        //Guardar nuevas clasificaciones
        $codigo_cpv = CodigoCpv::find($model->unspsc);
        if ($codigo_cpv) {
            $array = explode(",", $codigo_cpv->filtros); // Convert string to array
            $array = array_filter($array, 'strlen'); // Remove empty values
            echo "Licicodigos:\n";
            print_r($array);

            foreach ($array as $key => $value) {
                if ($value != "") {
                    $clasificacion_contrato = new ClasificacionContrato();
                    $clasificacion_contrato->id_contrato = $model->id;
                    $clasificacion_contrato->id_sub_categoria = $value;
                    $clasificacion_contrato->save();
                    echo "Guardando ClasificacionContrato\n\n";
                }
            }
        } 



        //Obtener enlace a documentos
        $url_documentos = $this->textValidation($crawlerDetalle->filter('#imgAdjuntos'), "#imgAdjuntos", "onclick");

        //Este código usa la preg_match()función con una expresión regular para extraer el texto entre la primera barra diagonal y la comilla simple de cierre. La URL resultante luego se imprime en la consola. Puede ajustar el patrón de expresión regular según sea necesario para que coincida con el formato específico de su valor de atributo.
        $regex = "/\/(.+?)'/";
        if (preg_match($regex, $url_documentos, $match)) {
            $targetUrl = $match[1];
        }

        //Eliminar documentos actuales
        $documentos_proceso = DocumentosProceso::where('id_contrato', $model->id)->get();
        foreach ($documentos_proceso as $key => $documento) {
            $documento->delete();
        }
        $this->guardarDocumentos($model->id, "https://www.mercadopublico.cl/Procurement/Modules/" . $targetUrl);
        echo "Guardando Documentos\n\n";
    }

    public function guardarDocumentos($id_contrato, $link)
    {
        $crawlerDocumentos = $this->getClient()->request('GET', $link);
        $query = parse_url($link, PHP_URL_QUERY);
        parse_str($query, $params);
        $form_enc = $params['enc'];
        $contador = 1;
        try {
            $view_state = $this->textValidation($crawlerDocumentos->filter('#__VIEWSTATE'), '#__VIEWSTATE', 'value');
            $view_state_generator = $this->textValidation($crawlerDocumentos->filter('#__VIEWSTATEGENERATOR'), '#__VIEWSTATEGENERATOR', 'value');
            $crawlerDocumentos->filter("table#DWNL_grdId tr:not(:first-child)")->each(function ($node) use (&$form_enc, &$view_state, &$view_state_generator, &$link, &$id_contrato, &$contador) {
                $contador += 1;

                $inicio_id = "0";
                if ($contador >= 10) {
                    $inicio_id = "";
                }
                $documentos_proceso = new DocumentosProceso;
                $documentos_proceso->ruta = $link;

                $namedoc = $this->textValidation($node->filter('#DWNL_grdId_ctl' . $inicio_id . $contador . '_File'));

                $documentos_proceso->namedoc = $namedoc;

                $extension = pathinfo($namedoc, PATHINFO_EXTENSION);
                $documentos_proceso->extension = $extension;

                $documentos_proceso->descripcion = $this->textValidation($node->filter('#DWNL_grdId_ctl' . $inicio_id . $contador . '_Description'));
                $documentos_proceso->size = $this->textValidation($node->filter('#DWNL_grdId_ctl' . $inicio_id . $contador . '_FileLength'));

                $fecha_fuente_string = $this->textValidation($node->filter('#DWNL_grdId_ctl' . $inicio_id . $contador . '_AtcDateTime'));
                $carbonDate = Carbon::createFromFormat('d-m-Y H:i:s', $fecha_fuente_string);
                $documentos_proceso->fecha_fuente = $carbonDate;

                $documentos_proceso->identificador_fuente = "";
                $documentos_proceso->id_contrato = $id_contrato;

                $json_adicional = [
                    "enc" => $form_enc,
                    "__VIEWSTATE" =>  $view_state,
                    "__VIEWSTATEGENERATOR" => $view_state_generator,
                    "x" => 'DWNL$grdId$ctl' . $inicio_id . $contador . '$search.x',
                    "y" => 'DWNL$grdId$ctl' . $inicio_id . $contador . '$search.y',
                ];
                $documentos_proceso->json_adicional = json_encode($json_adicional);
                $documentos_proceso->save();
            });
        } catch (Exception $e) {
            echo ($e->getMessage());
        }
    }

    public function getEstadoProceso($img){
        $estado_proceso = $img;
        switch ($img) {
            case '../../Includes/images/FichaLight/iconos_estados/publicadas.png':
                $estado_proceso =  "Publicada";
                break;
            case '../../Includes/images/FichaLight/iconos_estados/cerrada.png':
                $estado_proceso =  "Cerrada";
                break;
            case '../../Includes/images/FichaLight/iconos_estados/desierta.png':
                $estado_proceso =  "Desierta";
                break;
            case '../../Includes/images/FichaLight/iconos_estados/adjudicada.png':
                $estado_proceso =  "Adjudicada";
                break;
            case '../../Includes/images/FichaLight/iconos_estados/revocada.png':
                $estado_proceso =  "Revocada";
                break;
            case '../../Includes/images/FichaLight/iconos_estados/suspendida.png':
                $estado_proceso =  "Suspendida";
                break;
            default:
                $estado_proceso =  "Default";
                break;
        }
        return $estado_proceso;
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
