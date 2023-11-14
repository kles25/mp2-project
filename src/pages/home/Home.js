import "./home.css"
import RightNavbar from "../../components/rightnavbar/RightNavbar";

function Home() {
    return (
        <>
            <div className='background-image-color'>
                <div className="background-gradient">
                    <div className="home-container-fluid">
                        <RightNavbar></RightNavbar>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
