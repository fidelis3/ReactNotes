import React from "react"
import MDEditor from "@uiw/react-md-editor"

export default function Editor({ currentNote, updateNote }) {
    return (
        <section className="pane editor">
            <MDEditor
                value={currentNote?.body || ""}
                onChange={updateNote}
                preview="edit"
                hideToolbar={false}
                visibleDragBar={false}
                textareaProps={{
                    placeholder: "Start writing your note in markdown..."
                }}
                height={400}
            />
        </section>
    )
}