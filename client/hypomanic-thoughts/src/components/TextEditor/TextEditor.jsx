//This is the WYSIWYG text editor TipTap, but made with Mantine for UI (Tiptap doesnt come with ui, you have to build it. WHy is is so hard to just find a text editor)

import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import "../TextEditor/textEditor.css"

export default function TextEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start typing your thoughts here...</p>',
  });


//for testing
const handleClick = () => {
  console.log(editor.getJSON()) 
}




  return (
    <RichTextEditor editor={editor} className="tiptapEditorContainer">
      {/* This builds the toolbar automatically */}
      <RichTextEditor.Toolbar>
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Strikethrough />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.H1 />
          <RichTextEditor.H2 />
        </RichTextEditor.ControlsGroup>

        <RichTextEditor.ControlsGroup>
          <RichTextEditor.BulletList />
          <RichTextEditor.OrderedList />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      {/* This is the actual typing area */}
      <RichTextEditor.Content />
      <button type="button" onClick={handleClick}>Test</button> {/*For testing*/}
    </RichTextEditor>


    
  );
}