<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Return_;
use Redirect;
use Illuminate\Support\Facades\Hash;

use App\Mail\VerificationCodeMailable;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{

    public function index()
    {

        $pagina = 1;
        $usuariosAll = User::all()->count();

        $usuarios = User::take(30)
            ->get();

        return Inertia::render('Usuarios/Index', [
            'usuarios' => $usuarios,
            'totalUsuarios' =>  $usuariosAll,
            'pagina' => $pagina

        ]);
    }


    public function paginador($idUsuario, $page, $estado)
    {
        $pagina = 1;
        $usuariosAll = User::all()->count();

        if ($estado == "next") {
            $usuarios = User::where('id', '>', $idUsuario)
                ->limit(30)
                ->get();
            $pagina = $pagina + $page;
        } else {
            $usuarios = User::where('id', '<', $idUsuario)
                ->orderBy('id', 'desc')
                ->limit(30)
                ->get()
                ->reverse();
            $usuarios = $usuarios->values();
            $pagina = $page - $pagina;
        }


        return Inertia::render(
            'Usuarios/Index',
            [
                'usuarios' => $usuarios,
                'totalUsuarios' =>  $usuariosAll,
                'pagina' => $pagina
            ]
        );
    }





    public function create()
    {
        return Inertia::render('Usuarios/Crear', []);
    }

    public function edit(User $usuario)
    {
        return Inertia::render('Usuarios/Editar', [
            'usuario' => $usuario
        ]);
    }


    public function store(Request $request)
    {
        //validamos los datos
        $validated = $request->validate([
            'nombre_completo' => 'required|string|max:100',
            'identificacion' => 'required',
            'celular' => 'required|max:15',
            'indicativo' => 'required|max:20',
            'telefono_fijo' => '|max:10',
            'direccion' => 'required|max:50',
            'ciudad' => 'required|max:50',
            'pais' => 'required|max:50',
            'idplan' => 'required',
            'email' => ['required', 'email', 'unique:users,email'],
            'fecha_vencimiento' => 'required',
            'estado' => 'required',
            'origen' => 'required|max:30',
            'password' => 'required|string|max:255',

            'nombre_empresa' => 'required|max:50',
            'nit_empresa' => 'required|max:20',
            'pais_empresa' => 'required|max:50',
            'ciudad_empresa' => 'required|max:50',
            'direccion_empresa' => 'required|max:50',
            'celular_empresa' => 'required|max:15',
            'indicativo_empresa' => 'required|max:20',
            'telefono_fijo_empresa' => 'required|max:15',
            'email_facturacion_empresa' => 'required', 'email',
            'descripcion_actividad_economica' => 'required|max:30',
        ]);

        User::Create($validated);

        return redirect(route('usuarios.index'));
    }



    public function update(Request $request, User $usuario)
    {
        $validated = $request->validate([
            'nombre_completo' => 'required|string|max:100',
            'identificacion' => 'required',
            'celular' => 'required|max:15',
            'indicativo' => 'required|max:20',
            'telefono_fijo' => '|max:10',
            'direccion' => 'required|max:50',
            'ciudad' => 'required|max:50',
            'pais' => 'required|max:50',
            'idplan' => 'required',
            'email' => ['required', 'email'],
            'fecha_vencimiento' => 'required',
            'estado' => 'required',
            'origen' => 'required|max:30',
            'password' => 'required|string|max:255',

            'nombre_empresa' => 'required|max:50',
            'nit_empresa' => 'required|max:20',
            'pais_empresa' => 'required|max:50',
            'ciudad_empresa' => 'required|max:50',
            'direccion_empresa' => 'required|max:50',
            'celular_empresa' => 'required|max:15',
            'indicativo_empresa' => 'required|max:20',
            'telefono_fijo_empresa' => 'required|max:15',
            'email_facturacion_empresa' => 'required', 'email',
            'descripcion_actividad_economica' => 'required|max:30',


        ]);
        $usuario->update($validated);
        return redirect(route('usuarios.index'));
    }


    public function destroy(User $usuario)
    {
        $usuario->delete();
        return redirect(route('usuarios.index'));
    }

    public function userValidate($email)
    {
        $response = "";
        $user = User::where('email', $email)->first();
        if (is_null($user)) {
            $response = 'Failed';
        } else {
            //Guardar codigo de verificacion
            $verification_code = rand(0000, 9999);
            $user->verification_code = $verification_code;
            $user->save();
            //Enviar correo electronico con codigo
            $mail = new VerificationCodeMailable($user);
            Mail::to($user->email)->send($mail);
            
            $response = 'Success';
        }
        return json_encode($response);
    }

    public function codeValidate($email, $verification_code)
    {
        $user = User::where('email', $email)
            ->where('verification_code', $verification_code)
            ->first();

        if (is_null($user)) {
            $response = 'Failed';
        } else {
            $response = 'Success';
        }
        return json_encode($response);
    }

    public function actualizarContrasena(Request $request){
        $response = "";
        $user = User::where('email', $request->email)->first();
        if($user){
            $user->password = Hash::make($request->password);
            $user->save();
            $response = "Se actualizó la contraseña";
        }else{
            $response = "El usuario no existe";
        }
        return redirect(route('welcome'));
        
    }
}
