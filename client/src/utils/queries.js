import { gql } from '@apollo/client';

export const QUERY_ALL_PRODUCTS = gql`
    query GetAllProducts {
    getAllProducts {
        _id
        name
        user_id
        description
        image
        price

  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
export const QUERY_ORDERS = gql`
  query GetAllOrders {
  getAllOrders {
    _id
    purchaseDate
    user {
      _id
    }
    fulfilled
    products {
      _id
    }
  }
}
`;

export const QUERY_PRODUCTS_BY_IDS = gql`
  query GetProductsByIds($productIds: [ID!]!) {
    getProductsByIds(_ids: $productIds) {
      name
    }
  }
`;


export const QUERY_ORDERS_WITH_PRODUCTS = gql`
  query GetAllOrders {
  getAllOrders {
    _id
    purchaseDate
    user {
      _id
    }
    fulfilled
    products {
      _id
      name
    }
  }
}
`;

