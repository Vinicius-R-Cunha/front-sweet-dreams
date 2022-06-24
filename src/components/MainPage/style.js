import styled from "styled-components";

const ProductsContainer = styled.div`
  width: 100%;

  padding-top: 80px;
  padding-bottom: 30px;

  display: flex;
  justify-content: center;
`;

const CentralizedDiv = styled.div`
  width: 1300px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 40px;

  justify-content: center;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  img {
    width: 100%;
    height: 290px;

    object-fit: cover;
    object-position: center;

    margin-bottom: 12px;
  }

  .name {
    font-size: 18px;

    margin-bottom: 12px;
  }

  .description {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);

    margin-bottom: 20px;
  }

  .price {
    font-size: 18px;

    margin-bottom: 8px;
  }

  button {
    width: 100%;

    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    color: #00ced1;

    padding: 10px 0;

    background-color: #ffffff;

    border-radius: 10px;
    border: 2px solid #00ced1;

    cursor: pointer;

    :hover {
      color: #ffffff;
      background-color: #00ced1;
      border: 2px solid #ffffff;
    }
  }
`;

const LoadingDiv = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: lightblue;
`;

export { ProductsContainer, CentralizedDiv, Product, LoadingDiv };
