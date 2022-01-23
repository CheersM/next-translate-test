import Link from 'next/link';

const MainContainer = ({ children }) => {
  return (
    <>
      <div className="navbar">
        <Link href="/">
          <a className="link">Home</a>
        </Link>
        <Link href="/users">
          <a className="link">Users</a>
        </Link>
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
          .link {
            text-decoration: none;
            color: white;
            font-size: 20px;
            margin: 10px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
