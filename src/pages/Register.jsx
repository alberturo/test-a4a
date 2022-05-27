import styled from "styled-components";


const Container = styled.div`
        width: 100vw;
        height: 100vh;
        background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url('https://images.unsplash.com/photo-1618365908648-e71bd5716cba?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1000')
        center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;

`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
        <Wrapper>
            <Title>CREA TU CUENTA</Title>
            <Form>
            <Input placeholder="Nombre" />
            <Input placeholder="Apellido" />
            <Input placeholder="Usuario" />
            <Input placeholder="Email" />
            <Input placeholder="Contraseña" />
            <Input placeholder="Confirmar Contraseña" />
            <Agreement>
                Creando la cuenta, doy permiso para mi tratamienro de datos de acuerdo con la <b>POLITICA DE PRIVACIDAD</b>
            </Agreement>
            <Button>CREAR</Button>
            </Form>
        </Wrapper>
        </Container>
    );
};

export default Register;