<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\DocumentosProceso;
use Exception;
use Illuminate\Http\Request;
use GuzzleHttp\Client;

class DocumentoProcesoController extends Controller
{
    public function getDocumentos(Request $request)
    {
        $documentos_procesos = DocumentosProceso::where('id_contrato', $request->contrato_id)->get();
        return $documentos_procesos;
    }

    public function descargarDocumentos(Request $request)
    {
        try {
            $documento = $request->documento;
            $json_adicional = json_decode($documento["json_adicional"], true);
            
            $client = new Client([
                'headers' => [
                    'Content-Type' => 'application/x-www-form-urlencoded'
                ]
            ]);
            $urlencoded = [
                '__VIEWSTATE' => $json_adicional['__VIEWSTATE'],
                $json_adicional['x'] => '1',
                $json_adicional['y'] => '1'
            ];
            $url = "https://www.mercadopublico.cl/Procurement/Modules/Attachment/ViewAttachment.aspx?enc=" . urlencode($json_adicional['enc']);
            $response = $client->post($url, [
                'form_params' => $urlencoded
            ]);
            $fileData = $response->getBody()->getContents();
            $fileName = $documento["namedoc"];
            $headers = [
                'Content-Type' => 'application/octet-stream'
            ];
            return response($fileData, 200, $headers)->header('Content-Disposition', 'attachment; filename="' . $fileName . '"');
        } catch (Exception $e) {
            print_r($e->getMessage());
        }
    }
}
