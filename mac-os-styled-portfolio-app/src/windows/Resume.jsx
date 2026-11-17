import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControl} from "#components/index.js";
import {DownloadIcon}    from "lucide-react";
import { Document, Page,pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// for local purpose
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

// for deployment purpose
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dis@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
    const filePath = "files/resume.pdf";


    return (
        <>
            <div id="window-header">

                <WindowControl target="resume"/>
                <h2>Resume.pdf</h2>

                <a href="files/resume.pdf" download className="cursor-pointer" title="Download Resume"> <DownloadIcon
                    className="icon"/> </a>
            </div>
            <Document error="Could not load PDF." file={filePath} loading="Loading PDF…" suspense={false}>
                <Page pageNumber={1}
                    renderTextLayer
                      renderAnnotationLayer
                />
            </Document>
        </>
    )
}
const ResumeWindow = WindowWrapper(Resume,"resume");
export default ResumeWindow;