import {useEffect,useState} from "react";

import WallpaperLayer   from "#containers/WallpaperLayer.jsx";
import {wallpapers} from "#constants/index.js";

const CHANGE_INTERVAL = 12000;

const BackgroundContainer = () => {
    const [activeLayer,setActiveLayer] = useState(0);
    const [currentIndex,setCurrentIndex] = useState(0);

    const [layerImages, setLayerImages] = useState([
        wallpapers[0],
        wallpapers[1% wallpapers.length],
    ]);

    useEffect(() => {
        if(wallpapers.length <2) return;

        const nextIndex= (currentIndex +1) % wallpapers.length;
        const inactiveLayer =1-activeLayer;
        const nextImage = new Image();

        nextImage.src=wallpapers[nextIndex];

        let timer;

        const startSlideShow =()=>{
            setLayerImages((previous)=>{
                const updated =[...previous];
                updated[inactiveLayer]=wallpapers[nextIndex];
                return updated;
            });

            timer = setTimeout(()=>{
                setActiveLayer(inactiveLayer);
                setCurrentIndex(nextIndex);
            },CHANGE_INTERVAL);
        };

        if(nextImage.complete && nextImage.naturalWidth >0){
            startSlideShow();
        }else{
            nextImage.onload =startSlideShow;
        }

        return ()=>{
            clearTimeout(timer);
            nextImage.onload=null;
        };

    }, [currentIndex,activeLayer]);

    if(wallpapers.length ===0) return null;

    return (
        <div className="background-container">
            <WallpaperLayer src={layerImages[0]} active={activeLayer === 0} />
            <WallpaperLayer src={layerImages[1]} active={activeLayer === 1} />
        </div>
    )
}

export default BackgroundContainer;