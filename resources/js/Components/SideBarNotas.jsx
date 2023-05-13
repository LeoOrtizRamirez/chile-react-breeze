import React, { useState, useRef, useEffect } from 'react'
import './SideBarNotas.css'
import { Sidebar } from 'primereact/sidebar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Toast } from 'primereact/toast';

const SideBarNotas = ({ contrato, zona, isOpen, onHide, onChangeSideBarTotalNotas, globalLoading }) => {
    const [notas, setNotas] = useState([])
    const [searchingNotas, setSearchingNotas] = useState(false)
    const [loadingNotas, setLoadingNotas] = useState(false)
    const [creatingNote, setCreatingNote] = useState(false)
    const [editingNote, setEditingNote] = useState(null)
    const [cleanNota, setCleanNota] = useState(false)

    const onHandleSetEditingNote = () => {
        setEditingNote(false)
        setInputTextEdit("")
        setInputTitleEdit("")
    }

    useEffect(() => {
        if (isOpen) {
            setSearchingNotas(false)
            setNotas([])
            setLoadingNotas(true)
            var token = document.querySelector('meta[name="csrf-token"]')
            axios.get('/cliente/notas/get-notes?idContrato=' + contrato.id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setNotas(response.data)
                    setLoadingNotas(false)
                })
                .catch(error => {
                    console.error('Request failed:', error.response.status, error.response.data);
                });
        }
    }, [isOpen])

    const refInputText = useRef()
    const refInputTitle = useRef()
    const [inputTextEdit, setInputTextEdit] = useState("")
    const [inputTitleEdit, setInputTitleEdit] = useState("")
    const [notaSelected, setNotaSelected] = useState({})

    const onHandleEditingNote = (nota) => {
        setEditingNote(nota.id)
        //Comparar si la nota seleccionada anteriormente es igual a la actual
        if (JSON.stringify(nota) === JSON.stringify(notaSelected)) {
            if (cleanNota) {
                return;
            }
        } else {
            setNotaSelected(nota)
            setInputTextEdit(nota.text)
            setInputTitleEdit(nota.title)
        }
    }

    const onHandlecleanEditarNota = () => {
        setCleanNota(true)
        setInputTextEdit("")
        setInputTitleEdit("")
    }

    const onHandlecleanCrearNota = () => {
        refInputText.current.value = ""
        refInputTitle.current.value = ""
    }

    const [inputSearchNota, setInputSearchNota] = useState("")
    const filterNotas = (event, clearNotas = false) => {
        if (event?.key === 'Enter' || clearNotas) {
            if (clearNotas) {
                setInputSearchNota("")
            }
            setLoadingNotas(true)
            let token = document.querySelector('meta[name="csrf-token"]')
            let search = clearNotas ? '' : inputSearchNota
            axios.get('/cliente/notas/get-notes?idContrato=' + contrato.id + '&search=' + search, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setSearchingNotas(true)
                    setNotas(response.data)
                    setLoadingNotas(false)
                })
                .catch(error => {
                    console.error('Request failed:', error.response.status, error.response.data);
                });
        }
    }

    const saveNota = () => {
        globalLoading(true)
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/notas/admin-note', {
            idContrato: contrato.id,
            pinned: 0,
            text: refInputText.current.value,
            title: refInputTitle.current.value,
            zona: zona
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setNotas(response.data)
                onChangeSideBarTotalNotas(response.data.length)
                setCreatingNote(false)
                refInputText.current.value = ""
                refInputTitle.current.value = ""
                //CUANDO VIENE DE LA TABLA CONTRATOS
                /* setTabla(prevTabla => {
                    const index = prevTabla.data.findIndex(item => item.id === contrato.id);
                    if (index === -1) {
                        return prevTabla;
                    } else {
                        let item = prevTabla.data[index]
                        item.notas = true
                        prevTabla.data[index] = item;
                        return prevTabla;
                    }
                }); */

                globalLoading(false)
                toastBL.current.show({ severity: 'success', summary: 'Nota creada con éxito'/* , detail: 'Message Content' */, life: 3000 });

            })
            .catch(error => {
                console.log(error)
                toastBL.current.show({ severity: 'error', summary: error /* , detail: 'Message Content' */, life: 10000 });
            })
    }

    const updateNota = (id_nota) => {
        globalLoading(true)
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/notas/actualizar', {
            id: id_nota,
            idContrato: contrato.id,
            pinned: 0,
            text: inputTextEdit,
            title: inputTitleEdit,
            zona: zona
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setNotas(response.data)
                setEditingNote(false)
                setInputTextEdit("")
                setInputTitleEdit("")
                globalLoading(false)
                toastBL.current.show({ severity: 'success', summary: 'La nota ha sido actualizada'/* , detail: 'Message Content' */, life: 3000 });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const deleteNota = (id_nota) => {
        globalLoading(true)
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post('/cliente/notas/eliminar', {
            idContrato: contrato.id,
            id: id_nota
        },
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                setNotas(response.data)
                //CUANDO VIENE DE LA TABLA CONTRATOS
                /* if (response.data.length == 0) {
                    setTabla(prevTabla => {
                        const index = prevTabla.data.findIndex(item => item.id === contrato.id);
                        if (index === -1) {
                            return prevTabla;
                        } else {
                            let item = prevTabla.data[index]
                            item.notas = false
                            prevTabla.data[index] = item;
                            return prevTabla;
                        }
                    });
                } */
                onChangeSideBarTotalNotas(response.data.length)
                globalLoading(false)
                toastBL.current.show({ severity: 'error', summary: 'La nota ha sido eliminada'/* , detail: 'Message Content' */, life: 3000 });
            })
            .catch(error => {
                console.log(error)
            })
    }


    const reorder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const dateFormat = (date = new Date()) => {
        const createdAt = new Date(date).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            .replace(/^(\d{1}):/, '0$1:').replace(/(\s+)([aApP][mM])$/, '$1$2');
        const today = new Date().toLocaleDateString('en-US');

        if (new Date(date).toLocaleDateString('en-US') === today) {
            return `Hoy ${createdAt}`;
        } else {
            return new Date(date).toLocaleDateString('en-US');
        }
    }

    const toastBL = useRef(null);

    return (
        <>
            <Sidebar id="sidebar-notes" visible={isOpen} position="right" onHide={() => onHide()}>
                <div className="b-sidebar-body notes-content">
                    {loadingNotas &&
                        <div id="notasCarganos" className="notasCargando">
                            <img src="https://col.licitaciones.info/img/loading.gif" className="loader-notas" />
                        </div>
                    }
                    <div className="wrapper">
                        <a className="close-sidebar icon-Flujo" onClick={() => onHide()}></a>
                        <div className="notes-content__header">
                            <h4>Mis notas</h4>
                        </div>
                        <div className={`notes-content__create ${creatingNote ? "on-creating" : ""}`} onClick={() => setCreatingNote(true)}>
                            <div className="notes-header">
                                {creatingNote &&
                                    <div className="notes-title">
                                        <input ref={refInputTitle} onClick={() => setCreatingNote(true)} placeholder="Escribe un título aquí." type="text" className="noteTitle" aria-required="true" aria-invalid="true" />
                                    </div>
                                }
                                <div className={`notes-opts ${creatingNote ? "on-expand" : ""}`}>
                                    <span id="timeNota" className="icon-Hora text-fecha">
                                        <span className="text-fecha__hora">{dateFormat()}</span>
                                    </span>
                                    <div className="custom-tooltip red" data-tooltip="Borrar contenido">
                                        <a id="tlpBorrarNota" className="icon-Limpiar-click" onClick={onHandlecleanCrearNota}></a>
                                    </div>
                                </div>
                            </div>
                            <div className="textarea-container">
                                <textarea ref={refInputText} onClick={() => setCreatingNote(true)} name="note" id="note" placeholder="Crear una nota" className="mt-2"></textarea>
                            </div>
                            {creatingNote &&
                                <div className="button-create-container">
                                    <button className="button-create btn-new-green btnRadius" onClick={saveNota}>Crear nota</button>
                                </div>
                            }
                        </div>
                        {notas.length > 0 || searchingNotas ?
                            <div className="notes-content__zone">
                                <div className="notes-content__zone-input-search">
                                    <div className="form-group">
                                        <div className="input-container">
                                            <input
                                                onClick={() => setCreatingNote(false)}
                                                onChange={(e) => setInputSearchNota(e.target.value)}
                                                onKeyDown={filterNotas}
                                                value={inputSearchNota}
                                                type="text"
                                                placeholder="Buscar nota"
                                            />
                                            <span onClick={(e) => filterNotas(e, true)} className="icon-Cancelar" style={{ display: inputSearchNota == "" ? 'none' : 'unset' }}></span>
                                            <span className="icon-Buscar-click"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="notes-content__zone-list-notes">
                                    <DragDropContext
                                        onDragEnd={(result) => {
                                            const { source, destination } = result;
                                            if (!destination) {
                                                return;
                                            }
                                            if (
                                                source.index === destination.index &&
                                                source.droppableId === destination.droppableId
                                            ) {
                                                return;
                                            }
                                            setNotas((prevNotas) => reorder(prevNotas, source.index, destination.index));
                                            let notas_ordenadas = reorder(notas, source.index, destination.index)
                                            var token = document.querySelector('meta[name="csrf-token"]')
                                            axios.post('/cliente/notas/ordenar-notas', {
                                                notas: notas_ordenadas
                                            },
                                                { 'Authorization': `Bearer ${token}` })
                                                .then(response => {

                                                })
                                                .catch(error => {
                                                    console.log(error)
                                                })
                                        }}
                                    >
                                        <Droppable droppableId="notas">
                                            {(droppableProvided) => (
                                                <ul
                                                    {...droppableProvided.droppableProps}
                                                    ref={droppableProvided.innerRef}
                                                    className="nota-container"
                                                >
                                                    <div>
                                                        {notas.map((nota, index) => (
                                                            <Draggable key={nota.id} draggableId={`nota_${nota.id}`} index={index}>
                                                                {(draggableProvided) => (
                                                                    <li
                                                                        {...draggableProvided.draggableProps}
                                                                        ref={draggableProvided.innerRef}
                                                                        {...draggableProvided.dragHandleProps}
                                                                        className={`note ${editingNote == nota.id ? "on-edit" : ""}`}
                                                                    >
                                                                        {editingNote == nota.id &&
                                                                            <div className="note-header-opts">
                                                                                <div className="controls">
                                                                                    <a className="icon-Limpiar-click" onClick={() => onHandlecleanEditarNota()}></a>
                                                                                    <a className="hover-icon icon-Eliminar" onClick={() => deleteNota(nota.id)}></a>
                                                                                    <span id="timeNota" className="icon-Hora text-fecha">
                                                                                        <span className="text-fecha__hora">
                                                                                            {dateFormat(nota.created_at)}
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        <div className="note-data">
                                                                            <div className="note-icon">
                                                                                <img src="https://col.licitaciones.info/img/notas/note_icon.svg" alt="Nota icon" /></div>
                                                                            <div className="note-description" onClick={() => onHandleEditingNote(nota)}>
                                                                                {editingNote == nota.id ?
                                                                                    <>
                                                                                        <input placeholder="Agrega un título" type="text" className="onEditTitleNote" aria-required="true" aria-invalid="false" value={inputTitleEdit} onChange={(e) => setInputTitleEdit(e.target.value)} />
                                                                                        <textarea placeholder="Agrega una descripción" className="onEditNote" style={{ height: 26 + 'px' }} value={inputTextEdit} onChange={(e) => setInputTextEdit(e.target.value)}></textarea>
                                                                                    </>
                                                                                    :
                                                                                    <>
                                                                                        <div className="notes-drag">
                                                                                            <span className="note-description__title">{nota.title}</span>
                                                                                            <div className="notes-opts">
                                                                                                <span id="timeNota" className="icon-Hora text-fecha">
                                                                                                    <span className="text-fecha__hora">{dateFormat(nota.created_at)}</span>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <p className="note-descrition__body">{nota.text}</p>
                                                                                    </>
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                        {editingNote == nota.id ?
                                                                            <div className="note-actions">
                                                                                <div className="manual-controls">
                                                                                    <a className="btn-new-green btnRadius" draggable="false" href="#!" onClick={() => updateNota(nota.id)}>
                                                                                        <i className="icon-Check"></i>
                                                                                        <span>Guardar</span>
                                                                                    </a>
                                                                                    <a href="#!" className="btn-new-danger btnRadius" onClick={() => onHandleSetEditingNote()}>
                                                                                        <i className="icon-Cancelar"></i> <span>Descartar</span>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            :
                                                                            <div className="note-actions">
                                                                                <div className="direct-access-controls">
                                                                                    <a className="hover-icon icon-Eliminar" onClick={() => deleteNota(nota.id)}></a>
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                    </li>
                                                                )}
                                                            </Draggable>

                                                        ))}
                                                    </div>
                                                    {droppableProvided.placeholder}
                                                    <div className="infinite-loading-container">
                                                        <div className="infinite-status-prompt"
                                                            style={{ color: 'rgb(102, 102, 102)', fontSize: 14 + 'px', padding: 10 + 'px 0px', display: 'none' }}><i
                                                                data-v-46b20d22="" className="loading-default"></i></div>
                                                        <div className="infinite-status-prompt">
                                                            <div className="infinite--no-data">No hay más notas</div>
                                                        </div>
                                                        <div className="infinite-status-prompt" style={{ display: 'none' }}><span
                                                            className="infinite--no-data">No hay más notas</span></div>
                                                        <div className="infinite-status-prompt"
                                                            style={{ color: 'rgb(102, 102, 102)', fontSize: 14 + 'px', padding: 10 + 'px 0px', display: 'none' }}>
                                                            Opps, something went wrong :(
                                                            <br />
                                                            <button className="btn-try-infinite">Retry</button>
                                                        </div>
                                                    </div>

                                                </ul>
                                            )}
                                        </Droppable>
                                    </DragDropContext>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="workspace text-center">
                                    <div className="workspace__image">
                                        <img src="https://col.licitaciones.info/img/notas/workspace.png" alt="Nota Workspace" />
                                    </div>
                                    <p className="workspace__copy">No has creado tu primera nota.</p>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </Sidebar>
            <Toast ref={toastBL} position="bottom-left" />
        </>
    )
}

export default SideBarNotas