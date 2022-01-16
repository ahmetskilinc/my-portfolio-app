import styles from "../styles/PhotographyGrid.module.scss";
import Photography from "../data/photography.json";
import Image from "next/image";
import { useState } from "react";
import { FullScreenImage } from ".";

const PhotographyGrid = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");

	const handleOpen = (img: string) => {
		setSelectedImage(img);
		setIsOpen(!isOpen);
	};

	return (
		<>
			<div className={styles.photographyWrapper}>
				{Photography.map(({ img }) => (
					<button key={img} className={styles.imageButton} onClick={() => handleOpen(img)}>
						<Image src={require(`../public/images/photographs/${img}.jpeg`)} alt={img} layout="responsive" placeholder="blur" quality={99} />
					</button>
				))}
			</div>
			{isOpen && <FullScreenImage handleOpen={handleOpen} img={selectedImage} />}
		</>
	);
};

export default PhotographyGrid;
