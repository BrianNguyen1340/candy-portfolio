const DigitalBall = () => {
  return (
    <div className='relative order-2 w-full'>
      <div className='stripe h-[1px] w-full bg-[#1C1D20] dark:bg-white'></div>
      <div className='digital-ball animate-digital-ball'>
        <div className='overlay'></div>
        <div className='globe'>
          <div className='globe-wrap'>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle-hor'></div>
            <div className='circle-hor-middle'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalBall
