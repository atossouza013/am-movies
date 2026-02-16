import { useEffect, useState } from "react";
import { Background, Container } from "./styles";
import CloseButton from '../../assets/close.svg'
import { getVideos } from "../../services/getData";

function Modal({ id, type, setShowModal }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (!id || !type) return;

    async function loadVideos() {
      try {
        const response = await getVideos(type, id);
        setVideos(response || []);
      } catch (error) {
        console.error(error);
        setVideos([]);
      }
    }

    loadVideos();
  }, [type, id]);

  const trailer = videos.find(
    (video) => video.type === "Trailer"
  );

  return (
    <Background onClick={() => setShowModal(false)}>
      {trailer && (
        <Container onClick={(e) => e.stopPropagation()}>
          <img
            src={CloseButton}
            alt="Fechar"
            onClick={() => setShowModal(false)}
          />

          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Youtube Video Player"
            allowFullScreen
          />
        </Container>
      )}
    </Background>
  );
}

export default Modal;
