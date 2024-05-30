import React from 'react'
import { goldman } from '@/app/fonts'

interface AssetProps {
  cn?: string
  color: string
  customStyle: { top: number; left: number, zIndex?: number }
}

interface AssetPropsExtended extends AssetProps {
  width: number
  height: number
  borderRadius: number
}

const colors = {
  blue: '#142664',
  pink: '#FF2E93',
  green: '#00E6B3'
}

const xsSize = { width: 9, height: 9, borderRadius: 3 }
const smSize = { width: 11, height: 11, borderRadius: 3 }
const mdSize = { width: 14, height: 14, borderRadius: 4 }
const lgSize = { width: 24, height: 24, borderRadius: 6 }
const xlSize = { width: 34, height: 34, borderRadius: 6 }
const wideSize = { width: 60, height: 14, borderRadius: 4 }

const assets = [
  { color: colors.blue, customStyle: { top: -32, left: 128 }, ...xsSize },
  { color: colors.blue, customStyle: { top: 190, left: -100 }, ...xsSize },
  { color: colors.pink, customStyle: { top: 10, left: -80 }, ...smSize },
  { color: colors.blue, customStyle: { top: 155, left: 65 }, ...smSize },
  { color: colors.blue, customStyle: { top: 75, left: -35 }, ...smSize },
  { color: colors.green, customStyle: { top: 55, left: -138 }, ...smSize },
  { color: colors.green, customStyle: { top: 190, left: 120 }, ...mdSize },
  { color: colors.green, customStyle: { top: 210, left: -40, zIndex: 2 }, ...lgSize },
  { color: colors.blue, customStyle: { top: 50, left: 150, zIndex: 2 }, ...xlSize },
  { color: colors.green, customStyle: { top: 35, left: 12 }, ...wideSize },
  { color: colors.pink, customStyle: { top: 240, left: 110 }, ...wideSize },
]

function SectionsTitle ({title}: { title: string} ) {
  return(
    <div className='relative w-full title-wrapper flex items-center' style={{ height: '250px'}}>
      <h2 style={{ zIndex: 2 }} className={[goldman.className, "text-3xl md:mr-4"].join(' ')}>{title}</h2>
      <div className='hidden md:block absolute top-0 w-full h-full'>
        {assets.map((item) => assetDetailSquare(item))}
        {assetDetailCustom({ color: colors.green, customStyle: { top: -20, left: 120 }})}
        {assetDetailCustom({ color: colors.pink, customStyle: { top: 220, left: -100 }})}
        {assetDetailCustom({ cn: 'rotate-180', color: colors.blue, customStyle: { top: 180, left: 170 }})}
        {assetDetailCustomLG({ color: colors.pink, customStyle: { top: 70, left: 80 }})}
      </div>
    </div>
  )
}

const assetDetailSquare = ({ cn, color, width, height, borderRadius, customStyle }: AssetPropsExtended) => (
  <svg className={[cn, 'absolute'].join(' ')} width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: customStyle.top, left: customStyle.left, zIndex: customStyle.zIndex }}>
    <rect width={width} height={height} rx={borderRadius} fill={color} />
  </svg>
)

const assetDetailCustom = ({ cn, color, customStyle }: AssetProps) => (
  <svg className={[cn, 'absolute'].join(' ')} width="73" height="38" viewBox="0 0 73 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: customStyle.top, left: customStyle.left, zIndex: customStyle.zIndex }}>
    <path d="M62.8232 37.8621H10.0862C4.56333 37.8621 0.0861816 33.3849 0.0861816 27.8621V21.3728C0.0861816 15.85 4.56334 11.3728 10.0862 11.3728H33.4256C36.4376 11.3728 38.8793 8.93115 38.8793 5.91918C38.8793 2.9072 41.321 0.465515 44.333 0.465515H62.8232C68.3461 0.465515 72.8232 4.94266 72.8232 10.4655V27.8621C72.8232 33.3849 68.3461 37.8621 62.8232 37.8621Z" fill={color} />
  </svg>
)

const assetDetailCustomLG = ({ color, customStyle }: AssetProps) => (
  <svg className='absolute' width="92" height="45" viewBox="0 0 92 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: customStyle.top, left: customStyle.left, zIndex: customStyle.zIndex }}>
    <path d="M82.5129 0.487459L9.99561 0.0713484C5.00495 0.0427115 0.94397 4.08046 0.94397 9.0712V21.1444C0.94397 26.115 4.9734 30.1444 9.94396 30.1444H16.3017C20.3177 30.1444 23.5733 33.4 23.5733 37.416C23.5733 41.4319 26.8289 44.6875 30.8448 44.6875H82.4612C87.4318 44.6875 91.4612 40.6581 91.4612 35.6875V9.48731C91.4612 4.5369 87.4632 0.515865 82.5129 0.487459Z" fill={color} />
  </svg>
)

export default SectionsTitle