import Header from '../src/components/layout/header'
import Footer from '../src/components/layout/footer'

import axios from 'axios'
import { HEADER_FOOTER_ENDPOINT } from '../src/utils/constants/endpoints'

export default function Home({ data }) {
  const { header, footer } = data.data
  return (
    <div>
      <Header header={header} />
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className="text-red-600">text color</p>
      </main>

      <Footer footer={footer} />
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get(HEADER_FOOTER_ENDPOINT)
  console.log(data, 'data')

  return {
    props: {
      data: data || {},
    },
    revalidate: 1,
  }
}
