import React from 'react'

const Alertas = () => {
    return (
        <>
            <div id="b-toaster-bottom-right" className="b-toaster b-toaster-bottom-right">
                <div className="b-toaster-slot vue-portal-target">
                    <div data-v-50917870="" id="toast-cambio-contrasena__toast_outer" role="alert" aria-live="assertive"
                        aria-atomic="true" className="b-toast b-toast-solid b-toast-prepend b-toast-default">
                        <div id="toast-cambio-contrasena" tabindex="0" className="toast">
                            <header className="toast-header">
                                <div data-v-50917870="" className="header-toast danger"><span data-v-50917870="">Error</span>
                                </div>
                            </header>
                            <div className="toast-body">
                                <div data-v-50917870="" className="body-toast danger"><span data-v-50917870=""> La contraseña debe tener
                                    mínimo 6 caracteres. </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alertas