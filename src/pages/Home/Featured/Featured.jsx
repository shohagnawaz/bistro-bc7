import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-8">
            <SectionTitle
                subHeading={"Check It Out"}
                heading={"Featured Item"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2025</p>
                    <p className="uppercase">Where can I get some?</p>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Dicta laudantium officia dolores accusantium dolor ratione 
                        odit minus molestias iste et repudiandae aperiam delectus, 
                        quibusdam id fuga in. Maxime harum optio fugiat consequuntur, 
                        eaque quas quasi, atque obcaecati, ad aperiam hic odio ipsa 
                        voluptas nam at? Non tempore totam neque unde.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;