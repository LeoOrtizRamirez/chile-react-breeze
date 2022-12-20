import React, { useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import {useForm, usePage, Head} from '@inertiajs/inertia-react'

dayjs.extend(relativeTime)

const Editar = ({plan}) => {
  const {auth} = usePage().props
  const [editing, setEditing] = useState(false)
  const {data, setData, patch, post, processing, reset, errors} = useForm({
    id: plan.id,
    nombre: plan.nombre,
    dias: plan.dias,
    tiempo: plan.tiempo,
    valor: plan.valor,
    descripcion: plan.descripcion,
    estado: plan.estado
  })

  const submit = (e)=>{
    console.log(data)
    e.preventDefault()
    patch(route('planes.update', data.id), {onSuccess: ()=>setEditing(false)})
  }

  return (
    <AuthenticatedLayout auth={auth}>
        <Head title="Editar Plan" />
        <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
            <form onSubmit={submit}>
                <input
                    value={data.id}
                    onChange={(e) =>
                        setData("id", e.target.value)
                    }
                    type="text"
                    placeholder="Id"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <input
                    value={data.nombre}
                    onChange={(e) =>
                        setData("nombre", e.target.value)
                    }
                    type="text"
                    placeholder="Nombre"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <InputError
                    message={errors.nombre}
                    className="mt-2"
                />
                <input
                    value={data.dias}
                    onChange={(e) =>
                        setData("dias", e.target.value)
                    }
                    type="number"
                    placeholder="Días"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <InputError
                    message={errors.dias}
                    className="mt-2"
                />
                <input
                    value={data.tiempo}
                    onChange={(e) => setData("tiempo", e.target.value)}
                    type="number"
                    placeholder="Tiempo"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <InputError message={errors.tiempo} className="mt-2" />
                <input
                    value={data.valor}
                    onChange={(e) => setData("valor", e.target.value)}
                    type="number"
                    placeholder="Valor"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <InputError message={errors.valor} className="mt-2" />
                <input
                    value={data.descripcion}
                    onChange={(e) =>
                        setData("descripcion", e.target.value)
                    }
                    type="text"
                    placeholder="Descripción"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <InputError
                    message={errors.descripcion}
                    className="mt-2"
                />
                <input
                    value={data.estado}
                    onChange={(e) => setData("estado", e.target.value)}
                    type="text"
                    placeholder="Estado"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <InputError message={errors.estado} className="mt-2" />
                <PrimaryButton
                    className="mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    disabled={processing}
                    onClick={ ()=> setEditing(true)}
                >
                    Editar
                </PrimaryButton>
            </form>
        </div>
    </AuthenticatedLayout>
  )
}

export default Editar