import React,{useState,useEffect} from 'react'
import { Container,Postcard } from '../components'
import appwriteService from '../appwrite/config'

const AllPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getAllPost([]).then((allPost) => {
            if(allPost){
                console.log("all posts : ",allPost.documents)
                setPosts(allPost.documents);
            }
        });
    }, []);


  return (
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap">
            {
                // console.log(posts);
                posts.map((post)=>{
                    return <div key={post.$id} className='p-2 w-1/4'>
                        <Postcard {...post} />
                    </div>
                })
            }
            </div>
        </Container>
    </div>
  )
}

export default AllPosts