import Link from "next/link";
import { IoMapOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

const TheHeader = (): any => {
  return (
    <>
      <div className="theHeader">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                <Link href="/">
                  <a title="Home">
                    <IoMapOutline fontSize="1.5rem" />
                  </a>
                </Link>
                <Link href="/login">
                  <a title="Login">
                    <FiLogIn fontSize="1.5rem" />
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheHeader;
