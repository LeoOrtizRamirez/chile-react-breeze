<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Goutte\Client;
use Symfony\Component\HttpClient\HttpClient;

use App\Models\ContratistaContrato;
use App\Models\DocumentosProceso;
use App\Models\ClasificacionContrato;
use App\Models\CodigoCpv;

use Carbon\Carbon;
use Exception;

class Contrato extends Model
{
    use HasFactory;

    //1 Contrato tiene una Fuente, una Fuente tiene muchos Contratos
    public function fuente()
    {
        return $this->belongsTo('App\Models\Fuente', 'id_fuente_contract', 'id');
    }

    //1 Contrato tiene muchos Contratistas, un Contratista tiene un Contrato
    public function contratistas()
    {
        return $this->hasMany('App\models\ContratistaContrato', 'id_contrato', 'id');
    }

    //1 Contrato tiene muchas clasificaciones, una ClasificacionContrato tiene un Contrato
    public function clasificaciones()
    {
        return $this->hasMany('App\models\ClasificacionContrato', 'id_contrato', 'id');
    }

    function guardarDetalle($model)
    {
        $crawlerContrato = $this->getClient()->jsonRequest('POST', "https://www.mercadopublico.cl/BuscarLicitacion/Home/Buscar", [
            "codigoRegion" => "-1",
            "compradores" => [],
            "esPublicoMontoEstimado" => null,
            "fechaFin" => null,
            "fechaInicio" => null,
            "garantias" => null,
            "idEstado" => "5",
            "idOrden" => "1",
            "idTipoFecha" => [],
            "idTipoLicitacion" => "-1",
            "montoEstimadoTipo" => [0],
            "pagina" => 0,
            "proveedores" => [],
            "registrosPorPagina" => "10",
            "rubros" => [],
            "textoBusqueda" => preg_replace('/\s+/', '', $model->codigo_proceso)
        ]);

        $entidad_contratante  = $this->textValidation($crawlerContrato->filter(".responsive-resultado > div.lic-bloq-footer > div > div:nth-child(1) > p"));
        $dato_buscado = array('ID Licitación:', '');
        $dato_remplazo = array('', '');
        $id_licit  = $this->textValidation($crawlerContrato->filter(".responsive-resultado .lic-bloq-header .id-licitacion"));
        $codigo_proceso = str_replace($dato_buscado, $dato_remplazo, $id_licit);

        $objeto  = $this->textValidation($crawlerContrato->filter(".responsive-resultado .lic-block-body .col-md-12 p.text-weight-light"));

        $modalidad = "";
        $_modalidad = $this->textValidation($crawlerContrato->filter(".responsive-resultado .estado-lic strong:nth-child(1)"));
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

        $valor_texto  = $this->textValidation($crawlerContrato->filter(".responsive-resultado div:nth-child(3) > div.monto-dis.col-md-4 span:last-child"));
        $valor = null;
        if (str_replace('.', '', $valor_texto)) {
            $valor = (int) str_replace('.', '', $valor_texto);
        }

        $fecha_publicacion  = $this->textValidation($crawlerContrato->filter(".responsive-resultado div.lic-block-body > div:nth-child(3) > div:nth-child(2) > span"));
        $date = str_replace('/', '-', $fecha_publicacion);
        $fecha_publicacion = date('Y-m-d', strtotime($date));

        $fecha_cierre  = $this->textValidation($crawlerContrato->filter(".responsive-resultado div > div.lic-block-body > div:nth-child(3) > div:nth-child(3) > span.highlight-text.text-weight-light"));
        $date = str_replace('/', '-', $fecha_cierre);
        $fecha_cierre = date('Y-m-d', strtotime($date));


        $model->entidad_contratante = $entidad_contratante;
        $model->codigo_proceso = $codigo_proceso;
        $model->objeto = $objeto;
        $model->modalidad = $modalidad;
        $model->valor_texto = $valor_texto;
        $model->valor = $valor;
        $model->estado_agrupado = "";
        $model->numero_documentos = 0;
        $model->fecha_actualizacion_estado = now();
        $model->fecha_last_update_seguimiento = now();
        $model->fecha_publicacion = $fecha_publicacion;
        $model->fecha_vencimiento = $fecha_cierre;
        $model->save();


        /*Actualizar Detalle */
        $crawlerDetalle = $this->getClient()->request('GET', $model->link);

        $contratista_nombre = $this->textValidation($crawlerDetalle->filter('#lblFicha2Razon'));

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

        //echo "Estado:" . $estado_proceso . "\n";
        $model->save();

        //echo "Guardando Detalle del Contrato\n";

        $current_contratista = ContratistaContrato::where('id_contrato', $model->id)->first();
        if ($current_contratista) {
        } else {
            $contratista = new ContratistaContrato;
            $contratista->nombre = $contratista_nombre;
            $contratista->id_contrato = $model->id;
            $contratista->save();

            //echo "Guardando ContratistaContrato\n";
        }

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

            //echo "Licicodigos:\n";
            //print_r($array);

            foreach ($array as $key => $value) {
                if ($value != " ") {
                    $clasificacion_contrato = new ClasificacionContrato();
                    $clasificacion_contrato->id_contrato = $model->id;
                    $clasificacion_contrato->id_sub_categoria = $value;
                    $clasificacion_contrato->save();

                    //echo "Guardando ClasificacionContrato\n\n";
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

        //echo "Guardando Documentos\n\n";
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

            //echo ($e->getMessage());
        }
    }

    public function getEstadoProceso($img)
    {
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
