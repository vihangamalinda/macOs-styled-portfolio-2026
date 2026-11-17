import React from 'react'

const WallpaperLayer = ({src,active}) => {
    return (
        <img className={`wallpaper-layer ${active? 'active' : ''}`} src={src} alt="Wallpaper" aria-hidden="true" draggable="false"/>
    )
}
export default WallpaperLayer
