import DestinosTemplate from "../templates/Destinos"
import { GET_DESTINOS } from "../graphql/queries"
import client from "../graphql/client"

import { DestinosProps } from "../components/CardDestino/Card"
import { GetDestinosQuery } from "../graphql/generated/graphql"

export default function Destinos({ destinos }: DestinosProps){
  return <DestinosTemplate destinos={destinos} />
}

export const getStaticProps = async () => {
  const { destinos } = await client.request<GetDestinosQuery>(GET_DESTINOS)

  console.log(destinos)
  
  return {
    props: {
      destinos
    }
  }
}
