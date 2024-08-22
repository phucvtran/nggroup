import '../styles/style.css';
import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    return (
       
        <div className="body home">
            <div className="description-container">
                <div id="featured">
					<h3>Proud to Provide a Clean Environment</h3>
					<p>We are dedicated to providing top-tier cleaning services for offices and warehouses, ensuring your spaces are not only spotless but also optimized for productivity. We pride ourselves on our commitment to quality assurance, relying on a team of highly experienced professionals who understand the unique needs of each environment. Whether it's routine maintenance or specialized cleaning, we deliver reliable, thorough results that enhance the safety and efficiency of your workspace.</p>
					<input type="button" value="Learn more" onClick={()=>{navigate("/services")}}/>
                    
				</div>
                <div id="description-contact">
                    <h1>Get a quote</h1>
                    <h2>(253) 740-4231</h2>
                    <button className="contact-button" onClick={() => {navigate('/contact')}}>Contact Us</button>
                </div>
                

            </div>
				
		</div>
        
    )
}

export default Home;