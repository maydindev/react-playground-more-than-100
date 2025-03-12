// Statik değerleri alın ve prop'ları kullanarak dinamik hale getirin
// Örneğin: label id, label text, input placeholder, input description
function FormInput({ htmlFor, text, placeholder, description }) {
  return (
    <div className="max-w-sm p-8">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {text}
      </label>
      <div className="mt-2">
        <input
          id="email"
          name="email"
          type="email"
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <form>
      <FormInput htmlFor="email" text="Email" placeholder="you@example.com" description="Bunu sadece spam için kullanacağız."/>
      <FormInput htmlFor="email" text="Email" placeholder="i@example.com" description="Bunu sadece spam için kullanacağız."/>
      <FormInput htmlFor="email" text="Email" placeholder="we@example.com" description="Bunu biz kullanacağız."/>
    </form>
  );
}
