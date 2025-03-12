import Form from "./Form";
import Header from "./Header";

// App/Header/Form bileşenlerine ayırın, kendi adlarıyla ayrı dosyalara koyun

export default function App() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Header />
      <Form />
      
    </div>
  );
}
