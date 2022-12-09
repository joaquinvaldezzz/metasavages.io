import { Fragment } from 'react'
import Title from '../components/Title'
import Header from '../components/Header'
import MetaIsland from '../backgrounds/MetaIsland'

export default function Home() {
  return (
    <Fragment>
      <Title suffix="The Web 3.0 tribe for digital entrepreneurs">Meta Savages</Title>
      <Header />
      <section className="relative min-h-[768px] overflow-hidden lg:min-h-[1024px]">
        <MetaIsland />
      </section>
    </Fragment>
  )
}
