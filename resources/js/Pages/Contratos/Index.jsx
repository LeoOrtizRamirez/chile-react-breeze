import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import { useForm, Head } from '@inertiajs/inertia-react'
import Post from '@/Components/Post'

const Index = ({auth, contratos}) => {
    const { data, setData, post, processing, reset, errors } = useForm({
      title: '',
      body: ''  
    })

    const submit = (e) => {        
        e.preventDefault()
        //console.log(data)
        post(route('contratos.store'), {onSuccess: ()=> reset() })
    }

  return (
    <AuthenticatedLayout auth={auth}>
        <Head title='Contratos' />
        <div className='bg-white overflow-auto'>
                <table className='w-full bg-white border border-indigo-600'>
                    <thead className='bg-light text-dark' style={{backgroundColor: "#00a1c9"}}>
                        <tr className='bg-paginador text-white uppercase text-sm leading-normal'>
                            <th>Acciones</th>
                            <th>Portal</th>
                            <th>Entidad</th>
                            <th>Objeto</th>
                            <th>Cuantía</th>
                            <th>Modalidad</th>
                            <th>Número</th>
                            <th>Estado</th>
                            <th>F. publicación</th>
                            <th>Ubicación</th>
                            <th>Contratista</th>
                            <th>Actividad económica</th>
                        </tr>
                    </thead>
                    <tbody>



                        { contratos.map( (contrato) => (
                            <tr key={contrato.id}>
                                <td className='border border-gray-200 text-left py-3 px-4'>
                                </td>
                                <td className='border border-gray-200 text-left py-3 px-4'> {contrato.fuente.alias_portal} </td>    
                                <td className='border border-gray-200 text-left py-3 px-4'> {contrato.entidad_contratante} </td>    
                                <td className='border border-gray-200 text-left py-3 px-4'> {contrato.objeto.substr(0, 30)}... <a href="" className="text-primary">Ver más</a></td>  
                                <td className='border border-gray-200 text-left py-3 px-4'> {contrato.valor > 0 ? contrato.valor.toLocaleString("co-CO") : contrato.valor_texto} </td> 
                                <td className='border border-gray-200 text-left py-3 px-4'> {contrato.modalidad} </td> 
                                <td className='border border-gray-200 text-left py-3 px-4'> {contrato.codigo_proceso} </td>    
                                <td className='border border-gray-200 text-left py-3 px-4'> {contrato.estado_proceso} </td> 
                                <td className='border border-gray-200 text-left py-3 px-4'> {contrato.fecha_publicacion} </td> 
                                <td className='border border-gray-200 text-left py-3 px-4'> {contrato.ubicacion} </td> 
                                <td className='border border-gray-200 text-left py-3 px-4'> {contrato.contratista} </td> 
                                <td className='border border-gray-200 text-left py-3 px-4'> {contrato.actividad_economica} </td> 
                            </tr>
                        )) }
                    </tbody>
                </table>
        </div>
    </AuthenticatedLayout>
  )
}

export default Index