import React, { useState, useEffect, useCallback } from 'react'
import './ModalFoto.css'
import { Modal } from 'react-bootstrap';

import Cropper from 'react-easy-crop'

const ModalFoto = ({ data, showModal, handleCloseModal, modalId }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedAreaPixels, croppedAreaPixels)
        setCroppedAreaPixels(croppedAreaPixels);
    }, [])
    const [image, setImage] = useState(`${data == null ? "https://col.licitaciones.info/img/mi_cuenta/svg/default_avatar.svg" : "/public/uploads/" + data}`);

    const onSelectFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener("load", () => {
                setImage(reader.result);
            });
        }
    };
    const dataURItoBlob = (dataURI) => {
        const byteString = atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        return blob;
    }

    const saveImage = async () => {
        const formData = new FormData();
        formData.append('image', dataURItoBlob(image), 'image.png');
        formData.append('croppedArea', JSON.stringify(croppedAreaPixels));
        var token = document.querySelector('meta[name="csrf-token"]')
        fetch('/cliente/mi-cuenta/upload-image-perfil', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRF-TOKEN': token.content // Replace with your CSRF token
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Image uploaded successfully');
                console.log("response data", data);
                handleCloseModal(data, 'save');
            })
            .catch(error => {
                console.error('Error uploading image', error);
            });
    }

    const deleteImage = () => {
        var token = document.querySelector('meta[name="csrf-token"]')
        axios.post(`/cliente/mi-cuenta/eliminar-imagen-perfil`,
            { 'Authorization': `Bearer ${token}` })
            .then(response => {
                handleCloseModal(response.data, 'delete')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const imageClear = () => {
        setImage("")
    }

    useEffect(()=>{
        setImage(`${data == null ? "https://col.licitaciones.info/img/mi_cuenta/svg/default_avatar.svg" : "/public/uploads/" + data}`)
    },[showModal])
    return (
        <Modal show={showModal} onHide={() => handleCloseModal(null)} id={modalId} centered>
            <Modal.Header>
                <span className="seleccion_imagen_titulo">Ajusta la imagen de tu cuenta</span>
                <button type="button" className="close icon-Cerrar-modal" onClick={() => handleCloseModal(null)}></button>
            </Modal.Header>
            <Modal.Body>
                {image == "" || image == "https://col.licitaciones.info/img/mi_cuenta/svg/default_avatar.svg" ?
                    <>
                        <div className="crop-container sin-foto">
                            <Cropper
                                image={image}
                                crop={crop}
                                zoom={zoom}
                                aspect={1 / 1}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                        </div>
                        <div className="controls">
                            <p className='crop-text'>Selecciona o arrastra una imagen</p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={onSelectFile}
                            />
                        </div>
                    </>
                    :
                    <>
                        <div className="crop-container">
                            <Cropper
                                image={image}
                                crop={crop}
                                zoom={zoom}
                                aspect={1 / 1}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                            />
                            <svg onClick={imageClear} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="20" height="20" class="icon icon-remove">
                                <path d="M511.921231 0C229.179077 0 0 229.257846 0 512 0 794.702769 229.179077 1024 511.921231 1024 794.781538 1024 1024 794.702769 1024 512 1024 229.257846 794.781538 0 511.921231 0ZM732.041846 650.633846 650.515692 732.081231C650.515692 732.081231 521.491692 593.683692 511.881846 593.683692 502.429538 593.683692 373.366154 732.081231 373.366154 732.081231L291.761231 650.633846C291.761231 650.633846 430.316308 523.500308 430.316308 512.196923 430.316308 500.696615 291.761231 373.523692 291.761231 373.523692L373.366154 291.918769C373.366154 291.918769 503.453538 430.395077 511.881846 430.395077 520.349538 430.395077 650.515692 291.918769 650.515692 291.918769L732.041846 373.523692C732.041846 373.523692 593.447385 502.547692 593.447385 512.196923 593.447385 521.412923 732.041846 650.633846 732.041846 650.633846Z" fill="#C9003D"></path>
                            </svg>
                        </div>
                        <div className="controls">
                            <input
                                type="range"
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                aria-labelledby="Zoom"
                                onChange={(e) => {
                                    setZoom(e.target.value)
                                }}
                                className="zoom-range"
                            />
                        </div>
                    </>
                }


            </Modal.Body>
            <Modal.Footer>
                <div className="seleccion_imagen_botones">
                    {data == null ?
                        <button type="button" className="btnRadius btn-new-danger" onClick={() => handleCloseModal(null)}>Cancelar</button>
                        :
                        <button type="button" className="btnRadius btn-new-danger" onClick={deleteImage}>Eliminar</button>
                    }
                    <button type="button" className="btnRadius btn-new-green" onClick={saveImage}>Guardar</button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalFoto