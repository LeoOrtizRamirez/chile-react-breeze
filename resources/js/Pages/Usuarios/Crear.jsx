import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import { useForm, Head } from '@inertiajs/inertia-react'


const Crear = ({ auth }) => {

    const { data, setData, post, processing, reset, errors } = useForm({
        nombre_completo: '',
        identificacion: ''  ,
        celular :'',
        indicativo :'',
        telefono_fijo :'',
        direccion :'',
        ciudad :'',
        pais :'',
        idplan :'',
        email :'',
        fecha_vencimiento :'',
        estado :'',
        origen :'',
        password :'',

        nombre_empresa :'',
        nit_empresa :'',
        pais_empresa :'',
        ciudad_empresa :'',
        direccion_empresa :'',
        celular_empresa :'',
        indicativo_empresa :'',
        telefono_fijo_empresa :'',
        email_facturacion_empresa :'',
        descripcion_actividad_economica :'',
      })

    
    const submit = (e) => {        
        e.preventDefault()
        //console.log(data)
        post(route('usuarios.store'), {onSuccess: ()=> reset() })
    }



  return (
    <AuthenticatedLayout auth={auth}>
        <Head title='Crear Usuario' />
        <div className='max-w-2xl mx-auto p-4 sm:p-6 lg:p-8'>
            <form onSubmit={submit}>
                <input
                    value={data.nombre_completo}
                    onChange={e => setData('nombre_completo', e.target.value)} 
                    type="text"
                    placeholder="Nombre completo"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <InputError message={errors.nombre_completo}  className="mt-2"/>

                <input
                    value={data.identificacion}
                    onChange={e => setData('identificacion', e.target.value)} 
                    type="text"
                    placeholder="Documento de identidad"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <InputError message={errors.identificacion}  className="mt-2"/>

                <input
                    value={data.celular}
                    onChange={e => setData('celular', e.target.value)} 
                    type="text"
                    placeholder="Celular"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <InputError message={errors.celular}  className="mt-2"/>

                <input
                    value={data.indicativo}
                    onChange={e => setData('indicativo', e.target.value)} 
                    type="text"
                    placeholder="Indicativo"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <InputError message={errors.indicativo}  className="mt-2"/>
                <input
                    value={data.identificacion}
                    onChange={e => setData('telefono_fijo', e.target.value)} 
                    type="text"
                    placeholder="Teléfono Fijo"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
               
                <InputError message={errors.password}  className="mt-2"/>
                <PrimaryButton
                    className="mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    disabled = {processing}
                >
                    Crear
                </PrimaryButton>
            </form>
        </div>
    </AuthenticatedLayout>
  )
}

export default Crear