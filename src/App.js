import "./App.css";
import tw from "tailwind-styled-components";
import Device from "./components/Device"
import { useSelector } from "react-redux";

function App() {

  // const theme = useSelector((state) => state.theme.value);

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Device/>
      </body>
    </>
  );
}

export default App;

const Container = tw.div`
    flex
    flex-col
    w-full
    h-screen
    bg-t_one_device
    p-6
`;
