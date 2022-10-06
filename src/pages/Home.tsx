import { Container } from "react-bootstrap";
import { Banner } from "../components/Banner";
import { Jumbotron } from "../components/Jumbotron";

export function Home() {
    return (<>
    <Container>
    <Jumbotron></Jumbotron>
    </Container>
    <Container>
    <Banner></Banner>
    </Container>
    </>
    )
}