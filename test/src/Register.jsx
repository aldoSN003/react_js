export default function Register() {

    //numero_control, nombre_completo, email, password, phone_number
    return (<section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <img className="w-35 mb-8" src="/summer_tec.svg"
                alt="logo" />

            <div
                className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Crea una cuenta
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="/login">
                        <div>
                            <label htmlFor="controlNumber"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Número de control
                            </label>
                            <input type="text" name="controlNumber" id="controlNumber"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="22001233"
                                required
                                pattern="\d*"
                                inputMode="numeric"
                            />
                        </div>
                        <div>
                            <label htmlFor="fullName"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nombre completo
                            </label>
                            <input type="text" name="fullName" id="fullName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600
           focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Juan Pérez Gómez"
                                required
                                pattern="^[A-Za-zÀ-ÿ\s]+$"
                                title="Solo letras y espacios"
                            />
                        </div>


                        <div>
                            <label htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo
                                electrónico</label>
                            <input type="email" name="email" id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contaseña</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="" />
                        </div>
                        <div>
                            <label htmlFor="confirm-password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirma tu
                                contraseña</label>
                            <input type="confirm-password" name="confirm-password" id="confirm-password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required="" />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required="" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Acepto los<a
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    href="#">Términos y Condiciones</a></label>
                            </div>
                        </div>
                        <button type="submit"
                            className="w-full text-white bg-[var(--primary-color)]  cursor-pointer hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
                            an account
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            ¿Ya tienes una cuenta?
                            <a href="/login"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500">Inicia sesión </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>);
}