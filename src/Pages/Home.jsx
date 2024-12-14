import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, Postcard } from "../components";
import { useSelector } from "react-redux";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector(state=>state.auth.status)

  useEffect(() => {
    appwriteService.getAllPost([]).then((allPost) => {
      if (allPost) {
        setPosts(allPost.documents);
      }
    });
  }, []);

  if (!authStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }else if(posts.count === 0){
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold">
                No Posts Yet
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {authStatus && posts.map((post) => {
            return (
              <div key={post.$id} className="p-2 w-1/4">
                <Postcard {...post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Home;
