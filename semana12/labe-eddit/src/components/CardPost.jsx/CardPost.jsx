import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToCommentsPage } from '../../routes/Coordinator';
import { CardHeader, ContentCardPost,PostText,CardFooter,Status,Comments, Down, Up,PostTitle } from './styled'

const CardPost = (props) => {
    const history = useHistory()
    const { id,username,title,text, votesCount, userVoteDirection,createdAt, commentsCount} = props.data
    return ( 
        <ContentCardPost>
            <CardHeader>
                <img src={"https://api.adorable.io/avatars/40/abott@adorable.png"} alt={username}/>
                <p>{username}</p>
            </CardHeader>
            <PostTitle>
                <h2>{title}</h2>
            </PostTitle>
            <PostText>
                <p>{text}</p>
            </PostText>
            <CardFooter>
                <Status>
                    <Up>🠭</Up>
                        <p>{votesCount}</p>
                    <Down>🠯</Down>
                </Status>
                <Comments>
                    <span>{commentsCount}</span> 
                    <p onClick={()=>goToCommentsPage(history)}>Comentários</p>
                </Comments>
            </CardFooter>
        </ContentCardPost>
     );
}
 
export default CardPost;