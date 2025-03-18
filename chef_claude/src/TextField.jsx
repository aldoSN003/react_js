export default function TextInput({ placeholder, type = "text", className = "" ,name}) {
    return (
        <input
            aria-label={placeholder}
            className={`w-full max-w-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-200 focus:border-primary-600   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
            type={type}
            placeholder={placeholder}
            required={true}
            name={name}
        />
    );
}
