export default function FrontMessage() {
  return (
    <p>
      {"Aşağıdaki for loop'unun konsolda ne göstereceğini biliyor musunuz?"
        .split(" ")
        .map((word, index) => {
          const options = ["pink", "blue", "green"];
          const className = options[index % 3];
          return (
            <span key={crypto.randomUUID()} className={className}>
              {word}{" "}
            </span>
          );
        })}
    </p>
  );
}
