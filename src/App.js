import { Route, Routes } from "react-router-dom";

import Post from "./components/pages/Post/Post";
import PostsList from "./components/pages/PostsList/PostsList";
import EditPost from "./components/pages/EditPost/EditPost";
import AddPost from "./components/pages/AddPost/AddPost";
import About from "./components/pages/About/About";
import { Container } from "react-bootstrap";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import styles from "./styles/App.module.scss"
import PageNotFound from "./components/pages/PageNotFound/PageNotFound"

const App = () => {

  return (
    <main>
      <Container className={styles.AppClass}>
        <Header />
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>
      

    </main>
  );

};



export default App;

