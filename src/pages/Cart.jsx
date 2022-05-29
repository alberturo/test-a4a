import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;




const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}

`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}

`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
    return (
        <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>CARRITO DE COMPRAS</Title>
            <Top>
            <TopButton>CONTINUA COMPRANDO</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Lista Deseada (0)</TopText>
            </TopTexts>
            <TopButton type="filled">PAGAR</TopButton>
            </Top>
            <Bottom>
            <Info>
                <Product>
                <ProductDetail>
                    <Image src="https://www.aboutespanol.com/thmb/W8OyhLJ147FdASo-xq1r0u1JzS8=/480x792/filters:fill(auto,1)/Gabriel-Garcia-Marquez-01-56a5a4303df78cf772893877.jpg" />
                    <Details>
                    <ProductName>
                        <b>Producto:</b> CIEN AÑOS DE SOLEDAD
                    </ProductName>
                    <ProductId>
                        <b>ISBN:</b> 93813718293
                    </ProductId>
                    
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>$ 30</ProductPrice>
                </PriceDetail>
                </Product>
                <Hr />
                <Product>
                <ProductDetail>
                    <Image src="https://storage.googleapis.com/du-prd/books/images/9781646140893.jpg" />
                    <Details>
                    <ProductName>
                        <b>Producto:</b> THE LAST CUENTISTA
                    </ProductName>
                    <ProductId>
                        <b>ISBN:</b> 93813718293
                    </ProductId>
            
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                    <Add />
                    <ProductAmount>1</ProductAmount>
                    <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>$ 20</ProductPrice>
                </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>RESUMEN DE COMPRA</SummaryTitle>
                <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                <SummaryItemText>Domicilio</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                <SummaryItemText>Descuento Domicilio</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 80</SummaryItemPrice>
                </SummaryItem>
                <Button>PAGAR</Button>
            </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
        </Container>
    );
};

export default Cart;