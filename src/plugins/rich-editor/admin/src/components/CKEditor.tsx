import React, { useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../../styles/ckeditor.css";

const MyCKEditor: React.FC = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter&family=Poppins&family=Lato&family=Montserrat&family=Roboto&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div>
      <CKEditor
        editor={ClassicEditor as any}
        data="<p>Hello from CKEditor!</p>"
        config={{
          toolbar: [
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "subscript",
            "superscript",
            "strikethrough",
            "|",
            "fontFamily",
            "fontSize",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "highlight",
            "|",
            "undo",
            "redo",
          ],
          fontFamily: {
            options: [
              "default",
              "Inter, sans-serif",
              "Poppins, sans-serif",
              "Lato, sans-serif",
              "Montserrat, sans-serif",
              "Roboto, sans-serif",
            ],
            supportAllValues: true,
          },
          fontSize: {
            options: Array.from({ length: 24 }, (_, i) => `${i + 9}px`),
            supportAllValues: true,
          },
          highlight: {
            options: [
              {
                model: "purpleMarker",
                class: "marker-purple",
                title: "Purple Marker",
                color: "#543CDA",
                type: "marker",
              },
              {
                model: "blueMarker",
                class: "marker-blue",
                title: "Blue Marker",
                color: "#0054F0",
                type: "marker",
              },
            ],
          },
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ data });
        }}
      />
    </div>
  );
};

export default MyCKEditor;
