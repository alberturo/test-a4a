import styled from "styled-components";
import Announcement from "./components/Announcement";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react"

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
    const location = useLocation(); //devuleve objeto con el path
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("Mas Relevante");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    }

    console.log(filters)

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtro de Autores:</FilterText>
                    <Select name="author" onChange={handleFilters}>
                        <Option disabled>Autor</Option>
                        <Option>patrick rothfuss</Option>
                        <Option>donna barba</Option>
                        <Option>gabriel garcia marquez</Option>
                        <Option>hector abad</Option>
                        <Option>agustin laje</Option>
                        <Option>rousseau</Option>
                    </Select>
                    <Select name="categories" onChange={handleFilters}>
                        <Option disabled>Categoria</Option>
                        <Option>general</Option>
                        <Option>ciencia</Option>
                        <Option>infantil</Option>
                        
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Filtrar Por:</FilterText>
                    <Select onChange={(e)=> setSort(e.target.value)}>
                        <Option value="Mas Relevante">Mas Relevante</Option>
                        <Option value="asc">Precio (asc)</Option>
                        <Option value="desc">Precio (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;