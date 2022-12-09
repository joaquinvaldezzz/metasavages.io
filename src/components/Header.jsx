import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const nav = document.querySelector('[aria-label="Desktop navigation"]')
    const links = nav.querySelectorAll('a')

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault()
      })
    })
  }, [])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8 xl:px-0">
        <div className="flex items-center justify-between">
          <a href="">
            <span className="sr-only">Meta Savages</span>
            <img
              className="w-24 lg:w-40 xl:w-48"
              src="/images/meta-savages.png"
              alt="Meta Savages"
            />
          </a>

          <nav
            className="header-nav hidden font-display font-bold md:flex md:items-center md:gap-4 lg:gap-8 lg:text-lg xl:gap-10 xl:text-xl"
            aria-label="Desktop navigation"
          >
            <a className="active uppercase transition-all" href="#">
              Metaverse
            </a>
            <a className="uppercase transition-all" href="#">
              NFT&apos;s
            </a>
            <a className="uppercase transition-all" href="#">
              Roadmap
            </a>
            <a className="uppercase transition-all" href="#">
              Team &amp; Partners
            </a>
            <a className="uppercase transition-all" href="#">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
