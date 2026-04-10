import ApiCallLoadingErrorHandling from "./ApiCallLoadingErrorHandling";
import AsyncAwaitApi from "./AsyncAwaitApi";
import Example1 from "./Example1";
import LiftingStateUp from "./LiftingStateUp";
function App() {
  return (
    <>
      <Example1 />
      <LiftingStateUp />
      <ApiCallLoadingErrorHandling />
      <AsyncAwaitApi />
    </>
  );
}

export default App;
