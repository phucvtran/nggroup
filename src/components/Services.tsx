

import office from "../assets/images/office.jpeg";
import warehouse from "../assets/images/warehouse.jpeg"; 

const Services = () => {
    return (
       
        <div className="body">
				<ul>
					<li>
						<div className="featured">
							<img src={office} alt=""/>
						</div>
						<div>
							<h3>Office Janitorial Service</h3>
							<p>NG Cleaning is designed to maintain a pristine and productive work environment for your business. We offer comprehensive cleaning solutions, including daily maintenance, deep cleaning, and specialized services tailored to the unique needs of your office space. Our highly experienced team uses advanced cleaning techniques and eco-friendly products to ensure every area, from workstations to common areas, is spotless and inviting. Committed to quality assurance, we deliver consistent and reliable results that enhance the comfort and efficiency of your workplace, allowing you to focus on your core business activities.</p>
						</div>
					</li>
					<li>
						<div className="featured">
							<img src={warehouse} alt=""/>
						</div>
						<div>
							<h3>Warehouse Janitorial Service</h3>
							<p>Our warehouse janitorial service is focused on maintaining a clean and organized space that supports your operational efficiency. We offer tailored cleaning solutions to address the unique challenges of warehouse environments, including comprehensive floor cleaning, dust control, and thorough waste management. Our skilled team uses specialized equipment and environmentally friendly products to ensure every area, from storage areas to loading docks, meets high standards of cleanliness and safety. By keeping your warehouse spotless and well-maintained, we help enhance productivity and create a safer, more efficient workspace for your operations.</p>
						</div>
					</li>
					
				</ul>
			</div>
        
    )
}

export default Services;