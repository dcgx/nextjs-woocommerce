import Header from '../src/components/layout/header'
import Footer from '../src/components/layout/footer'
import Products from '../src/components/products'

import axios from 'axios'
import {
  HEADER_FOOTER_ENDPOINT,
  GET_PRODUCTS_ENDPOINT,
} from '../src/utils/constants/endpoints'

export default function Home({ headerFooter, products }) {
  console.log(products, 'home products')
  const { header, footer } = headerFooter || {}
  return (
    <div>
      <Header header={header} />
      <main>
        <Products products={products} />
      </main>

      <Footer footer={footer} />
    </div>
  )
}

export async function getStaticProps() {
  const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT)
  const { data: productsData } = await axios.get(GET_PRODUCTS_ENDPOINT)

  return {
    props: {
      headerFooter: headerFooterData?.data ?? {},
      products: productsData?.products || {},
    },
    revalidate: 1,
  }
}
