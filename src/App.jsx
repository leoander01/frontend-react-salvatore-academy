import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const devmons = [
    {
      name: "Java",
      alt: "DevMon Java",
      image: "https://salvatore.academy/devmon/1_java.png",
      evolutionFor: "Kotlin",
    },
    {
      name: "Kotlin",
      alt: "DevMon Kotlin",
      image: "https://salvatore.academy/devmon/2_kotlin.png",
      evolutionFor: "Android",
    },
    {
      name: "Android",
      alt: "DevMon Android",
      image: "https://salvatore.academy/devmon/3_android.png",
    },
    {
      name: "C",
      alt: "DevMon C",
      image: "https://salvatore.academy/devmon/4_c.png",
      evolutionFor: "C++",
    },
  ];

  return (
    <>
      <div className="cards">
        {devmons.map(function (devmon) {
          return <Card key={devmon.name} item={devmon} />;
        })}
      </div>
    </>
  );
}

export default App;
