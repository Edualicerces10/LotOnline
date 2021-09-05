import { gql } from "graphql-request"

export const GET_DESTINOS = gql`
query getDestinos{
  destinos {
    id
    valor
    tipoDeViagem
    origem
    destinoViagem
    dataViagem
  }
}
`