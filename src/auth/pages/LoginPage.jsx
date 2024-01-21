import React, { useState } from 'react';

export const LoginPage = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
    };

    return (
        <>

            <div className="row justify-content-center align-content-center form__space">
                <div className="col-md-6 col-lg-4 login-container">
                    <div className="card col-fluid">
                        <div className="card-body">
                            <h5 className="card-title text-center">Iniciar Sesión</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Nombre de usuario:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Ingresa tu nombre de usuario"
                                        value={username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Contraseña:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Ingresa tu contraseña"
                                        value={password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mt-3">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};