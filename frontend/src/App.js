
import {Container}  from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="py-3">
          <h1>Welcome to proshop</h1>  
        </Container>         
      </main>
      <Footer />
    </>
  );
}

export default App;
