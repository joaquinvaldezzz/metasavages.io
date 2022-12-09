export default function Transistion1() {
  return (
    <div className="pointer-events-none select-none" role="grid">
      <div className="grid grid-cols-3 lg:grid-cols-5" role="row">
        <div role="gridcell">
          <img src="/images/bg-transition-2/artboard-1.png" alt="" />
        </div>

        <div role="gridcell">
          <img src="/images/bg-transition-2/artboard-2.png" alt="" />
        </div>

        <div className="hidden lg:block" role="gridcell">
          <img src="/images/bg-transition-2/artboard-3.png" alt="" />
        </div>

        <div className="hidden lg:block" role="gridcell">
          <img src="/images/bg-transition-2/artboard-4.png" alt="" />
        </div>

        <div className="" role="gridcell">
          <img src="/images/bg-transition-2/artboard-5.png" alt="" />
        </div>
      </div>
    </div>
  )
}
