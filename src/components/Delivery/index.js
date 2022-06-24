import { ContainerDiv } from "./style";
import delivery from "../../assets/delivery.png";
import Header from "../Header";
export default function Delivery() {
  return (
    <>
      <Header main={false} />

      <ContainerDiv>
        <img src={delivery} alt="" />
        <h1>Seu pedido já está a caminho!</h1>
      </ContainerDiv>
    </>
  );
}
