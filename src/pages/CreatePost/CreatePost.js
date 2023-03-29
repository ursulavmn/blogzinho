
import styles from "./createPost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault(); 
    };

  return (
    <section className={styles.create}>
        <h1>Criar um Post</h1>
        <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
        <form  onSubmit={handleSubmit} >
          <label>
            <span>Título:</span>
            <input type="text"
            name='title'
            required
            placeholder="Pense em um título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
          </label>
          <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira aqui uma imagem que representa o seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
    <button className='bnt btn-success my-4'>Cadastrar</button>

      { /* {!loading && <button className="btn">Criar post!</button>}
        {loading && (
          <button className="btn btn-success" disabled>
            Aguarde. .
          </button>
        )}
        {(error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
         */}
         </form>
    </section>
  );
};

export default CreatePost;