import { Navbar as NavbarBs, Container, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Footer(){
    const { openCart, cartQuantity } = useShoppingCart();
    return (
    <NavbarBs className="bg-dark shadow-sm mb-3">
        <Container>
            <p className="text-white">*Disclaimer, this is NOT a real store! this is a mock project. I do not own any rights to the Pokemon franchise all rights go to <a href="https://www.nintendo.com/">Nintendo</a> <a href="https://www.pokemon.com/us//">Pokemon</a></p>
        </Container>
    </NavbarBs>
    )
}