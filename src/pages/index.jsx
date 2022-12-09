import { Fragment } from 'react'
import Title from '../components/Title'
import Header from '../components/Header'
import MetaIsland from '../backgrounds/MetaIsland'
import Transistion1 from '../backgrounds/Transition1'

export default function Home() {
  return (
    <Fragment>
      <Title suffix="The Web 3.0 tribe for digital entrepreneurs">Meta Savages</Title>
      <Header />

      <section className="relative min-h-[768px] overflow-hidden lg:min-h-[1024px]">
        <MetaIsland />
      </section>

      <section className="relative overflow-hidden">
        <MetaIsland />

        <div className="relative py-8 md:py-12 lg:py-16">
          <h2 className="heading type-1" data-number="01">
            Metasavages Metaverse
          </h2>

          <div className="relative mx-auto grid max-w-screen-md grid-cols-1 px-8 lg:max-w-screen-lg lg:grid-cols-2 lg:gap-8">
            <div className="text-lg">
              <p className="mb-4">
                Your gateway to the future. Attend epic world-class events, collect NFT&apos;s and
                rewards, explore island&apos;s environments and be a part of the tribe. With the
                help of the revolutionary blockchain technology and the game engine power of Unity,
                Metasavages have harnessed the potential of web 3.0 which has enabled us to create a
                secure and immersive platform to create natural human interaction that could be
                accessed from any device at any time.
              </p>
              <p>
                <span className="font-bold">Framework</span>
                <br />
                Your island of adventures
                <br />
                Pioneering Learn-To-Earn NFT&apos;s
                <br />
                and Item Ownership 10
                <br />
                playable characters
              </p>
            </div>

            <div>
              <img
                className="pointer-events-none select-none lg:-mt-16"
                src="/images/plate-1.png"
                alt=""
              />
            </div>
          </div>

          <div className="relative mt-24">
            <h2 className="heading type-2" data-number="02">
              Map of Metaverse Island
            </h2>

            {/* <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 w-full min-w-[320px] max-w-2xl -translate-x-1/2 -translate-y-1/2 select-none">
              <div className="relative">
                <img src="/svg/map-of-metaverse-island.svg" alt="" />
                <div className="absolute top-0 left-1.5 font-display text-2xl font-bold sm:top-1 sm:left-2 sm:text-4xl md:top-1.5 md:left-2.5">
                  02
                </div>
              </div>
            </div> */}
          </div>

          <div className="-mx-4 max-w-screen-lg px-8 lg:mx-auto">
            <img className="pointer-events-none select-none" src="/images/plate-2.png" alt="" />
          </div>

          <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 px-8 lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <img className="mx-auto sm:w-40" src="/images/map-icon.png" alt="" />
                </div>

                <div>
                  <img className="mx-auto sm:w-40" src="/images/map-icon.png" alt="" />
                </div>

                <div>
                  <img className="mx-auto sm:w-40" src="/images/map-icon.png" alt="" />
                </div>

                <div>
                  <img className="mx-auto sm:w-40" src="/images/map-icon.png" alt="" />
                </div>

                <div>
                  <img className="mx-auto sm:w-40" src="/images/map-icon.png" alt="" />
                </div>

                <div>
                  <img className="mx-auto sm:w-40" src="/images/map-icon.png" alt="" />
                </div>
              </div>
            </div>

            <div className="space-y-4 font-display text-lg">
              <div>
                <p className="font-bold">Networking area</p>
                <p>
                  Relaxed environment where tribe members can join an existing group or start a new
                  group to discuss topics of interest
                </p>
              </div>

              <div>
                <p className="font-bold">Party Zone</p>
                <p>
                  Treat your special other to a night out on the town in the adults only area, or
                  keep an eye out for that special someone
                </p>
              </div>

              <div>
                <p className="font-bold">Culture Zone</p>
                <p>
                  Check out the NFT museum, NFT gallery, or marketplace and network with those who
                  share a similar passion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Transistion1 />
    </Fragment>
  )
}
