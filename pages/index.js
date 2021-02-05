import Head from 'next/head'
import {useEffect} from "react"
import { Gluejar } from '@charliewilco/gluejar'
import TextareaAutosize from 'react-textarea-autosize';
import html2canvas from 'html2canvas';


export default function Home() {

  function download() {
    console.log("downloading...")
    html2canvas(document.querySelector('#meme'), {allowTaint: true}).then(function(canvas) {
      var link = document.createElement('a');
      link.download = 'my-image-name.jpeg';
      link.href = canvas.toDataURL();
      link.click();
  });
  
  
  }
  
  return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div id="meme" className="bg-white w-full md:w-3/5 lg:w-2/5 px-4 pt-4 flex flex-col">
          <div className="w-full border-none outline-none pb-2 md:pb-3 lg:pb-4 text-lg md:text-2xl lg:text-3xl font-sans font-thin" contentEditable>
            opis memeta
          </div>
          <Gluejar onPaste={files => console.log(files)} onError={err => console.error(err)}>
            {({ images }) =>
              images.length > 0 &&
              images.map(image => <img src={image} key={image} alt={`Pasted: ${image}`} />)
            }
          </Gluejar>
          <img src="/watermark.png" />
        </div>
        <div className="mt-6 bg-blue-600 text-white px-6 py-3 rounded cursor-pointer" onClick={() => download()}>
          Shrani
        </div>
      </div>
  )
}
