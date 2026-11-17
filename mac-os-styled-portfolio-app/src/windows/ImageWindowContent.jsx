import useWindowStore from "#store/window.js";
import {WindowControl} from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const ImageWindowContent = () => {
    const {windowList} = useWindowStore();
    const data = windowList.imgfile?.data;

    if (!data) return null;

    const {name, imageUrl} = data;

    return (
        <>
            <div id="window-header">
                <WindowControl target="imgfile"/>
                <h2>{name}</h2>
            </div>

            <div className="p-5 bg-white">
                {imageUrl ? (
                    <div className="w-full">
                        <img src={imageUrl} alt={name} className="w-full h-auto max-h-[70vh]"/>
                    </div>
                ) : null}
            </div>
        </>
    )
}

const imageWindowContentWindow = WindowWrapper(ImageWindowContent, "imgfile");
export default imageWindowContentWindow;