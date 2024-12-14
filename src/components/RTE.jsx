import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller } from 'react-hook-form'

const RTE = ({name,control,label,defaultValue=''}) => {
  return (
    <div className='w-full'>
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
      name = {name || 'content'}
      control={control}
      render={({field : {onChange}})=>(

        <Editor
      apiKey='l92whjuarmmw42d5q1xg6svm41pah3rzi8y390dsvk5aksqi'
      init={{
        plugins: [
          "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
      }}
      initialValue={defaultValue}
      onEditorChange = {onChange}
    />

    // <Editor 
    //   apiKey='l92whjuarmmw42d5q1xg6svm41pah3rzi8y390dsvk5aksqi'
    //   initialValue={defaultValue}
    //   init ={
    //     {
    //         branding : false,
    //         height : 500,
    //         menubar : true,
    //         plugins : [
    //             "image",
    //             "advlist",
    //             "autolink",
    //             "lists",
    //             "link",
    //             "image",
    //             "charmap",
    //             "preview",
    //             "anchor",
    //             "searchreplace",
    //             "visualblocks",
    //             "code",
    //             "fullscreen",
    //             "insertdatetime",
    //             "media",
    //             "table",
    //             "code",
    //             "help",
    //             "wordcount",
    //             "anchor",
    //         ],
    //         toolbar:
    //         "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
    //         content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

    //         content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"

    //     }}
    //     onEditorChange = {onChange}
    // />  // Editor closing
    )} 
    /> {/* Controller closing */}
    </div>

  )
}

export default RTE