import { type FormEvent, useState } from 'react'


interface TodoFormProps {
  onSubmit: (_todoTitle: string) => void
}

export const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [title, setTitle] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmed = title.trim()
    if (trimmed) {
      onSubmit(trimmed)
      setTitle('')
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Add Todo:
        <input
          aria-label="Write todo item"
          type="text"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          placeholder="Add new todo"
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}