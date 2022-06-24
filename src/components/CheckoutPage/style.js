import styled from "styled-components";

const CheckoutDiv = styled.div`
  width: 100%;

  padding-top: 120px;
  padding-bottom: 30px;

  display: flex;
  justify-content: center;
`;

const CentralizedDiv = styled.div`
  width: 1100px;

  display: flex;
  justify-content: space-between;

  input {
    border: 1px solid lightblue;
    border-radius: 5px;

    text-indent: 8px;
    font-size: 13px;
  }
`;

const CheckoutForm = styled.form`
  width: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-right: 140px;
  box-sizing: border-box;

  .form-title {
    display: flex;
    align-items: center;

    margin-bottom: 20px;

    p {
      font-size: 19px;
    }
  }

  .minimized-title {
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;

    border-top: 1.4px solid lightblue;
    border-bottom: 1.4px solid lightblue;

    cursor: pointer;
  }

  .num {
    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    margin-right: 5px;

    background-color: lightpink;
  }

  .input-title {
    width: 100%;

    font-size: 14px;

    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 40px;

    margin-bottom: 10px;

    text-indent: 8px;
  }

  .continue-button {
    width: 130px;
    height: 50px;

    font-size: 18px;

    background-color: #ffffff;

    margin: 20px 0;

    align-self: flex-start;
    border: 2px solid lightpink;

    cursor: pointer;
  }
`;

const InputDiv = styled.div`
  width: 100%;

  display: flex;

  gap: 10px;

  input {
    border: 1px solid lightblue;
    border-radius: 5px;

    font-size: 9.5px;
  }

  .phone {
    width: 170px;
  }

  .city {
    width: 170px;
  }
`;

const ProductInfo = styled.div`
  width: 400px;
  height: min-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 15px;

  background-color: lightblue;

  border-radius: 20px;

  .sumary {
    width: 90%;

    font-size: 24px;

    margin: 15px 0;
  }

  .items {
    width: 90%;

    font-size: 15px;

    margin-bottom: 8px;
  }

  .product-div {
    width: 90%;

    display: flex;
    align-items: center;

    margin-bottom: 10px;

    position: relative;

    img {
      width: 70px;
      height: 70px;

      margin-right: 6px;

      object-fit: cover;
    }

    p {
      font-size: 15px;
    }

    .quantity {
      margin-right: 3px;
    }

    .price {
      justify-self: flex-end;

      position: absolute;
      right: 0;
    }
  }

  .subtotal {
    width: 90%;

    margin-top: 15px;

    display: flex;
    justify-content: space-between;
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

export {
  CheckoutDiv,
  CentralizedDiv,
  CheckoutForm,
  ProductInfo,
  InputDiv,
  LoadingDiv,
};
