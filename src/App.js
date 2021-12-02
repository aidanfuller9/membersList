import "./styles.css";

export default function App() {
  function createObject(first, last, pronouns, school, gradYear, color) {
    return {
      first: first,
      last: last,
      pronouns: pronouns,
      school: school,
      gradYear: gradYear,
      color: color
    };
  }
  let classRoster = [
    createObject(
      "Traci",
      "Siebel",
      "she/her",
      "LaunchDarkly",
      "2023",
      "purple"
    ),
    createObject("Victor", "Lymar", "he/him", "LaunchDarkly", "1923", "green"),
    createObject("Ida", "Voong", "she/her", "Oakland Tech", "2022", "blue"),
    createObject("Ana", "Rivera", "she/her", "CSU East Bay", "2051", "green"),
    createObject("Aidan", "Fuller", "he/him", "Oakland Tech", "2023", "red"),
    createObject("Kyle", "Wan", "he/him", "Oakland Tech", "2023", "yeah"),
    createObject("Enjun", "Li", "he/him", "John O' Connell", "2022", "black"),
    createObject("Luis", "Garcia", "he/him", "CSU East Bay", "2025", "black"),
    createObject("Amanda", "Yu", "she/her", "Oakland Tech", "2022", "blue"),
    createObject("Yifei", "Du", "he/him", "Balboa HS", "2022", "black"),
    createObject(
      "Hector",
      "Del Valle",
      "he/him",
      "John O' Connel",
      "2022",
      "gray"
    )
  ];
  console.log(classRoster);

  return (
    <div className="App">
      <h1>Howdy doo</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
