import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  CategoryItemContainer,
  Body,
} from "./category-item.styles";

const CategoryItem = ({ category: { title, imageUrl, route } }) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p onClick={onNavigateHandler}>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
