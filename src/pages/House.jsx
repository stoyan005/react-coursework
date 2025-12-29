import { useParams } from 'react-router-dom';
import data from '../../properties/properties.json';
import HouseType from '../Components/HouseTypeInfo/HouseType';

const HousePage = () => {
	const { id } = useParams();
	const property = data.properties.find((p) => p.id === id);

	return <HouseType property={property} />;
};

export default HousePage;
