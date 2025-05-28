export const uploadService = {
	uploadImg,
}

async function uploadImg(ev) {
	const CLOUD_NAME = 'cloud name' //TODO: modify
	const UPLOAD_PRESET = 'preset' //TODO: modify
	const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload` //TODO: modify

	const formData = new FormData()
	
    // Building the request body
	formData.append('file', ev.target.files[0])
	formData.append('upload_preset', UPLOAD_PRESET)
	
    // Sending a post method request to Cloudinary API
	try {
		const res = await fetch(UPLOAD_URL, { method: 'POST', body: formData })
		const imgData = await res.json()
		return imgData
	} catch (err) {
		console.error(err)
		throw err
	}
}


// Example usage:
// import { useState } from 'react'
// import { uploadService } from '../../../../../services/board/upload.service'

// export function ImgUploader({ onUploaded = null }) {
//   const [isUploading, setIsUploading] = useState(false)

//   async function uploadImg(ev) {
//     setIsUploading(true)
//     const { secure_url } = await uploadService.uploadImg(ev)
//     setIsUploading(false)

//     if (onUploaded) onUploaded(secure_url)
//   }

//   return (
//     <div className="ImgUploader">
//       <label htmlFor="imgUpload"/>
//       <input
//         className="hidden-input"
//         type="file"
//         onChange={uploadImg}
//         accept="image/*"
//         id="imgUpload"
//       />
//     </div>
//   )
// }
