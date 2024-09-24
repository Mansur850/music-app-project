import { Link, useParams } from "react-router-dom";
import backIcon from "../images/categoryes/back-arrow-svgrepo-com.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingDeatail from "../../components/LoadingDetail";
import Error from "../../components/Error";
    
function PostDeatailPage () {

    const {id} = useParams();
    const [post, setPosts] = useState({});
    const [isLoading, setIsLoading] = useState (false);
    const [isError, setIsError] = useState (false);


    useEffect(() => {
        async function fetchPost() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://87440e50ac31979f.mokky.dev/post/${id}`);
                setPosts(response.data);
            } catch (error) { 
                setIsError(true)
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPost();
    }, [id]);

    if (isError) {
        return <Error />;
    }

    return(
                <section class="mobile-block">
            <Link to="/" class="back-button">
                <div class="container">
                    <img src={backIcon} width="16px" height="16px" alt="back icon" />
                    Назад
                </div>
            </Link>
            {isLoading ? (<LoadingDeatail />) : (
                <div class="container">
                    <img src={post.imageUrl} width="100px" height="100px"  alt={post.title} class="delcaure" />
                    <h1 class="song-title">{post.title}</h1>
                    <h2 class="author">{post.description}</h2>
                    <audio controls class="audio-player">
                        <source src={post.sound} type="audio/mpeg" />
                        Ваш браузер не поддерживает аудио.
                    </audio>
                    
                    <div class="text"
                    id="text-id">

                        <p id="text-paragraph-id">
                            <>
                             <center id="text-center-id">
                                {post.text}
                             </center>
                             </>                
                        </p>
                    </div>
                </div>
            )}
            
        </section>
    );
}

export default PostDeatailPage; 