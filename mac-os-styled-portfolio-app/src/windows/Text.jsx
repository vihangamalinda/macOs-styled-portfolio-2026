import WindowWrapper     from "#hoc/WindowWrapper.jsx";
import { WindowControl } from "#components/index.js";
import useWindowStore    from "#store/window.js";

const Text=()=>{
    const {windowList } = useWindowStore();
    const data = windowList.txtfile?.data;

    if(!data) return null;

    const {name,image,subtitle, description} = data;

    return (
        <>
        <div id="window-header">
            <WindowControl target="txtfile" />
            <h2>{name}</h2>
        </div>
            <div className="p-5 space-y-6 bg-white">
                {image ? (
                    <div className="w-full">
                    <img src={image} alt={name} className="w-full h-auto rounded"/>
                    </div>
                ):null}

                {subtitle && (<h3 className="text-lg font-semibold">{subtitle}</h3>)}

                {Array.isArray(description) && description.length > 0 && (
                        <div className="space-y-3 leading-relaxed text-base text-gray-800">
                            {description.map((para,index)=>( <p key={index}>{para}</p>))}
                        </div>
                    )
                }
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text,"txtfile");
export default TextWindow;