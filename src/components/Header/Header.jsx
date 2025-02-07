import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-pink-400">
      <Container>
        <nav className="flex flex-wrap justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo width='70px' />
            </Link>
          </div>
          <div className="ml-4">
          <ul className="flex ml-auto">
            {navItems.map((item)=> item.active ? (
              <li key={item.name}>
                <button
                  className='inline-block bg-blue-300 mx-1 px-6 py-2 duration-200 hover:bg-blue-100 rounded-full hover:scale-105 transition-all'
                  onClick={()=> navigate(item.slug)}                
                >{item.name}</button>
              </li>
            ) : null )}
            {authStatus && (
              <LogoutBtn className='bg-blue-300 mx-1' />
            ) }
          </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
