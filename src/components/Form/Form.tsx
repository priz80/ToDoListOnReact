import { useState, useRef, FormEvent } from "react"
import "./Form.scss"

export const Form = (props: { createNewToDo: (text: string) => void }) => {
  const [text, setText] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const formSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      props.createNewToDo(text.trim())
      setText('')
      inputRef.current?.focus()
    }
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={formSubmit}>
        <label>
          <input
            ref={inputRef}
            value={text}
            type="text"
            placeholder="Добавить задачу..."
            onChange={(e) => setText(e.target.value)}
            autoFocus
          />
          <button type="submit" disabled={!text.trim()}>
            Добавить
          </button>
        </label>
      </form>
    </div>
  )
}
