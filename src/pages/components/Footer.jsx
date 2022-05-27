import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
} from "@mui/icons-material";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    `;

const Payment = styled.img`
    width: 50%;
    `;

const Footer = () => {
        return (
        <Container>
            <Left>
                <Logo>Book Store</Logo>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam distinctio hic amet in eius ab tempore voluptates ad provident corporis aliquam quaerat maxime dicta porro, assumenda nostrum incidunt tempora iusto.
                    
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                    <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                    <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                    <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                    <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Enlaces de Interes</Title>
                <List>
                    <ListItem>Inicio</ListItem>
                    <ListItem>Catalogo</ListItem>
                    <ListItem>Libros Infantiles</ListItem>
                    <ListItem>Novelas</ListItem>
                    <ListItem>Best Sellers</ListItem>
                    <ListItem>Mi cuenta</ListItem>
                    <ListItem>Tracking Pedido</ListItem>
                    <ListItem>Mis libros favoritos</ListItem>
                    <ListItem>Lista de Regalos</ListItem>
                    <ListItem>Terminos</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacto</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> 123 Avenida 98336
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +57 301 414 76 82
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} /> contact@a4aBooks.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
        );
    };

export default Footer