import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import Home from "./Pages/Home";
import NftPro from "./Pages/NftPro";
import Layout from "./Layout";

function App() {
  return (
    <>
      {" "}
      <Router>
    <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/nft-profile" element={<NftPro />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
      </Layout>
      </Router>
    </>
  );
}

export default App;
