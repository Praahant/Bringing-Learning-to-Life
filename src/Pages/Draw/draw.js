import {track, useEditor, Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import Header from '../../header'
export default function () {
    function SaveButton() {
        const editor = useEditor()
        return (
            <button style={{backgroundColor: 'red',color:'white',borderRadius:'5px',padding:'15px',}}
                onClick={() => {
                    console.log(editor);
                    const snapshot = editor.store.getSnapshot()
                    const stringified = JSON.stringify(snapshot)
                    localStorage.setItem('my-editor-snapshot', stringified)
                }}
            >
                Save
            </button>
        )
    }
	return (
        
		<div style={{ height: '90vh', top:"100px", }}>
			<Tldraw />
		
        
	</div>)
}